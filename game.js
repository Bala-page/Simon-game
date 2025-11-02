// Global variables
var gamecolour = ["green", "red", "yellow", "blue"];
var gpattern = [];
var userpatt = [];
var level = 0;
// Use a boolean (true/false) not a string
var start = true;

// 1. Start the game
$(document).keypress(function (event) {
  // Check if the game hasn't started yet
  if (start === true) {
    // Start the game
    start = false;
    nextseq();
  }
});

// 2. User Clicks
$(".btn").click(function () {
  // Only run if the game has started
  if (start === false) {
    var userchosencolour = $(this).attr("id");
    userpatt.push(userchosencolour);

    sound(userchosencolour);
    animate(userchosencolour);

    // Check the answer
    check(userpatt.length - 1);
  }
});

// 3. Check the user's answer
function check(index) {
  // Check if the last click was correct
  if (gpattern[index] === userpatt[index]) {
    // Check if the user has finished the sequence
    if (userpatt.length === gpattern.length) {
      console.log("success");
      setTimeout(function () {
        nextseq();
      }, 1000);
    }
  } else {
    // --- This is the Game Over logic ---
    console.log("wrong");
    sound("wrong"); // Play wrong sound

    // Flash the screen
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press any Key to Restart");

    // Reset ALL game variables
    level = 0;
    gpattern = [];
    userpatt = [];
    start = true; // This allows the keypress to work again
  }
}

// 4. Next Sequence
function nextseq() {
  // Reset user pattern for the new level
  userpatt = [];
  level++;
  $("#level-title").text("Level " + level);

  var rand = Math.floor(Math.random() * 4);
  var randcolour = gamecolour[rand];
  gpattern.push(randcolour);

  // Animate and play sound for the new button
  $("#" + randcolour).fadeIn(100).fadeOut(100).fadeIn(100);
  sound(randcolour);
}

// 5. Animate button clicks
function animate(userchosencolour) {
  $("#" + userchosencolour).addClass("pressed");
  setTimeout(function () {
    $("#" + userchosencolour).removeClass("pressed");
  }, 100);
}

// 6. Play sounds
function sound(butsound) {
  // Use a simple new Audio() constructor
  var audio = new Audio("./sounds/" + butsound + ".mp3");
  audio.play();
}
