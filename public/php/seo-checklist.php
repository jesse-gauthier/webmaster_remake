<?php
/**
 * SEO Checklist Email Submission Handler
 * 
 * This script processes email submissions from the SEO checklist form
 * and forwards them to the site administrator.
 * 
 * @package OttawaWebMasters
 */

// Set headers for JSON response
header('Content-Type: application/json');

// Initialize response array
$response = [
    'success' => false,
    'message' => '',
    'data' => []
];

// Verify this is a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['message'] = 'Invalid request method.';
    echo json_encode($response);
    exit;
}

// Get POST data
$postData = json_decode(file_get_contents('php://input'), true);

// If no data was received or parsing failed
if (empty($postData)) {
    $postData = $_POST;
}

// Validate email
$email = isset($postData['email']) ? filter_var(trim($postData['email']), FILTER_VALIDATE_EMAIL) : false;

if (!$email) {
    $response['message'] = 'Please provide a valid email address.';
    echo json_encode($response);
    exit;
}

// Validate agreement to terms
$agreeToTerms = isset($postData['agreeToTerms']) ? (bool) $postData['agreeToTerms'] : false;

if (!$agreeToTerms) {
    $response['message'] = 'You must agree to the terms to proceed.';
    echo json_encode($response);
    exit;
}

// Get additional data if available
$source = isset($postData['source']) ? $postData['source'] : 'SEO Checklist Page';
$timestamp = date('Y-m-d H:i:s');
$ipAddress = $_SERVER['REMOTE_ADDR'];
$userAgent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'Unknown';

// Prepare email to admin
$adminEmail = 'jesse@ottawawebmasters.ca';
$subject = 'New SEO Checklist Subscription';
$headers = [
    'Content-Type: text/html; charset=UTF-8',
    'From: Ottawa Web Masters <no-reply@ottawawebmasters.com>',
    'Reply-To: ' . $email
];

$message = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New SEO Checklist Subscription</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h1 { color: #2E5944; }
        .details { background-color: #f5f5f5; padding: 15px; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>New SEO Checklist Subscription</h1>
        <p>A new user has subscribed to access the SEO checklist:</p>
        
        <div class="details">
            <p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>
            <p><strong>Source:</strong> ' . htmlspecialchars($source) . '</p>
            <p><strong>Date:</strong> ' . $timestamp . '</p>
            <p><strong>IP Address:</strong> ' . $ipAddress . '</p>
            <p><strong>User Agent:</strong> ' . htmlspecialchars($userAgent) . '</p>
        </div>
    </div>
</body>
</html>
';

// Send email to admin
$adminEmailSent = mail($adminEmail, $subject, $message, implode("\r\n", $headers));

// Prepare response
if ($adminEmailSent) {
    $response['success'] = true;
    $response['message'] = 'Thank you! Your email has been submitted successfully.';
} else {
    $response['message'] = 'There was an error processing your request. Please try again later.';
    error_log('Email submission failed for: ' . $email);
}

// Return JSON response
echo json_encode($response);
exit;
?>