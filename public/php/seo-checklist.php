<?php
/**
 * SEO Checklist Email Submission Handler
 * 
 * This script processes email submissions from the SEO checklist form
 * and forwards them to the site administrator. It also sends a confirmation
 * email to the subscriber.
 * 
 * @package OttawaWebMasters
 */

// Prevent direct access to this file
if (!defined('ABSPATH') && !isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
    header('HTTP/1.0 403 Forbidden');
    exit;
}

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
$source = isset($postData['source']) ? sanitize_text_field($postData['source']) : 'SEO Checklist Page';
$timestamp = date('Y-m-d H:i:s');
$ipAddress = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];

// Log submission to database (optional)
// This assumes you have a function to log to database
// Uncomment and implement if needed
/*
function logSubmissionToDatabase($email, $source, $timestamp, $ipAddress, $userAgent) {
    // Database connection and insertion logic
    // Use prepared statements to prevent SQL injection
    
    // Example with PDO:
    try {
        $db = new PDO('mysql:host=localhost;dbname=your_database', 'username', 'password');
        $query = $db->prepare("
            INSERT INTO email_submissions (email, source, timestamp, ip_address, user_agent) 
            VALUES (:email, :source, :timestamp, :ip_address, :user_agent)
        ");
        
        $query->execute([
            ':email' => $email,
            ':source' => $source,
            ':timestamp' => $timestamp,
            ':ip_address' => $ipAddress,
            ':user_agent' => $userAgent
        ]);
        
        return true;
    } catch (PDOException $e) {
        error_log('Database Error: ' . $e->getMessage());
        return false;
    }
}

logSubmissionToDatabase($email, $source, $timestamp, $ipAddress, $userAgent);
*/

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

// Prepare confirmation email to subscriber
$confirmationSubject = 'Your SEO Checklist Access Confirmation';
$confirmationHeaders = [
    'Content-Type: text/html; charset=UTF-8',
    'From: Ottawa Web Masters <no-reply@ottawawebmasters.com>'
];

$confirmationMessage = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>SEO Checklist Access Confirmation</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h1 { color: #2E5944; }
        .button { display: inline-block; background-color: #4292AC; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank You for Accessing Our SEO Checklist!</h1>
        
        <p>Hello,</p>
        
        <p>Thank you for subscribing to our SEO checklist. You now have full access to our interactive tool to help improve your website\'s search engine visibility.</p>
        
        <p>Here\'s what you can do with the checklist:</p>
        <ul>
            <li>Track your progress on over 100 SEO tasks</li>
            <li>Save your progress as you complete items</li>
            <li>Filter tasks by different categories</li>
            <li>Search for specific optimization tasks</li>
        </ul>
        
        <p><a href="https://www.ottawawebmasters.com/seo-checklist" class="button">Access Your SEO Checklist</a></p>
        
        <p>If you have any questions or need assistance with your SEO strategy, please don\'t hesitate to contact us.</p>
        
        <p>
        Best regards,<br>
        The Ottawa Web Masters Team<br>
        <a href="https://www.ottawawebmasters.com">www.ottawawebmasters.com</a>
        </p>
        
        <hr>
        <p style="font-size: 12px;">
            You\'re receiving this email because you signed up for our SEO checklist. 
            If you believe this is in error, please contact us at info@ottawawebmasters.com
        </p>
    </div>
</body>
</html>
';

// Send confirmation email to subscriber
$confirmationEmailSent = mail($email, $confirmationSubject, $confirmationMessage, implode("\r\n", $confirmationHeaders));

// Prepare response
if ($adminEmailSent) {
    $response['success'] = true;
    $response['message'] = 'Thank you! Your email has been submitted successfully.';

    if ($confirmationEmailSent) {
        $response['data']['confirmationSent'] = true;
    }
} else {
    $response['message'] = 'There was an error processing your request. Please try again later.';
    error_log('Email submission failed for: ' . $email);
}

// Return JSON response
echo json_encode($response);
exit;
?>