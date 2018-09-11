QUESTIONS DU QCM

1. Le nom de l'event js qui permet de détecter la fin du chargement du DOM : DOMContentLoaded -- ex : document.addEventListener("DOMContentLoaded", function(){}); 

2. Détecter un event AJAX avec JS natif : XMLHttpRequest -- ex : var xhr = new XMLHttpRequest();

3. Faille XSS : Déclenche du code côté client en JS qui provient pas du serveur donc d'un utilisateur. 
    - htmlspecialchars --> converti les symboles en code ascii avec 

4. Faille injection SQL : Attaque côté serveur en essayant de mettre un ";" dans un formulaire pour écrire ses propres requètes. 
    - PDO --> Préparer ses requètes et utiliser PDO protège de cette faille.

5. Différentes fonction en PHP permettant de checker une variable : 
    - isset() : Teste si une variable exite.
    - empty() : Teste si une variable vide ou non.
    - array_key_exists() : Teste si une key existe dans un tableau.

6. On peut mettre plusieurs h1 dans un site si le 2ème est dans la nav.

7. Si le QCM demande de tester un code JS ouvrir la console ( DANS UNE NOUVELLE PAGE ) et OK !

8. En Jquery comment lancer une requête ajax :
    - $.getJSON : Récupère un fichier JSON.
    - $.get : Récupère des infos et en envoie avec la méthode GET.
    - $.post : Récupère des infos et en envoie avec la méthode POST.
    - $.ajax : Récupère des infos et en envoie avec la possibilité de passer pas mal d'options. 

9. Reset.css / Normalize.css : Permettent de standardiser les css pour tous les navigateurs pour partir de la même base. 

10. PHP - Héritage : 
    - L'héritage multiple pour qu'un enfant puisse hériter de plusieurs parents au lieu d'un seul (fait de pouvoir mettre extends, parent 1, parents 2, etc).
    - Est-ce que le php 5.3 peut-il supporter l'héritage multiple ? NON ça n'existe pas en PHP.

11. Différence entre canvas et svg ? 
    - Canvas utilise les px.
    - SVG utilise des vecteurs (points et calculs mathématiques).

12. Toutes les fonctions d'aggrégation de SQL
    - AVG – Calcule la moyenne d'un jeu de valeurs.
    - COUNT – Compte les rangées dan sune table ou une vue spécifiée.
    - MIN – Renvoie la valeur minimum dans un jeu de valeurs.
    - MAX – Renvoie la valeur maximum dans un jeu de valeurs.
    - SUM – Calcule une somme de valeurs. 
        --> Attention à la syntaxe !!!! 

13. Structure de contrôle : Boucles & Conditions

14. Quel est le nom de l'orienté objet qui permet de cacher les éléments de l'exterieur : private.
    Principe du POO : 
    - Héritage : Le fait qu'une class transmette des propriétés ou méthodes ( public,protected ) à ses enfants.
    - Abstraction : Permet de définir une class dont les enfants doivent avoir certains prérequis ( ne peut pas être instanciée ).
    - Surcharge : Le fait de modifier une propriété ou méthode héritée dans un enfant. 
    - Encapsulation : Permet de protéger les données du code à l'extérieur du scope de la classe.

15. Sérialisation : Convertir un tableau ou objet en string (en PHP et JS)
    Rôle : avoir des données d'un certain format pour stockage et pour que 2 langages ( ou + ) puissent parler ensemble.
        --> Exemple de formats : Json, XML 

16. Différence entre var, let et const dans le scope
        - const : Ne peux être modifiée après création et peut être accessible de n'importe où.
        - var : Si déclarée en global, peut être récupérée et utilisée dans les fonction et autre ( utiliser "global" en php pour la redéclarer ). Si déclarée en local, elle n'est accessible que dans le scope local. 
        - let : Utilisable seulement dans le scope dans lequel elle à été créée. 

17. Moyen de prendre une table et de pas avoir besoin de dupliquer dans les mêmes tables :
    --> les jointures (associer une clé primaire à une secondaire) 
    --> récupérer avec INNER JOIN table de base / la table commune

