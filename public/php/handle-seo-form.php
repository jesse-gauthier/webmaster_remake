<?php
// Set headers to handle CORS and define response type
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Only POST requests are allowed']);
    exit;
}

// Get the raw POST data
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

// If form was submitted traditionally, use $_POST instead
if (empty($data)) {
    $data = $_POST;
}

// Validate input data
if (empty($data['name']) || empty($data['email']) || empty($data['website'])) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit;
}

// Validate URL
if (!filter_var($data['website'], FILTER_VALIDATE_URL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid website URL']);
    exit;
}

// Sanitize the data
$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$website = filter_var($data['website'], FILTER_SANITIZE_URL);

// Current date
$date = date("F j, Y");

// Email recipient
$to = 'jesse@ottawawebmasters.ca';

// Email subject
$subject = 'New SEO Audit Request';

// Email message with improved styling
$message = "
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>New SEO Audit Request</title>
</head>
<body style=\"margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;\">
    <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px; margin: 0 auto; background-color: #ffffff;\">
        <!-- Header -->
        <tr>
            <td style=\"background-color: #2e5cb8; padding: 20px; text-align: center; color: white;\">
                <h1 style=\"margin: 0; font-size: 24px;\">Ottawa Webmasters</h1>
                <p style=\"margin: 5px 0 0; font-size: 16px;\">SEO Audit Request</p>
            </td>
        </tr>
        
        <!-- Content -->
        <tr>
            <td style=\"padding: 30px 20px;\">
                <h2 style=\"color: #2e5cb8; margin-top: 0; font-size: 20px;\">New SEO Audit Request Received</h2>
                <p style=\"color: #666666; margin-bottom: 25px; font-size: 15px; line-height: 1.5;\">
                    A new request for an SEO audit has been submitted through your website on {$date}. 
                    Please find the details below:
                </p>
                
                <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse: collapse; margin-bottom: 20px;\">
                    <tr>
                        <td style=\"padding: 10px; border-bottom: 1px solid #eeeeee; width: 30%; font-weight: bold; color: #333333;\">Name:</td>
                        <td style=\"padding: 10px; border-bottom: 1px solid #eeeeee; color: #333333;\">{$name}</td>
                    </tr>
                    <tr>
                        <td style=\"padding: 10px; border-bottom: 1px solid #eeeeee; width: 30%; font-weight: bold; color: #333333;\">Email:</td>
                        <td style=\"padding: 10px; border-bottom: 1px solid #eeeeee; color: #333333;\">
                            <a href=\"mailto:{$email}\" style=\"color: #2e5cb8; text-decoration: none;\">{$email}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style=\"padding: 10px; border-bottom: 1px solid #eeeeee; width: 30%; font-weight: bold; color: #333333;\">Website:</td>
                        <td style=\"padding: 10px; border-bottom: 1px solid #eeeeee; color: #333333;\">
                            <a href=\"{$website}\" style=\"color: #2e5cb8; text-decoration: none;\" target=\"_blank\">{$website}</a>
                        </td>
                    </tr>
                </table>
                
                <div style=\"background-color: #f8f8f8; border-left: 4px solid #2e5cb8; padding: 15px; margin: 20px 0; color: #666666;\">
                    <p style=\"margin: 0; font-size: 14px;\">
                        <strong style=\"color: #333333;\">Next Steps:</strong> Please contact the client within 24 hours to discuss their SEO audit requirements.
                    </p>
                </div>
                
                <div style=\"margin-top: 30px; text-align: center;\">
                    <a href=\"https://ottawawebmasters.ca/client-dashboard\" style=\"background-color: #2e5cb8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;\">
                        View in Dashboard
                    </a>
                </div>
            </td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td style=\"background-color: #eeeeee; padding: 20px; text-align: center; color: #666666; font-size: 12px;\">
                <p style=\"margin: 0 0 10px;\">
                    © " . date('Y') . " Ottawa Webmasters. All rights reserved.
                </p>
                <p style=\"margin: 0;\">
                    This is an automated notification. Please do not reply to this email.
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: Ottawa Webmasters <no-reply@ottawawebmasters.ca>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mailSuccess = mail($to, $subject, $message, implode("\r\n", $headers));

if ($mailSuccess) {
    echo json_encode(['success' => true, 'message' => 'Form submitted successfully. We will contact you shortly.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.']);
}
?>