"use strict";

class WorkSpace { 
    constructor() {
        this.canvas; // Canvas principal
        this.context; // Contexte
        this.picker; // Pour le color picker
        this.model; // Pour mettre une image en modèle
        
        this.brush = new Brush("black",1,0,0,"butt"); // Le pinceau. Paramètres initiaux : couleur, epaisseur, position x, position y, et type du pinceau.
    }

    Initialize () {
        this.model = document.getElementById("model"); // Image du modèle.

        this.canvas = document.getElementById("canvas");
        this.canvas.width = document.getElementById("exo").clientWidth-22; // Redimensionnement du canvas selon la taille de la fenêtre.

        this.context = this.canvas.getContext("2d");
        
        this.picker = new CP(document.querySelector('#color-picker'),false,document.querySelector('#color-picker')); // Color picker que j'ai download. https://tovic.github.io/color-picker/
        this.picker.picker.classList.add('static'); // Pour son positionnement
        this.picker.fit = function() {  // idem
            this.picker.style.left = this.picker.style.top = "";
        };

        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);    

        if ( sourceModel == undefined ) { // Si il n'y a pas de modèle, on remplit le canvas avec du blanc sans transparence.
            this.context.fillStyle = "rgba(255,255,255,1)";
            this.model.src = "";
        } else { // sinon on ajoute 15% de transparence et on charge l'image qui servira de modèle et on la positionne une fois chargée.
            this.context.fillStyle = "rgba(255,255,255,.85)";
            this.model.src = sourceModel; 
            this.model.onload = function() {
                workspace.model.style.left = workspace.canvas.width/2 - workspace.model.offsetWidth/2+"px";
                console.log(workspace.model.offsetWidth);
            }
        }
        
        this.context.fillRect(0,0,this.canvas.width,this.canvas.height);

        for (let i = 0; i < document.querySelectorAll(".colorPallette").length; i++){ // Pour chaque élément de la pallette de couleur ( celle par défault pas le picker ) on récupère son background color et on change la couleur lors d'un clic. 
            document.querySelectorAll(".colorPallette")[i].addEventListener("click",function(){
                workspace.brush.color = window.getComputedStyle(this).getPropertyValue("background-color");
            });
        }

        // Listeners 
        this.canvas.addEventListener("mousedown",this.brush.Draw);
        this.canvas.addEventListener("mouseup",this.brush.Draw);
        this.canvas.addEventListener("mouseleave",this.brush.Draw);
    }   
    
    ShowPicker() {
        this.picker.on("change", function(color) { // Fonction du picker
            workspace.brush.color = '#' + color;
        });
        this.picker[this.picker.visible ? 'exit' : 'enter'](); // Si le picker est visible on le cache sinon on l'affiche.
    } 

    SaveToServer() { 
        var data = this.canvas.toDataURL();
        var xhr = new XMLHttpRequest();

        xhr.open("POST","save.php");

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("data="+data);
        xhr.onload = function(){
            //this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
            console.log(data);
        }
    }


}

class Brush {
    constructor (color, size, posX, posY, brushtype) {
        this.color = color;
        this.size = size;
        this.position = {
            x : posX,
            y : posY
        }
        this.brushtype = brushtype;
        this.leak = false;
    }

    ChangeScale(size){
        this.size = size;
    }

    ChangeBrushType(bType){
        this.brushtype = bType;
    }

    Draw(e){ // Cette fonction est appelée par tous les listeners de la souris et en fonction du type d'event ( e.type ) différentes actions vont s'executer.
        var x = (e.pageX - this.offsetLeft); // On récupère la position de la souris
        var y = (e.pageY - this.offsetTop);
        workspace.brush.position.x = x;
        workspace.brush.position.y = y;
        if ( e.type == "mousedown" ) { // Au mousedown, on initialise une ligne à la position de la souris et on ajoute un listener mousemove. 
            workspace.context.strokeStyle = workspace.brush.color;
            workspace.context.lineWidth = workspace.brush.size;
            workspace.context.lineCap = workspace.brush.brushtype;
            workspace.context.lineJoin = "round";
            e.target.addEventListener("mousemove", workspace.brush.Draw);
            workspace.context.beginPath();
            workspace.context.moveTo(x,y);
        } else if ( e.type == "mousemove" ) {  // On continue le tracé au point suivant.
            workspace.context.lineTo(x,y);
            workspace.context.stroke();
            if ( workspace.brush.leak ) { // Si on a  activé l'option paint on fait un random 100 qu'on passe en paramètre de la fonction Leak
                workspace.brush.Leak(Math.random()*100 |0);
            }
        } else {
            e.target.removeEventListener("mousemove", workspace.brush.Draw); // On retire le mousemove si on sort du canvas ou au mouseup.
            return;
        }
    }

    Leak(r){
        if ( r >= 90 ) { // Si le rand est supérieur à 90 on initialise un nouveau brush avec les mêmes propriétés que celui qui est en train d'être dessiné. 
            var leakage = new Brush(this.color, this.size, this.position.x, this.position.y, this.brushtype);
            var leakagePath = new Path2D(); // On ne peux pas utiliser la même ligne qui est en train d'être dessinée, du coup on fait un Path2D qui reprend les mêmes paramètres.
            leakagePath.strokeStyle = leakage.color;
            leakagePath.lineWidth = leakage.size;
            leakagePath.lineCap = leakage.brushtype;
            leakagePath.lineJoin = "round";
            leakagePath.moveTo(leakage.position.x,leakage.position.y); // On initialise ce nouveau path avec les infos récupérées plus haut

            var leakInterval = setInterval(function(){ // A un interval de 100 à 250 millisecondes , on modifie la position en Y de notre nouveau path ( entre 1 et 4px par itération )
                leakage.position.y += 1+Math.random()*3 |0
                leakagePath.lineTo(leakage.position.x,leakage.position.y);
                workspace.context.stroke(leakagePath);
            }, 100+Math.random()*150 |0) 
            setTimeout(function () {
                clearInterval(leakInterval);
            }, 1000+Math.random()*2000 |0); // Au bout de 1 à 3 secondes on stoppe l'interval pour arreter l'animation
        }
    }
}

var workspace = null;
var sourceModel;
document.addEventListener("DOMContentLoaded",function(){
    workspace = new WorkSpace();
    workspace.Initialize();
});