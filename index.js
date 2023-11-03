// DRUM GAME
var gameStarted = false;

$(".drum-start-button").click(function() {
    gameStarted = !gameStarted;
    $(this).text(gameStarted ? "Stop" : "Play");
});

$(".drum").click(function() {
    if (gameStarted) {
        var buttonPressed = $(this).text();
        makeSound(buttonPressed);
        drumAnimatePress(buttonPressed);
    }
});

$(document).keydown(function(event) {
    if (gameStarted) {
        var buttonPressed = event.key.toLowerCase(); // Convert to lowercase to handle both cases
        makeSound(buttonPressed);
        drumAnimatePress(buttonPressed);
    }
});

function makeSound(buttonPressed) {
    switch(buttonPressed){
        case "w":
            playSound("drum-sounds", "tom-1.mp3");
            break;
        case "a":
            playSound("drum-sounds", "tom-2.mp3");
            break;
        case "s":
            playSound("drum-sounds", "tom-3.mp3");
            break;
        case "d":
            playSound("drum-sounds", "tom-4.mp3");
            break;
        case "j":
            playSound("drum-sounds", "snare.mp3");
            break;
        case "k":
            playSound("drum-sounds", "crash.mp3")
            break;           
        case "l":
            playSound("drum-sounds", "kick-bass.mp3")
            break;
        default:
            console.log(this.innerHTML);
    }
}

function drumAnimatePress(buttonPressed){
    if (gameStarted) {
        var currentClassList = $("." + buttonPressed).addClass("pressed");
        setTimeout(function() {
            currentClassList.removeClass("pressed");
        }, 100);
    }
}



// SIMON GAME
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var simonStarted = false;

$(".simon-start-button").click(function() {
    if(!simonStarted){
        $("#simon-level-title").text("Level " + level);
        nextSequence();
        simonStarted = true;
    }
});

$(".simon-btn").on("click", function(event){
    if(simonStarted){
        var userChosenColour = $(this).attr("id").split("-")[1];
        userClickedPattern.push(userChosenColour);
        playSound("simon-sounds", userChosenColour + ".mp3");
        simonAnimatePress(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#simon-level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $(".simon-" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound("simon-sounds", randomChosenColour + ".mp3");
}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
    }
    else{
        playSound("simon-sounds", "wrong.mp3");
        var currentBGColour = $('.simon-container').css("background-color");
        $('.simon-container').css("background-color", "red");
        setTimeout(function(){
            $('.simon-container').css("background-color", currentBGColour);
        }, 200);
        $("#simon-level-title").text("Game Over! Press 'Play' to Restart!");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    simonStarted = false;
}

function playSound(directory, name){
    var currentAudio = new Audio("./sounds/" + directory + "/" + name);
    currentAudio.play();
}

function simonAnimatePress(currentColour){
    $("#simon-" + currentColour).addClass("simon-pressed");
    setTimeout(function(){
        $("#simon-" + currentColour).removeClass("simon-pressed");
    }, 100);
}
