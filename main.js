var myScore = 0;
var compScore = 0;

function scorePrint() {
    document.getElementById('my_score').innerHTML = myScore;
    document.getElementById('comp_score').innerHTML = compScore;
}

function removeMove() {
    setTimeout(function() {
        document.getElementById("my_f").classList.remove("move");
        document.getElementById("my_s").classList.remove("move_s");
        document.getElementById("my_h").classList.remove("move_h");
        document.getElementById("comp_f").classList.remove("move_comp");
        document.getElementById("comp_h").classList.remove("move_comp_h");
        document.getElementById("comp_s").classList.remove("move_comp_s");
    }, 1000);
}




function game(arg) {
    switch (arg) {
        case 1:
            document.getElementById('my_out').innerHTML = "Rock";
            // document.getElementById("my_f").classList.add()
            compPlay(1);
            document.getElementById("my_f").classList.add("move");
            removeMove();


            // if (comp == 1){
            //   document.getElementById('result').innerHTML = "no winners";
            // } else if(comp == 2){
            //   document.getElementById('result').innerHTML = "Computer WIN!";
            // }
            break;
        case 2:
            document.getElementById('my_out').innerHTML = "Paper";
            compPlay(2);
            document.getElementById("my_h").classList.add("move_h");

            removeMove();
            break;
        case 3:
            document.getElementById('my_out').innerHTML = "Scissors";
            compPlay(3);
            document.getElementById("my_s").classList.add("move_s");
            removeMove();
            break;
    }

}

function compPlay(arg) {
    var comp = Math.random();
    if (comp < 0.33) {
        document.getElementById('comp_out').innerHTML = "Rock";
        document.getElementById("comp_f").classList.add("move_comp");
        switch (arg) {
            case 1:
                document.getElementById('result').innerHTML = "DEAD HEAT";
                break;
            case 2:
                document.getElementById('result').innerHTML = "YOU WIN!";
                myScore++;
                break;
            case 3:
                document.getElementById('result').innerHTML = "COMPUTER WIN!";
                compScore++;
                break;
        }
    } else if (comp >= 0.33 && comp <= 0.66) {
        document.getElementById('comp_out').innerHTML = "Paper";
        document.getElementById("comp_h").classList.add("move_comp_h");
        switch (arg) {
            case 2:
                document.getElementById('result').innerHTML = "DEAD HEAT";
                break;
            case 3:
                document.getElementById('result').innerHTML = "YOU WIN!";
                myScore++;
                break;
            case 1:
                document.getElementById('result').innerHTML = "COMPUTER WIN!";
                compScore++;
                break;
        }
    } else if (comp > 0.66) {
        document.getElementById('comp_out').innerHTML = "Scissors";
        document.getElementById("comp_s").classList.add("move_comp_s");
        switch (arg) {
            case 3:
                document.getElementById('result').innerHTML = "DEAD HEAT";
                break;
            case 1:
                document.getElementById('result').innerHTML = "YOU WIN!";
                myScore++;
                break;
            case 2:
                document.getElementById('result').innerHTML = "COMPUTER WIN!";
                compScore++;
                break;
        }
    }
    scorePrint();
}