<?php
/**
 * SEO Checklist Email Submission Handler
 * 
 * This script processes email submissions from the SEO checklist form
 * and forwards them to the site administrator.
 * 
 * @package OttawaWebMasters
 */

// Set error handling to ensure clean JSON responses
ini_set('display_errors', '0');
error_reporting(E_ALL);

// Set headers for JSON response
header('Content-Type: application/json');

// Initialize response array
$response = [
    'success' => false,
    'message' => '',
    'data' => []
];

// Simple sanitize function to replace WordPress sanitize_text_field
function simple_sanitize($input)
{
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

try {
    // Verify this is a POST request
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method.');
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
        throw new Exception('Please provide a valid email address.');
    }

    // Validate agreement to terms
    $agreeToTerms = isset($postData['agreeToTerms']) ? (bool) $postData['agreeToTerms'] : false;

    if (!$agreeToTerms) {
        throw new Exception('You must agree to the terms to proceed.');
    }

    // Get additional data if available - use our custom sanitize function
    $source = isset($postData['source']) ? simple_sanitize($postData['source']) : 'SEO Checklist Page';
    $timestamp = date('Y-m-d H:i:s');
    $ipAddress = $_SERVER['REMOTE_ADDR'];
    $userAgent = isset($_SERVER['HTTP_USER_AGENT']) ? simple_sanitize($_SERVER['HTTP_USER_AGENT']) : 'Unknown';

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
    $adminEmailSent = @mail($adminEmail, $subject, $message, implode("\r\n", $headers));

    // Save submission data to a JSON file
    try {
        // Ensure submissions directory exists
        $submissions_dir = __DIR__ . '/submissions/';
        if (!is_dir($submissions_dir)) {
            mkdir($submissions_dir, 0755, true);
        }
        
        // Create JSON file with submission data
        $json_filename = $submissions_dir . 'seo_checklist_' . date('Y-m-d_His') . '_' . substr(md5(rand()), 0, 6) . '.json';
        $submission_data = [
            'timestamp' => $timestamp,
            'status' => $adminEmailSent ? 'SUCCESS' : 'FAILED',
            'ip' => $ipAddress,
            'data' => [
                'email' => $email,
                'source' => $source,
                'userAgent' => $userAgent,
                'agreeToTerms' => $agreeToTerms
            ]
        ];
        
        file_put_contents($json_filename, json_encode($submission_data, JSON_PRETTY_PRINT));
    } catch (Exception $e) {
        // Log error but continue processing
        error_log('SEO Checklist Error: Failed to save submission to file: ' . $e->getMessage());
    }

    // Prepare response
    if ($adminEmailSent) {
        $response['success'] = true;
        $response['message'] = 'Thank you! Your email has been submitted successfully.';
    } else {
        throw new Exception('Email delivery failed. Please try again later.');
    }
} catch (Exception $e) {
    // Log the error for server-side debugging
    error_log('SEO Checklist Error: ' . $e->getMessage() . ' for email: ' . (isset($email) ? $email : 'not provided'));

    // Set error message in response
    $response['success'] = false;
    $response['message'] = $e->getMessage();
}

// Return JSON response - ensure no whitespace or other output before or after
echo json_encode($response);
exit;
?>