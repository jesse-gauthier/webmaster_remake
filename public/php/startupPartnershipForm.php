<?php
// Set headers for CORS and JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate data
if (!$data || !isset($data['formData']) || !isset($data['agreements'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid data format']);
    exit;
}

$formData = $data['formData'];
$agreements = $data['agreements'];

// Check for required fields
if (
    empty($formData['businessName']) || empty($formData['contactName']) ||
    empty($formData['email']) || empty($formData['phone'])
) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

// Validate email
if (!filter_var($formData['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit;
}

// Admin email
$adminEmail = 'Sales@ottawawebmasters.ca';

// Format data for email
function formatSection($title, $content)
{
    return "<h3 style='color: #2c5282; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;'>$title</h3>
            <div style='margin-left: 15px;'>$content</div>";
}

// Format agreement section for admin email
$agreementsList = '';
foreach ($agreements as $key => $value) {
    $formattedKey = ucfirst(preg_replace('/([A-Z])/', ' $1', $key));
    $agreementsList .= "<li>{$formattedKey}: " . ($value ? 'Agreed' : 'Not Agreed') . "</li>";
}

// Prepare admin email
$adminSubject = "New Startup Partnership Application: {$formData['businessName']}";

$adminBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; }
        .container { padding: 20px; border: 1px solid #e2e8f0; border-radius: 5px; }
        h1 { color: #1a365d; border-bottom: 2px solid #4299e1; padding-bottom: 10px; }
        h2 { color: #2c5282; margin-top: 30px; }
        h3 { color: #2c5282; margin-top: 20px; margin-bottom: 10px; }
        .section { margin-bottom: 20px; }
        .agreement-section { background-color: #ebf8ff; padding: 15px; border-radius: 5px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #e2e8f0; }
        th { background-color: #ebf8ff; }
    </style>
</head>
<body>
    <div class='container'>
        <h1>New Startup Partnership Application</h1>
        <p><strong>Submitted on:</strong> " . date('F j, Y, g:i a') . "</p>
        
        <h2>Basic Information</h2>
        <table>
            <tr><th>Business Name</th><td>{$formData['businessName']}</td></tr>
            <tr><th>Contact Name</th><td>{$formData['contactName']}</td></tr>
            <tr><th>Email</th><td>{$formData['email']}</td></tr>
            <tr><th>Phone</th><td>{$formData['phone']}</td></tr>
            <tr><th>Website</th><td>{$formData['website']}</td></tr>
        </table>
        
        <h2>Business Concept</h2>" .
    formatSection("Business Description", nl2br(htmlspecialchars($formData['businessDescription']))) .
    formatSection("Problem Solved", nl2br(htmlspecialchars($formData['problemSolved']))) .
    formatSection("Target Market", nl2br(htmlspecialchars($formData['targetMarket']))) .
    formatSection("Competitive Advantage", nl2br(htmlspecialchars($formData['competitiveDifferentiator']))) .
    formatSection("Current Stage", ucfirst($formData['currentStage'])) . "
        
        <h2>Market Information</h2>" .
    formatSection("Industry Size and Growth", nl2br(htmlspecialchars($formData['industrySize']))) .
    formatSection("Target Customer Profile", nl2br(htmlspecialchars($formData['targetCustomerProfile']))) .
    formatSection("Competitor Analysis", nl2br(htmlspecialchars($formData['competitorAnalysis']))) .
    formatSection("Market Entry Strategy", nl2br(htmlspecialchars($formData['marketEntryStrategy']))) .
    formatSection("Revenue Generation Strategy", nl2br(htmlspecialchars($formData['revenueStrategy']))) . "
        
        <h2>Financial Information</h2>
        <table>
            <tr><th>Initial Investment Required</th><td>{$formData['initialInvestment']}</td></tr>
            <tr><th>Monthly Operating Costs</th><td>{$formData['monthlyOperatingCosts']}</td></tr>
            <tr><th>Projected First Year Revenue</th><td>{$formData['projectedFirstYearRevenue']}</td></tr>
            <tr><th>Projected Month 6 Revenue</th><td>{$formData['projectedMonth6Revenue']}</td></tr>
            <tr><th>Projected Breakeven Point</th><td>{$formData['projectedBreakeven']}</td></tr>
            <tr><th>Existing Funding</th><td>" . ucfirst($formData['existingFunding']) . "</td></tr>
        </table>" .
    ($formData['existingFunding'] === 'yes' ? formatSection("Funding Details", nl2br(htmlspecialchars($formData['fundingDetails']))) : '') . "
        
        <h2>Technical Requirements</h2>
        <table>
            <tr><th>Application Complexity</th><td>" . ucfirst($formData['applicationComplexity']) . "</td></tr>
        </table>" .
    formatSection("Key Features Required", nl2br(htmlspecialchars($formData['keyFeatures']))) .
    formatSection("User Types/Roles", nl2br(htmlspecialchars($formData['userTypes']))) .
    formatSection("Integration Requirements", nl2br(htmlspecialchars($formData['integrationRequirements']))) .
    formatSection("Scalability Needs", nl2br(htmlspecialchars($formData['scalabilityNeeds']))) .
    formatSection("Timeline Expectations", nl2br(htmlspecialchars($formData['timelineExpectations']))) . "
        
        <h2>Agreements</h2>
        <div class='agreement-section'>
            <ul>
                $agreementsList
            </ul>
        </div>
    </div>
</body>
</html>
";

// Prepare customer email
$customerSubject = "Your Startup Partnership Application: Received";

$customerBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .container { padding: 20px; border: 1px solid #e2e8f0; border-radius: 5px; }
        .header { background-color: #1a365d; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { padding: 20px; }
        h1 { margin-top: 0; }
        .footer { background-color: #f7fafc; padding: 15px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 0.9em; color: #718096; }
        .highlight { background-color: #ebf8ff; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .button { display: inline-block; background-color: #4299e1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Application Received</h1>
        </div>
        
        <div class='content'>
            <p>Dear {$formData['contactName']},</p>
            
            <p>Thank you for submitting your application to the WebMaster Startup Partnership Program. We're excited to learn about your business idea: <strong>{$formData['businessName']}</strong>.</p>
            
            <div class='highlight'>
                <p><strong>What happens next?</strong></p>
                <p>Our team will carefully review your application and reach out to you shortly to discuss the next steps in the partnership process.</p>
            </div>
            
            <p>In the meantime, if you have any questions or would like to provide additional information about your application, please don't hesitate to contact us.</p>
            
            <p><strong>Application Summary:</strong></p>
            <ul>
                <li><strong>Business Name:</strong> {$formData['businessName']}</li>
                <li><strong>Business Stage:</strong> " . ucfirst($formData['currentStage']) . "</li>
                <li><strong>Application Complexity:</strong> " . ucfirst($formData['applicationComplexity']) . "</li>
                <li><strong>Submission Date:</strong> " . date('F j, Y') . "</li>
            </ul>
            
            <p>We look forward to potentially working with you to bring your vision to life!</p>
            
            <p>Best regards,<br>
            The WebMaster Team</p>
        </div>
        
        <div class='footer'>
            <p>© " . date('Y') . " WebMaster. All rights reserved.</p>
            <p>This email was sent in response to your application submission.</p>
        </div>
    </div>
</body>
</html>
";

// Set mail headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: WebMaster Partnership Program <Sales@ottawawebmasters.ca>\r\n";
$headers .= "Reply-To: Sales@ottawawebmasters.ca\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send emails
$adminMailSent = mail($adminEmail, $adminSubject, $adminBody, $headers);
$customerMailSent = mail($formData['email'], $customerSubject, $customerBody, $headers);

// Save submission data to a JSON file
try {
    // Ensure submissions directory exists
    $submissions_dir = __DIR__ . '/submissions/';
    if (!is_dir($submissions_dir)) {
        mkdir($submissions_dir, 0755, true);
    }

    // Create JSON file with submission data
    $json_filename = $submissions_dir . 'startup_partnership_' . date('Y-m-d_His') . '_' . substr(md5(rand()), 0, 6) . '.json';
    $submission_data = [
        'timestamp' => date('Y-m-d H:i:s'),
        'status' => ($adminMailSent && $customerMailSent) ? 'SUCCESS' : 'FAILED',
        'ip' => $_SERVER['REMOTE_ADDR'],
        'data' => [
            'formData' => $formData,
            'agreements' => $agreements
        ]
    ];

    file_put_contents($json_filename, json_encode($submission_data, JSON_PRETTY_PRINT));
} catch (Exception $e) {
    // Log error but continue processing
    error_log('Startup Partnership Error: Failed to save submission to file: ' . $e->getMessage());
}

// Return response
if ($adminMailSent && $customerMailSent) {
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send emails']);
}
?>