let board = ['','','','','','','','',''];
let playTime = 0;
let symbols = ['o', 'x'];


function handleMove(position){
    board[position] = symbols[playTime];

    if(playTime == 0){
        playTime = 1;
    }else{
        playTime = 0;
    }
}