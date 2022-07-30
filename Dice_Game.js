
var score_user1 = 0;
var score_user2 = 0;
 let player1Turn = true;


 //variables referance to DOM

 const dice1 = document.getElementById('dice_image_1');
 const dice2 = document.getElementById('dice_image_2');

 const player1Score = document.getElementsByClassName('player1_score');
 const player2Score = document.getElementsByClassName('player2_score');
 
 const rollButton = document.getElementsByClassName("roll_the_dice");

 roll_dices.addEventListener("click" , function(){

    let score = 0;
    const a = Math.floor(Math.random()*6)+1;
    const b = Math.floor(Math.random()*6)+1;
     
    
    const Image1 = 'Dice_Images/dice_'+a+'.png';
    const Image2 = 'Dice_Images/dice_'+b+'.png';

    document.querySelector('.image_1').setAttribute('src', Image1);
    document.querySelector('.image_2').setAttribute('src', Image2);

    if(player1Turn){

        if(a==b ){
            score = a+b;
            if(a==1){
                score = 0;
                player1Turn = !player1Turn;
               // player1_score.textContent = player1Score;
                return;
            }
        }
        else{
            player1Score = score + player1Score;
            player1Turn = !player1Turn;
           // player1_score.textContent = player1Score;
            return;
        }
        

    }
    else{
        if(a==b ){
            score = a+b;
            if(a==1){
                score = 0;
                player1Turn = !player1Turn;
              //  player2_score.innerHTML = player2Score;
                return;
            }
        }
        else{
            player1Score = score + player1Score;
           // player2_score.innerHTML = player2Score;
            player1Turn = !player1Turn;
            return;
        }
    }

    


 })

