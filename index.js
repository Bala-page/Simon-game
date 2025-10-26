    var rand1=Math.floor(Math.random()*6)+1;
    var rand2=Math.floor(Math.random()*6)+1;
    var imgname1="./images/image"+rand1+".png";
    var imgname2="./images/image"+rand2+".png";

    document.querySelector(".first .img1").src=imgname1;
    document.querySelector(".second .img2").src=imgname2;

    // if(rand1==1){
    //     document.querySelector(".first .img1").src="./images/one.png";
    // }
    // else if(rand1==2){
    //     document.querySelector(".first .img1").src="./images/two.png";
    // }
    // else if(rand1==3){
    //     document.querySelector(".first .img1").src="./images/three.png";
    // }
    // else if(rand1==4){
    //     document.querySelector(".first .img1").src="./images/four.png";
    // }
    // else if(rand1==5){
    //     document.querySelector(".first .img1").src="./images/five.png";
    // }
    // else if(rand1==6){
    //     document.querySelector(".first .img1").src="./images/six.png";
    // }
    // switch(rand2){
    //     case 1:
    //         document.querySelector(".second .img2").src="./images/one.png";
    //         break;
    //     case 2:
    //         document.querySelector(".second .img2").src="./images/two.png";
    //         break;
    //     case 3:
    //         document.querySelector(".second .img2").src="./images/three.png";
    //         break;
    //     case 4:
    //         document.querySelector(".second .img2").src="./images/four.png";
    //         break;
    //     case 5:
    //         document.querySelector(".second .img2").src="./images/five.png";
    //         break;
    //     case 6:
    //         document.querySelector(".second .img2").src="./images/six.png";
    //         break;
    // }
    if(rand1>rand2){
        document.querySelector("h1").innerText="Player 1 wins";
    }
    else if(rand1==rand2){
        document.querySelector("h1").innerText="Draw";
    }
    else{
        document.querySelector("h1").innerText="Player 2 wins";
    }