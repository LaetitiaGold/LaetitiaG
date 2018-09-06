<?php
    $dir = opendir("img/"); // ouverture du répertoire
    $files = []; 
    while ( ($entry = readdir($dir)) !== false) { // Tant qu'il y a des fichiers dans le repertoire on ajoute un element au tableau $files
        if ( $entry != "." && $entry != ".." ) { 
            array_push($files,$entry);
        } 
    }

    if(array_key_exists("data",$_POST)) { // On récupère l'image encodée en base64 provenant de la requète ajax, on supprime ce qui ne nous intéresse pas, on la décode, on la nomme, puis on créer un fichier. 
        $img = $_POST["data"];
        $img = str_replace("data:image/png;base64,","",$img);
        $img = str_replace(" ","+", $img);
        $fileData = base64_decode($img);
        $fileName = "img/image".count($files).".png";
        file_put_contents($fileName,$fileData);
    }

exit();