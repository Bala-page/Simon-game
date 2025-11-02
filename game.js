//gamepattern
var gamecolour=["green","red","yellow","blue"];
var gpattern=[];
var userpatt=[];
var level=0;
var start="true";

$(document).keypress(function(event){
    if(start=="true"){
        $("#level-title").text("level "+level);
        nextseq();
        start="false";
    }
});

//userclick
$(".btn").click(function () {
    // This 'if' check is important!
    if (start === false) { 
        var userchosencolour = $(this).attr("id");
        sound(userchosencolour);
        animate(userchosencolour);
        userpatt.push(userchosencolour);
        check(userpatt.length - 1);
    }
});

//check
function check(index) {
    // Check if the user's last click was correct
    if (gpattern[index] === userpatt[index]) {
        
        // Check if the user has finished the entire sequence
        if (userpatt.length === gpattern.length) {
            console.log("success");
            setTimeout(function () {
                nextseq();
            }, 1000);
        }

    } else { // This block runs if the user was wrong
        
        console.log("wrong");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();

        // Flash the screen red
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        // Update the title
        $("#level-title").text("Game Over, Press any Key to Restart");

        // --- THIS IS THE RESET LOGIC ---
        start = true;
        level = 0;
        gpattern = [];
        userpatt = []; // Also reset the user's pattern
    }
}

//sequence
function nextseq(){
    userpatt=[];
    level++;
    $("#level-title").text("level "+level);
    var rand=Math.floor(Math.random() *4);
    var randcolour= gamecolour[rand];
    gpattern.push(randcolour);
    $("#"+randcolour).fadeIn(100).fadeOut(100).fadeIn(100);
}

//animation
function animate(userchosencolour){
    $("#"+userchosencolour).addClass("pressed");
    setTimeout(function(){
        $("#"+userchosencolour).removeClass("pressed");
    },100);
}

//sound
function sound(butsound){
    switch(butsound){
        case "green":
            var sound1=new Audio("./sounds/green.mp3");
            sound1.play();
            break;
        case "red":
            var sound1=new Audio("./sounds/red.mp3");
            sound1.play();
            break;
        case "yellow":
            var sound1=new Audio("./sounds/yellow.mp3");
            sound1.play();
            break;
        case "blue":
            var sound1=new Audio("./sounds/blue.mp3");
            sound1.play();
            break;
    }

}

