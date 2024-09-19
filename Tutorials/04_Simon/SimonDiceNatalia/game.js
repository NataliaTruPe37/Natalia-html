var Gamebuttons= ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClicked = []; 
var level = 0;
var started = false;

function playSound(color) {
    var audio = new Audio("Sounds/" + color + ".mp3");
    audio.play();
}

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    userClicked = [];
    level++;
    $("#level-title").text("Level " + level);
    var rn = Math.floor(Math.random() * 4);
    var randomChosenColor = Gamebuttons[rn];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100); 
}

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClicked.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClicked.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClicked[currentLevel]) {
        if (userClicked.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
