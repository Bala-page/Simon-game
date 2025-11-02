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
    // Only run this code if the game has started
    if (start === "false") { 
        var userchosencolour = $(this).attr("id");
        sound(userchosencolour);
        animate(userchosencolour);
        userpatt.push(userchosencolour);
        check(userpatt.length - 1);
    }
});

//check
function check(index){
    if(gpattern[index] == userpatt[index]){
        if(userpatt.length == gpattern.length){
            console.log("succes");
            setTimeout(function(){
                nextseq();
            },1000);
        }
    }
    else{
        if(gpattern.length == 0){
            $("#level-title").text("First Press a Key to Start");
            var audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            animate(userchosencolour);   
        }
        else{
            gpattern=[];
            console.log("wrong");
            var audio = new Audio("./sounds/wrong.mp3");
            $("body").animate({backgroundColor: "#FF0000"},100);
            setTimeout(function(){
                $("body").animate({
                backgroundColor: "#011F3F"},300);
            },100);
            audio.play();
            animate(userchosencolour);
            $("#level-title").text("Game Over, Press any Key to Restart");
            level=0;
            start="true";
        }
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
