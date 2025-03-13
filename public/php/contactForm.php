<?php
// Contact Form Submission Handler

// Configuration
define('LOG_FILE', __DIR__ . '/submissions/contact_log.txt');
define('SUBMISSIONS_DIR', __DIR__ . '/submissions/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB max file size
define('ALLOWED_ORIGINS', [
    'http://localhost',
    'https://ottawawebmasters.ca',
    'http://127.0.0.1'
]);

// Logging function
function logSubmission($data, $status)
{
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
function setupHeaders()
{
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
function validateInput($data)
{
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

// Format service and budget labels for display
function formatServiceLabel($service)
{
    $labels = [
        'wordpress_development' => 'WordPress Development',
        'wordpress_maintenance' => 'WordPress Maintenance',
        'shopify_development' => 'Shopify Development',
        'shopify_maintenance' => 'Shopify Maintenance',
        'consultation' => 'Consultation',
        'other' => 'Other'
    ];
    return $labels[$service] ?? ucfirst(str_replace('_', ' ', $service));
}

function formatBudgetLabel($budget)
{
    $labels = [
        'under_1000' => 'Under $1,000',
        '1000_5000' => '$1,000 - $5,000',
        '5000_10000' => '$5,000 - $10,000',
        '10000_25000' => '$10,000 - $25,000',
        'over_25000' => 'Over $25,000'
    ];
    return $labels[$budget] ?? ucfirst(str_replace('_', ' ', $budget));
}

// Main submission handler
function handleSubmission()
{
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

    // Format service and budget for display
    $serviceLabel = formatServiceLabel($data['service']);
    $budgetLabel = formatBudgetLabel($data['budget']);

    // Prepare email data
    $to = 'jesse@ottawawebmasters.ca';
    $subject = 'New Project Inquiry from ' . $data['name'];

    // Create HTML email
    $htmlEmail = '
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { width: 100%; max-width: 600px; margin: 0 auto; }
            .header { background-color: #4A90E2; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .footer { background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; }
            .message-box { background-color: #f9f9f9; border-left: 3px solid #4A90E2; padding: 15px; margin-top: 20px; }
            h1 { margin: 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Project Inquiry</h1>
            </div>
            <div class="content">
                <div class="field">
                    <span class="label">Name:</span> ' . htmlspecialchars($data['name']) . '
                </div>
                <div class="field">
                    <span class="label">Email:</span> ' . htmlspecialchars($data['email']) . '
                </div>
                <div class="field">
                    <span class="label">Phone:</span> ' . htmlspecialchars($data['phone']) . '
                </div>
                <div class="field">
                    <span class="label">Service:</span> ' . htmlspecialchars($serviceLabel) . '
                </div>
                <div class="field">
                    <span class="label">Budget Range:</span> ' . htmlspecialchars($budgetLabel) . '
                </div>
                <div class="message-box">
                    <span class="label">Message:</span><br>
                    ' . nl2br(htmlspecialchars($data['message'])) . '
                </div>
            </div>
            <div class="footer">
                Submitted on ' . date('F j, Y \a\t g:i a') . ' from IP: ' . $_SERVER['REMOTE_ADDR'] . '<br>
                Ottawa Webmasters - Contact Form Submission
            </div>
        </div>
    </body>
    </html>';

    // Plain text version as fallback
    $textEmail = "Project Inquiry Details:\n\n";
    $textEmail .= "Name: " . $data['name'] . "\n";
    $textEmail .= "Email: " . $data['email'] . "\n";
    $textEmail .= "Phone: " . $data['phone'] . "\n";
    $textEmail .= "Service: " . $serviceLabel . "\n";
    $textEmail .= "Budget Range: " . $budgetLabel . "\n\n";
    $textEmail .= "Message:\n" . $data['message'] . "\n";

    // Email headers for HTML email
    $headers = [
        'From: Ottawa Webmasters <noreply@ottawawebmasters.ca>',
        'Reply-To: ' . htmlspecialchars($data['email']),
        'X-Mailer: PHP/' . phpversion(),
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=utf-8'
    ];

    // Attempt to send email
    try {
        $mailSent = mail($to, $subject, $htmlEmail, implode("\r\n", $headers));

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