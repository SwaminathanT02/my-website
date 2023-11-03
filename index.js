// SET COLOR FOR 'software' ON MOUSE HOVER
var currentColor = document.getElementsByTagName('code')[0].style.color;

document.querySelector('code').addEventListener("mouseover", function () {
    document.getElementsByTagName('code')[0].style.color = "blue";
});
document.querySelector('code').addEventListener("mouseout", function () {
    document.getElementsByTagName('code')[0].style.color = currentColor;
});


// DRUM GAME


var drumClassLength = document.querySelectorAll(".drum").length;
for(var i = 0; i < drumClassLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonPressed = this.innerHTML;
        makeSound(buttonPressed);
        animatePress(buttonPressed);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animatePress(event.key);
});

function makeSound(buttonPressed) {
    switch(buttonPressed){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(this.innerHTML);
    }
}

function animatePress(buttonPressed){
    var currentClassList = document.querySelector("." + buttonPressed).classList;
    currentClassList.add("pressed");
    setTimeout(function() {
        currentClassList.remove("pressed");
    }, 100);
}
