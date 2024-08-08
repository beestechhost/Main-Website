<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

class PHP_Email_Form
{
    public $to;
    public $from_name;
    public $from_email;
    public $subject;
    public $smtp = array();
    public $ajax = false;
    private $messages = array();

    public function add_message($content, $label = '', $priority = 0)
    {
        $this->messages[] = array(
            'content' => $content,
            'label' => $label,
            'priority' => $priority
        );
    }

    public function send()
    {
        $email_content = $this->format_email_content();
        $headers = $this->build_headers();

        if (!empty($this->smtp)) {
            return $this->send_smtp($email_content, $headers);
        } else {
            return mail($this->to, $this->subject, $email_content, $headers);
        }
    }

    private function format_email_content()
    {
        $content = "";
        foreach ($this->messages as $message) {
            $content .= ($message['label'] ? $message['label'] . ": " : "") . $message['content'] . "\n";
        }
        return $content;
    }

    private function build_headers()
    {
        $headers = "From: " . $this->from_name . " <" . $this->from_email . ">\r\n";
        $headers .= "Reply-To: " . $this->from_email . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        return $headers;
    }

    private function send_smtp($email_content, $headers)
    {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = $this->smtp['host'];
            $mail->SMTPAuth = true;
            $mail->Username = $this->smtp['username'];
            $mail->Password = $this->smtp['password'];
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = $this->smtp['port'];

            $mail->setFrom($this->from_email, $this->from_name);
            $mail->addAddress($this->to);
            $mail->addReplyTo($this->from_email);

            $mail->Subject = $this->subject;
            $mail->Body = $email_content;

            $mail->send();
            return 'OK';
        } catch (Exception $e) {
            return 'Mailer Error: ' . $mail->ErrorInfo;
        }
    }
}
