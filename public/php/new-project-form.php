<?php
// Set headers for JSON response
header('Content-Type: application/json');

// Allow CORS (adjust if needed)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

// Handle preflight CORS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Only POST requests are accepted']);
    exit();
}

// Get the POST data (JSON)
$json_data = file_get_contents('php://input');
$form_data = json_decode($json_data, true);

// Log the raw submission data for debugging
error_log("Form submission received: " . $json_data);

// Validate required fields
if (empty($form_data['name']) || empty($form_data['email'])) {
    echo json_encode(['success' => false, 'message' => 'Name and email are required']);
    exit();
}

// Validate email format
if (!filter_var($form_data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit();
}

// Email recipient
$to = 'Sales@ottawawebmasters.ca';

// Email subject
$subject = 'New Web Development Project Inquiry from ' . $form_data['name'];

// Email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . $form_data['email'] . "\r\n";
$headers .= "Reply-To: " . $form_data['email'] . "\r\n";

// Format project details based on type
$project_details = '';
if ($form_data['projectType'] === 'website') {
    $project_details .= "<p><strong>Website Type:</strong> " . htmlspecialchars($form_data['websiteType'] ?? 'Not specified') . "</p>";
    $project_details .= "<p><strong>Number of Pages:</strong> " . htmlspecialchars($form_data['numPages'] ?? 'Not specified') . "</p>";
    $project_details .= "<p><strong>Content Ready:</strong> " . ($form_data['contentReady'] ? 'Yes' : 'No') . "</p>";
} else if ($form_data['projectType'] === 'ecommerce') {
    $project_details .= "<p><strong>Number of Products:</strong> " . htmlspecialchars($form_data['numProducts'] ?? 'Not specified') . "</p>";
    $project_details .= "<p><strong>Payment Gateways:</strong> " . htmlspecialchars(implode(', ', $form_data['paymentGateways'] ?? ['None selected'])) . "</p>";
} else if ($form_data['projectType'] === 'webapp') {
    $project_details .= "<p><strong>App Features:</strong> " . htmlspecialchars(implode(', ', $form_data['appFeatures'] ?? ['None selected'])) . "</p>";
    $project_details .= "<p><strong>User Authentication:</strong> " . ($form_data['userAuth'] ? 'Yes' : 'No') . "</p>";
} else if ($form_data['projectType'] === 'other') {
    $project_details .= "<p><strong>Project Description:</strong> " . htmlspecialchars($form_data['projectDescription'] ?? 'Not provided') . "</p>";
}

// Format the budget range for better readability
$budget_display = $form_data['budget'];
if ($budget_display === '1000-3000') {
    $budget_display = '$1,000 - $3,000';
} else if ($budget_display === '3000-5000') {
    $budget_display = '$3,000 - $5,000';
} else if ($budget_display === '5000-10000') {
    $budget_display = '$5,000 - $10,000';
} else if ($budget_display === '10000+') {
    $budget_display = '$10,000+';
}

// Format the timeline for better readability
$timeline_display = $form_data['timeline'];
if ($timeline_display === '1-month') {
    $timeline_display = 'Within 1 month';
} else if ($timeline_display === '2-3-months') {
    $timeline_display = '2-3 months';
} else if ($timeline_display === '3-6-months') {
    $timeline_display = '3-6 months';
} else if ($timeline_display === '6-months+') {
    $timeline_display = '6+ months';
}

// Build email body
$message = "
<html>
<head>
    <title>New Web Development Project Inquiry</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #2D2D2D; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h1 { color: #2E5944; border-bottom: 2px solid #EDF5F0; padding-bottom: 10px; }
        h2 { color: #4292AC; margin-top: 20px; }
        .section { margin-bottom: 30px; padding: 15px; background-color: #F7F3E8; border-radius: 5px; }
        p { margin: 5px 0; }
        .footer { margin-top: 20px; font-size: 12px; color: #777; }
    </style>
</head>
<body>
    <div class='container'>
        <h1>New Web Development Project Inquiry</h1>
        
        <div class='section'>
            <h2>Client Information</h2>
            <p><strong>Name:</strong> " . htmlspecialchars($form_data['name']) . "</p>
            <p><strong>Email:</strong> " . htmlspecialchars($form_data['email']) . "</p>
            <p><strong>Company:</strong> " . htmlspecialchars($form_data['companyName'] ?? 'Not provided') . "</p>
            <p><strong>Phone:</strong> " . htmlspecialchars($form_data['phoneNumber'] ?? 'Not provided') . "</p>
        </div>
        
        <div class='section'>
            <h2>Project Overview</h2>
            <p><strong>Project Type:</strong> " . ucfirst(htmlspecialchars($form_data['projectType'])) . "</p>
            <p><strong>Budget Range:</strong> " . htmlspecialchars($budget_display) . "</p>
            <p><strong>Timeline:</strong> " . htmlspecialchars($timeline_display) . "</p>
        </div>
        
        <div class='section'>
            <h2>Project Details</h2>
            " . $project_details . "
        </div>";

// Add additional information section if any of these fields are filled
if (!empty($form_data['designPreferences']) || !empty($form_data['competitorWebsites']) || !empty($form_data['additionalInfo'])) {
    $message .= "
        <div class='section'>
            <h2>Additional Information</h2>";

    if (!empty($form_data['designPreferences'])) {
        $message .= "<p><strong>Design Preferences:</strong><br>" . nl2br(htmlspecialchars($form_data['designPreferences'])) . "</p>";
    }

    if (!empty($form_data['competitorWebsites'])) {
        $message .= "<p><strong>Competitor/Inspirational Websites:</strong><br>" . nl2br(htmlspecialchars($form_data['competitorWebsites'])) . "</p>";
    }

    if (!empty($form_data['additionalInfo'])) {
        $message .= "<p><strong>Additional Information:</strong><br>" . nl2br(htmlspecialchars($form_data['additionalInfo'])) . "</p>";
    }

    $message .= "
        </div>";
}

// Add submission timestamp and footer
$message .= "
        <div class='footer'>
            <p>This inquiry was submitted on " . date('F j, Y \a\t g:i a') . "</p>
            <p>© " . date('Y') . " Ottawa Webmasters</p>
        </div>
    </div>
</body>
</html>
";

// Send email
$mail_sent = mail($to, $subject, $message, $headers);

// Log submission
try {
    // Ensure submissions directory exists
    $submissions_dir = __DIR__ . '/submissions/';
    if (!is_dir($submissions_dir)) {
        mkdir($submissions_dir, 0755, true);
    }

    // Log to traditional log file
    $log_file = __DIR__ . '/form_submissions.log';
    $timestamp = date('Y-m-d H:i:s');
    $log_message = "[{$timestamp}] Form submitted by {$form_data['name']} ({$form_data['email']}) - Project type: {$form_data['projectType']}\n";
    file_put_contents($log_file, $log_message, FILE_APPEND);

    // Save full submission data to a JSON file
    $json_filename = $submissions_dir . 'project_form_' . date('Y-m-d_His') . '_' . substr(md5(rand()), 0, 6) . '.json';
    file_put_contents($json_filename, json_encode([
        'timestamp' => $timestamp,
        'status' => $mail_sent ? 'SUCCESS' : 'FAILED',
        'ip' => $_SERVER['REMOTE_ADDR'],
        'data' => $form_data,
        'formatted' => [
            'budget' => $budget_display,
            'timeline' => $timeline_display
        ]
    ], JSON_PRETTY_PRINT));
} catch (Exception $e) {
    // Log failure shouldn't stop the process
    error_log("Failed to write to log file: " . $e->getMessage());
}

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Your form has been submitted successfully.']);
} else {
    // Log the mail sending error
    error_log("Failed to send email for form submission from: " . $form_data['email']);
    echo json_encode(['success' => false, 'message' => 'Failed to send the email. Please try again later or contact us directly.']);
}
?>