18. Différence entre PHP et PHTML :
    - PHP : un controller ou front controller dans lequel on ne met QUE du PHP. On ne ferme pas la balise "<?php"
    - PHTML :  un template contenant du PHP ( en syntaxe raccourcie ) et du html.

19. Syntaxe raccourcie : 
    - On remplace les accolades ouvrantes par ":". 
    - La balise fermante est remplacée par "endif;", "endfor;", "endforeach;" ou autre.
        Exemple avec if :
            <?php if : ?>
                // trucs
            <?php else : ?>
                // autres trucs
            <?php endif; ?>

20. Objet pour ouvrir une connexion à une base de donnée de manière sécurisée : PDO

21. Méthodes permettant de passer d'une string à un number en javascript : parseInt(); et parseFloat();

22. Types natif et primaire en JS : String, Number, Boolean

23. Null : vide / undefined : n'existe pas

24. Comment savoir si une clé existe dans le local storage : getItem()

25. Lire des opérations booléenne.
     - Exemple : 
        true && (false || true) && true && false // renvoie false

26. Tous les types de boucle en JS 
     - for
     - for in/for off
     - while
     - do while

27. Tous les types de boucle PHP 
     - for 
     - foreach (contient for in, et for off)
     - while
     - do while)

28. Concatenation PHP : .(point)

29. Predicate : permet de mettre son propre algorythme de triage 
        --> fonction "sort" permet de trier des tableaux dans un sens (ASC, DESC)

30. Différent moyens de faire un chrono :
     - var variable = setInterval(fonction,time); // Exécute "fonction" tous les "time" millisecondes.
     - var variable = setTimeout(fonction,time); // Exécute "fonction" au bout de "time" millisecondes.
     - clearTimeout(variable); // Stoppe le timeout "variable"
     - clearInterval(variable); // Stoppe l'interval "variable"


31. Paramètres de fopen() : URL et mode ouverture 
     Exemple pour ouvrir ou créer un fichier : fopen("fichier.txt",w);

32. Les 9 paramètres de drawImage() :
        drawImage ( 
            image, 
            source_x, source_y, 
            source_width, source_height,
            destination_x, destination_y,
            destination_width, destination_height
        );

33. À quoi correspond MVC : Model View Controller 
        --> Model : Gère les données, la logique et les règles de l'application.
        --> Vue : Résultat que l'on voit sur le navigateur faire.
        --> Contrôleur : Accepte les inputs utilisateurs ( formulaires et autres ) et les convertie pour le model ou le view.

34. Nom de la fonction PHP pour changer le nom de la page url coté navigateur : header("Location:../admin.php");

35. Différence entre include et require en PHP : 
     - include 'fichier.php' : insère "fichier.php" pour affichage ou utilisation. Si la page n'est pas trouvée ou inaccessible, elle est ignorée.
     - require 'fichier.php' : insère "fichier.php" pour affichage ou utilisation. Si la page n'est pas trouvée ou inaccessible, le code est stoppé et une erreur est renvoyée. 

36. Qu'est-ce qu'un Scope ? 
      - Un scope défini d'où sont accessibles certaines informations.
            --> Le scope global ( extérieur dans les fichiers : les variables déclarées en dehors de toutes fonctions ).
            --> Le scope local ( Propre à chaque structure de contrôle ( avec les if ou dans une fonction )).

      - En JS une variable globale est accessible dans tous les scopes.
      - En PHP une variable globale doit être redéclarée dans le scope local via le mot clé 'global'.
      - En PHP il y a aussi en plus le scope super global :
            --> $_GET / $_POST / $_SESSION / $_SERVER / $_FILE / $_COOKIE / $_REQUEST / $_ENV / $GLOBALS

37. Fonction anonyme - Ne pourra pas être appelée en dehors de sa déclaration. Seulement au moment où en a besoin.
    --> on peut envoyer en paramètre des fonctions. utilité : ne pas réserver un nom pour rien 
    --> dans un objet ça s'appelle une méthode

38. Probablilité d'avoir une question sur les selecteurs avancés.