 var randomNumber1 = Math.floor(Math.random()*6) + 1;
 
 var randomDiceImage = "dice" + randomNumber1 + ".png";
 
 var randomImageSource = "images/" + randomDiceImage;

 var img1 = document.querySelectorAll("img")[0];
  
 img1.setAttribute("src",randomImageSource);
 
 var randonNumber2 = Math.floor(Math.random()*6) + 1;

 var randomImageSource2 = "images/dice" + randonNumber2 + ".png";
 
 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

 if(randonNumber1>randonNumber2){
     document.getElementsByTagName("h1")[0].innerHTML ="Player 1 wins!";
 }else if(randonNumber2 > randonNumber1){
     document.getElementsByTagName("h1")[0].innerHTML = "Player 2 win!";
 }
 else{
     document.getElementsByTagName("h1")[0].innerHTML = "Draw";
 }