var player = true;

var DiceImages = ["\"./ dice_1.png\"", "\"./ dice_2.png\"", "\"./ dice_3.png\"", "\"./ dice_4.png\"", "\"./ dice_5.png\"", "\"./ dice_6.png\"",];

var dice1 = 0;
var dice2 = 0;

score1 = 0;
score2 = 0;

var scoreHolder = 0;

console.log(DiceImages[0]);

function game() {
    if (player) {
        dice1 = Math.floor(Math.random() * 5) + 1;
        dice2 = Math.floor(Math.random() * 5) + 1;
    }

    //test
    console.log(dice1);
    console.log(dice2);

    if (dice1 == dice2) {
        if (dice1 == 1 && dice2 == 1) {
            scoreHolder = 0;
            player = !player;
            game();
        }
        else {
            scoreHolder = scoreHolder + dice1 + dice2;
            game();
        }
    }
    else {
        scoreHolder = scoreHolder + dice1 + dice2;
        player = !player;
        game();
    }

    document.getElementById(player1_score).innerHTML = scoreHolder;
}