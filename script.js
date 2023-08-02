let player = 1;
let newPlayer = 0;
let oldPlayer = 0;
let win = false

let play = [
 ["empty" ,"empty", "empty"],
 ["empty" ,"empty", "empty"],
 ["empty" ,"empty", "empty"]
];


function cellClicked(id) {
    let textId = "text" + id;
    let row = id.charAt(0);
    let column = id.charAt(1);

    if(row>=0 && row<=2 && column>=0 && column<=2 && win == false) {
        console.log("Cell in row", row , "and column", column,"was clicked.");
        if(player === 1 && play[row][column] == "empty")
        {
            document.getElementById(textId).innerHTML = "X";
            newPlayer = 2;
            play[row][column]="1";
        }
        if(player === 2 && play[row][column] == "empty")
        {
            document.getElementById(textId).innerHTML = "O";
            newPlayer = 1;
            play[row][column]="2";
        }
    }
    if(win==false) {
        oldPlayer = player;
        player = newPlayer;
        checkForWin(oldPlayer);
    }
}

function checkForWin(oldPlayer) {
    for (let row = 0; row < 3; row++)
    {
        if (play[row][0] != "empty" && play[row][1] == play[row][2] && play[row][1] == play[row][0]){
            win = true;
        }
    }
    for (let column = 0; column < 3; column++)
    {
        if (play[0][column] != "empty" && play[1][column] != "empty" && play[2][column] != "empty" && play[0][column] && play[1][column] == play[2][column] && play[1][column] == play[0][column]){
            win = true;
        }
    }
    if (play[0][0] != "empty" && play[1][1] != "empty" && play[2][2] != "empty" && play[0][0] == play[1][1] && play[2][2] == play[1][1]){
        win = true;
    }
    if (play[0][2] != "empty" && play[1][1] != "empty" && play[2][0] != "empty" && play[0][2] == play[1][1] && play[2][0] == play[1][1]){
        win = true;
    }
    if (win == true)
    {
        let who = "Player " + oldPlayer + " won!";
        document.getElementById("win").innerHTML = who;
    }
}
