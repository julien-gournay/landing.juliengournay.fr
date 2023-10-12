<?php

$headers = 'MIME-Version: 1.0'."\r\n";
// Récupération des données du formulaire
$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$email = $_POST["email"];
$sujet = $_POST["sujet"];
$message = $_POST["message"];
$file = $_POST["file"];

// Ouverture du fichier
$f = fopen($file, "rb");

// Lecture du contenu du fichier
$data = fread($f, filesize($file));

// Envoi du mail
$sujet = sprintf("FORMULAIRE DU SITE : %s", $sujet); // Place dans l'objet du mail "FOMRULAIRE DU SITE"
mail("contact@juliengournay.fr", $sujet, $message, "From: $prenom $nom <$email>", $headers, $data, "Content-Description: $sujet");

// Affichage d'un message de confirmation
echo "Votre message a bien été envoyé.";
?>