var score_user1 = 0;
var score_user2 = 0;
let player1Turn = true;


//variables referance to DOM

const dice1 = document.getElementById('dice_image_1');
const dice2 = document.getElementById('dice_image_2');

const player1Score = document.getElementById('player1_score');
const player2Score = document.getElementById('player2_score');

const rollButton = document.getElementById("roll_dices");

rollButton.addEventListener("click", function () {


    const a = Math.floor(Math.random() * 6) + 1;
    const b = Math.floor(Math.random() * 6) + 1;


    const Image1 = 'Dice_Images/dice_' + a + '.png';
    const Image2 = 'Dice_Images/dice_' + b + '.png';

    document.querySelector('.image_1').setAttribute('src', Image1);
    document.querySelector('.image_2').setAttribute('src', Image2);

    if (player1Turn) {

        if (a == b) {
            score_user1 += (a + b);
            if (a == 1) {
                score_user1 = 0;
                player1Turn = !player1Turn;
                player1Score.innerHTML = score_user1;
                return;
            }
            player1Score.innerHTML = score_user1;
        }
        else {
            score_user1 += (a + b);
            player1Turn = !player1Turn;
            player1Score.innerHTML = score_user1;
            return;
        }


    }
    else {
        if (a == b) {
            score_user2 += (a + b);
            if (a == 1) {
                score_user2 = 0;
                player1Turn = !player1Turn;
                player2Score.innerHTML = score_user2;
                return;
            }
            player2Score.innerHTML = score_user2;
        }
        else {
            score_user2 += (a + b);
            player2Score.innerHTML = score_user2;
            player1Turn = !player1Turn;
            return;
        }
    }
})
