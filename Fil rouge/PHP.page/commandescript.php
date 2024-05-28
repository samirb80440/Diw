<?php 
session_start();

echo 'la livraison de votre commande est estimer a  '.date('H:i:s', strtotime('+30 minutes', strtotime(date('H:i:s'))))." elle sera livrer au nom de ".$_REQUEST["Nom"]." a l'adresse ".$_REQUEST["Adresse"];

?>