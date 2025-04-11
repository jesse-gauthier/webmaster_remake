<?php
/**
 * Application Development Form Handler
 * 
 * This script processes form submissions from the Vue application development 
 * landing page, saves entries to a file, and sends email notifications.
 */

// Prevent direct access to this file
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 403 Forbidden');
    echo json_encode(['success' => false, 'message' => 'Direct access to this script is not allowed.']);
    exit;
}

// Configuration
$config = [
    'data_dir' => __DIR__ . '/data', // Directory where submissions will be stored
    'data_file' => 'applications.json', // File to store submissions
    'email' => [
        'to' => 'jesse@ottawawebmasters.ca',
        'from' => 'noreply@' . $_SERVER['HTTP_HOST'],
        'subject' => 'New Application Development Inquiry',
    ],
    'required_fields' => ['name', 'email'],
    'allowed_fields' => ['name', 'email', 'company', 'interest', 'message'],
];

// Create data directory if it doesn't exist
if (!file_exists($config['data_dir'])) {
    mkdir($config['data_dir'], 0755, true);
}

// Initialize response
$response = [
    'success' => false,
    'message' => '',
    'errors' => []
];

// Process form data
try {
    // Check for CSRF token (assuming it's sent from frontend)
    if (!isset($_POST['csrf_token']) || !validateCsrfToken($_POST['csrf_token'])) {
        throw new Exception('Security validation failed.');
    }

    // Basic input sanitization
    $formData = [];
    foreach ($config['allowed_fields'] as $field) {
        if (isset($_POST[$field])) {
            $formData[$field] = trim(htmlspecialchars($_POST[$field], ENT_QUOTES, 'UTF-8'));
        } else {
            $formData[$field] = '';
        }
    }
    
    // Validate required fields
    foreach ($config['required_fields'] as $field) {
        if (empty($formData[$field])) {
            $response['errors'][$field] = ucfirst($field) . ' is required.';
        }
    }
    
    // Validate email format
    if (!empty($formData['email']) && !filter_var($formData['email'], FILTER_VALIDATE_EMAIL)) {
        $response['errors']['email'] = 'Please enter a valid email address.';
    }
    
    // If there are validation errors, return them
    if (!empty($response['errors'])) {
        $response['message'] = 'Please correct the errors in the form.';
        echo json_encode($response);
        exit;
    }
    
    // Add timestamp to form data
    $formData['timestamp'] = date('Y-m-d H:i:s');
    $formData['ip'] = $_SERVER['REMOTE_ADDR'];
    
    // Save form data to file
    saveFormData($formData, $config['data_dir'] . '/' . $config['data_file']);
    
    // Send email notification
    sendEmailNotification($formData, $config['email']);
    
    // Set success response
    $response['success'] = true;
    $response['message'] = 'Thank you for your inquiry. We will contact you shortly.';
    
} catch (Exception $e) {
    $response['message'] = 'An error occurred while processing your request: ' . $e->getMessage();
    
    // Log error for admin (don't expose to client)
    error_log('Form submission error: ' . $e->getMessage());
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
exit;

/**
 * Validates the CSRF token
 * 
 * @param string $token The token to validate
 * @return bool True if token is valid
 */
function validateCsrfToken($token) {
    // In a real implementation, you would validate against a token stored in the session
    // This is a simplified example
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

/**
 * Saves form data to a JSON file
 * 
 * @param array $formData The form data to save
 * @param string $filePath Path to the data file
 * @return bool True if save successful
 */
function saveFormData($formData, $filePath) {
    // Load existing data
    $applications = [];
    if (file_exists($filePath)) {
        $fileContent = file_get_contents($filePath);
        if (!empty($fileContent)) {
            $applications = json_decode($fileContent, true) ?: [];
        }
    }
    
    // Add new submission with a unique ID
    $formData['id'] = uniqid('app_');
    $applications[] = $formData;
    
    // Save updated data back to file
    $result = file_put_contents(
        $filePath, 
        json_encode($applications, JSON_PRETTY_PRINT),
        LOCK_EX
    );
    
    if ($result === false) {
        throw new Exception('Failed to save form data.');
    }
    
    return true;
}

/**
 * Sends an email notification about the new form submission
 * 
 * @param array $formData The form data
 * @param array $emailConfig Email configuration
 * @return bool True if email sent successfully
 */
function sendEmailNotification($formData, $emailConfig) {
    // Prepare email headers
    $headers = [
        'From: ' . $emailConfig['from'],
        'Reply-To: ' . $formData['email'],
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/html; charset=UTF-8'
    ];
    
    // Prepare email body with better formatting
    $body = '
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background-color: #2c3e50; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .footer { font-size: 12px; color: #777; border-top: 1px solid #ddd; padding-top: 10px; margin-top: 20px; }
            h2 { color: #2c3e50; }
            .data-row { margin-bottom: 10px; }
            .label { font-weight: bold; color: #2c3e50; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #2c3e50; margin: 15px 0; }
        </style>
    </head>
    <body>
        <div class="header">
            <h2>New Application Development Inquiry</h2>
        </div>
        <div class="content">
            <div class="data-row">
                <span class="label">Date:</span> ' . $formData['timestamp'] . '
            </div>
            <div class="data-row">
                <span class="label">Name:</span> ' . $formData['name'] . '
            </div>
            <div class="data-row">
                <span class="label">Email:</span> ' . $formData['email'] . '
            </div>';
    
    if (!empty($formData['company'])) {
        $body .= '
            <div class="data-row">
                <span class="label">Company:</span> ' . $formData['company'] . '
            </div>';
    }
    
    $body .= '
            <div class="data-row">
                <span class="label">Interested In:</span> ' . formatInterestType($formData['interest']) . '
            </div>';
    
    if (!empty($formData['message'])) {
        $body .= '
            <h3>Project Details:</h3>
            <div class="message-box">
                ' . nl2br($formData['message']) . '
            </div>';
    }
    
    $body .= '
            <div class="footer">
                <p>This inquiry was submitted from IP: ' . $formData['ip'] . '</p>
                <p>© ' . date('Y') . ' Ottawa Webmasters - Application Development Form</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Send email
    $mailSent = mail(
        $emailConfig['to'],
        $emailConfig['subject'],
        $body,
        implode("\r\n", $headers)
    );
    
    if (!$mailSent) {
        // Log error but don't throw exception to allow saving to file still
        error_log('Failed to send email notification for form submission.');
    }
    
    return $mailSent;
}

/**
 * Formats the interest type for better readability
 * 
 * @param string $interest Interest type from form
 * @return string Formatted interest type
 */
function formatInterestType($interest) {
    $types = [
        'equity' => 'Equity Partnership Model',
        'traditional' => 'Traditional Payment Model',
        'undecided' => 'Not Sure Yet'
    ];
    
    return isset($types[$interest]) ? $types[$interest] : $interest;
}

/**
 * Creates a backup of the applications data file
 * This function runs weekly via a cron job
 */
function backupApplicationData() {
    global $config;
    
    $sourceFile = $config['data_dir'] . '/' . $config['data_file'];
    if (file_exists($sourceFile)) {
        $backupDir = $config['data_dir'] . '/backups';
        
        // Create backup directory if it doesn't exist
        if (!file_exists($backupDir)) {
            mkdir($backupDir, 0755, true);
        }
        
        // Create backup with timestamp
        $backupFile = $backupDir . '/applications_' . date('Y-m-d_His') . '.json';
        copy($sourceFile, $backupFile);
        
        // Remove backups older than 30 days
        $oldBackups = glob($backupDir . '/applications_*.json');
        $now = time();
        
        foreach ($oldBackups as $backup) {
            if ($now - filemtime($backup) > 30 * 24 * 60 * 60) {
                unlink($backup);
            }
        }
    }
}

// If script is called with backup parameter from anywhere
if (isset($_GET['action']) && $_GET['action'] === 'backup') {
    backupApplicationData();
    echo "Backup completed.\n";
    exit;
}
?>