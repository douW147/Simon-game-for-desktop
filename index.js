// var randomNum = Math.random();
// randomNum = Math.floor(randomNum*4);
// console.log(randomNum);

// var isGame = true;
// var array = [];
// array.push(randomNum);

// function addButtonAnnimation(tag, clas){
//     $(tag).addClass(clas).removeClass(clas);
// }

// $(document).keydown(function(event){
    
//     if (array[0] === 0) {
//         addButtonAnnimation("btn green", "pressed");
//     } else if (array[0] === 1) {
//         addButtonAnnimation("btn red", "pressed");
//     } else if(array[0] === 2) {
//         addButtonAnnimation("btn blue", "pressed");
//     } else {
//         addButtonAnnimation("btn yellow", "pressed");
//     }
//     // while (isGame) {
        
//     //     // for (var i = 0; i < array.length; i++){
//     //     //     if
//     //     // }
        
//     // }
// });



// var buttonColours = ["green", "yellow", "blue", "red"];

// var gameOrder = [];

// var userColorsOrder = []

// var started = false;

// var level = 0;


// $(document).keydown(function(){
//     if (!started) {
//         $("h1").text("Level " + level)
//         nextSequence();
//         started = true;
//     }
// });



// $(".btn").click(function(){
//     var usersColor = $(this).attr("id");
    
//     userColorsOrder.push(usersColor);

//     playSound(usersColor);
//     animateButton(usersColor);
//     checkAnswer(userColorsOrder.length - 1);
// });


// function checkAnswer(currentLevel) {

//     if (gameOrder[currentLevel] === userColorsOrder[currentLevel]) {
//       console.log("success");

//       if (gameOrder.length === userColorsOrder.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);

//       }

//     } else {

//       console.log("wrong");

//     }

// }

// function playSound(color) {
//     var audio = new Audio("sounds/" +color+ ".mp3");
//     audio.play();
// }

// function nextSequence() {
//     userColorsOrder = [];

//     level++;
//     $("h1").text("Level "+ level);
//     var randomNUm = Math.floor(Math.random() * 4);
//     var RandomChosenColor = buttonColours[randomNUm];
//     gameOrder.push(RandomChosenColor);
//     animateButton(RandomChosenColor);
//     playSound(RandomChosenColor);
// }



// function animateButton(color) {
//     $("#"+color).fadeOut(100).fadeIn(100);
// }

// function checkAnswer(curentLevel) {
    
// }





var level = 0;

var isGame = false;

var gameColors = ["green", "yellow", "blue", "red"];

var gamePickedOrder = [];

var usersColor = "g"

var usersPickedOrder = [];

    
$(document).keydown(function() {
    
    if (isGame == false) {
        isGame = true;
        setTimeout(function () {
            nextLevel();
          }, 150);
    }
});


    
$(".btn").click(function() {
    if (isGame == true) {
        usersColor = $(this).attr("id");
        usersPickedOrder.push(usersColor);
        animateButton(usersColor);
        playSound(usersColor);
        checkClick(usersPickedOrder.length - 1);
}
});


function animateButton(color) {
    $("#"+color).fadeOut(100).fadeIn(100);
}

function randColor(array) {
    var randomNUm = Math.floor(Math.random() * 4);
    console.log(array[randomNUm]);
    return array[randomNUm];

}

function nextLevel () {
    usersPickedOrder = [];
    level++;
    $("h1").text("level " + level);
    var randomColour = randColor(gameColors);
    gamePickedOrder.push(randomColour);
    animateButton(randomColour);
    playSound(randomColour);
    
}

function playSound(color) {
    var audio = new Audio("sounds/" +color+ ".mp3");
    audio.play();
}

function checkClick (currentLevel) {

    console.log(gamePickedOrder);
    console.log(usersPickedOrder);
    if (gamePickedOrder[currentLevel] === usersPickedOrder[currentLevel]) {

        console.log("success");
  
        
        if (usersPickedOrder.length === gamePickedOrder.length){
  
          
          setTimeout(function () {
            nextLevel();
          }, 1000);
  
        }
  
    } else {
  
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () { 
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        gameOver();
    }   
        
}

function gameOver() {
    isGame = false;
    level = 0;
    gamePickedOrder = [];
}



