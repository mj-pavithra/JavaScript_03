
var player1Score = 0;
var player2Score = 0;
var player1Turn = true;


 //variables referance to DOM

 var dice1 = document.getElementById('dice_image_1');
 var dice2 = document.getElementById('dice_image_2');

 var player1Score = document.getElementsById('player1_score');
 var player2Score = document.getElementsById('player2_score');
 
 var rollButton = document.getElementsByCId("roll_dice");
 
 roll_dices.addEventListener("click" , function (){ 
    var score = 0;
    var a = Math.floor(Math.random()*6)+1;
    var b = Math.floor(Math.random()*6)+1;
     
    
    var Image1 ='dice_'+a+'.png';
    var Image2 = 'dice_'+b+'.png';

    document.querySelector('.image_1').setAttribute('src', Image1);
    document.querySelector('.image_2').setAttribute('src', Image2);

    

    if(player1Turn){

        if(a==b ){
            
            if(a==1){
                score = 0;
                player1Turn = !player1Turn;
            }
            score = a+b;
        }
        else{
            player1Score = score + player1Score;
            player1Turn = !player1Turn;
        }
        document.getElementsById('player1_score').innerHTML = player1Score;

    }
    else{
        if(a==b ){
            
            if(a==1){
                score = 0;
                player1Turn = !player1Turn;
            }
            score = a+b;
            document.getElementsById('player1_score').innerHTML = player1Score;
        }
        else{
            player1Score = score + player1Score;
            player1Turn = !player1Turn;
            return;
        }
        document.getElementsbyId('player2_score').innerHTML = player2Score;
    }

})

