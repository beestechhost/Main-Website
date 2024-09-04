<?php
// contact.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Récupération des données du formulaire
  $name = htmlspecialchars(trim($_POST['name']));
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $subject = htmlspecialchars(trim($_POST['subject']));
  $message = htmlspecialchars(trim($_POST['message']));

  // Validation basique
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Adresse email invalide.';
    exit;
  }

  // Configuration de PHPMailer
  $mail = new PHPMailer(true);

  try {
    // Configuration du serveur SMTP
    $mail->isSMTP();
    $mail->Host       = 'smtp.example.com'; // Remplacez par le serveur SMTP de votre fournisseur
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your_email@example.com'; // Remplacez par votre adresse e-mail
    $mail->Password   = 'your_email_password'; // Remplacez par votre mot de passe
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465; // Port sécurisé

    // Destinataire
    $mail->setFrom($email, $name);
    $mail->addAddress('recipient@example.com'); // Adresse du destinataire

    // Contenu de l'e-mail
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = nl2br($message);
    $mail->AltBody = strip_tags($message);

    // Envoi de l'e-mail
    $mail->send();
    echo 'Votre message a été envoyé avec succès.';
  } catch (Exception $e) {
    echo "Le message n'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}";
  }
} else {
  echo 'Requête invalide.';
}
