<?php
// Contact Form Submission Handler

// Configuration
define('LOG_FILE', __DIR__ . '/submissions/contact_log.txt');
define('SUBMISSIONS_DIR', __DIR__ . '/submissions/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB max file size
define('ALLOWED_ORIGINS', [
    'http://localhost',
    'https://yourdomain.com',
    'http://127.0.0.1'
]);

// Logging function
function logSubmission($data, $status) {
    // Ensure submissions directory exists
    if (!is_dir(SUBMISSIONS_DIR)) {
        mkdir(SUBMISSIONS_DIR, 0755, true);
    }

    $logEntry = date('Y-m-d H:i:s') . " | Status: {$status}\n";
    $logEntry .= "Name: " . ($data['name'] ?? 'N/A') . "\n";
    $logEntry .= "Email: " . ($data['email'] ?? 'N/A') . "\n";
    $logEntry .= "Service: " . ($data['service'] ?? 'N/A') . "\n";
    $logEntry .= "Budget: " . ($data['budget'] ?? 'N/A') . "\n";
    $logEntry .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $logEntry .= "-------------------\n";

    file_put_contents(LOG_FILE, $logEntry, FILE_APPEND);
}

// CORS and Headers
function setupHeaders() {
    // Check origin
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (in_array($origin, ALLOWED_ORIGINS)) {
        header("Access-Control-Allow-Origin: {$origin}");
    }

    // Other security headers
    header("Content-Type: application/json");
    header("X-Content-Type-Options: nosniff");
    header("X-Frame-Options: DENY");
    header("Strict-Transport-Security: max-age=31536000; includeSubDomains");
}

// Validate input
function validateInput($data) {
    $errors = [];

    // Name validation
    if (empty($data['name']) || strlen($data['name']) < 2) {
        $errors['name'] = 'Name is required and must be at least 2 characters long.';
    }

    // Email validation
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'A valid email address is required.';
    }

    // Phone validation (allows various formats)
    if (empty($data['phone']) || !preg_match('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/', $data['phone'])) {
        $errors['phone'] = 'A valid phone number is required.';
    }

    // Service validation
    $validServices = [
        'wordpress_development', 
        'wordpress_maintenance', 
        'shopify_development', 
        'shopify_maintenance', 
        'consultation', 
        'other'
    ];
    if (empty($data['service']) || !in_array($data['service'], $validServices)) {
        $errors['service'] = 'Please select a valid service.';
    }

    // Budget validation
    $validBudgets = [
        'under_1000', 
        '1000_5000', 
        '5000_10000', 
        '10000_25000', 
        'over_25000'
    ];
    if (empty($data['budget']) || !in_array($data['budget'], $validBudgets)) {
        $errors['budget'] = 'Please select a valid budget range.';
    }

    // Message validation
    if (empty($data['message']) || strlen(trim($data['message'])) < 10) {
        $errors['message'] = 'Message is required and must be at least 10 characters long.';
    }

    return $errors;
}

// Main submission handler
function handleSubmission() {
    // Setup headers
    setupHeaders();

    // Check request method
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        exit;
    }

    // Parse input
    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true);

    // Validate input
    $validationErrors = validateInput($data);
    if (!empty($validationErrors)) {
        http_response_code(400);
        logSubmission($data, 'VALIDATION_ERROR');
        echo json_encode(['errors' => $validationErrors]);
        exit;
    }

    // Prepare email data
    $to = 'jesse@ottawawebmasters.ca';
    $subject = 'New Project Inquiry from ' . $data['name'];
    $emailBody = "Project Inquiry Details:\n\n";
    $emailBody .= "Name: " . htmlspecialchars($data['name']) . "\n";
    $emailBody .= "Email: " . htmlspecialchars($data['email']) . "\n";
    $emailBody .= "Phone: " . htmlspecialchars($data['phone']) . "\n";
    $emailBody .= "Service: " . htmlspecialchars($data['service']) . "\n";
    $emailBody .= "Budget Range: " . htmlspecialchars($data['budget']) . "\n\n";
    $emailBody .= "Message:\n" . htmlspecialchars($data['message']) . "\n";

    // Email headers
    $headers = [
        'From: jesse@ottawawebmasters.ca',
        'Reply-To: ' . htmlspecialchars($data['email']),
        'X-Mailer: PHP/' . phpversion()
    ];

    // Attempt to send email
    try {
        $mailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

        if ($mailSent) {
            logSubmission($data, 'SUCCESS');
            http_response_code(200);
            echo json_encode(['message' => 'Submission successful']);
        } else {
            logSubmission($data, 'EMAIL_SEND_FAILED');
            http_response_code(500);
            echo json_encode(['error' => 'Unable to send email']);
        }
    } catch (Exception $e) {
        logSubmission($data, 'EXCEPTION');
        http_response_code(500);
        echo json_encode(['error' => 'Server error occurred']);
    }
    exit;
}

// Execute submission handler
handleSubmission();