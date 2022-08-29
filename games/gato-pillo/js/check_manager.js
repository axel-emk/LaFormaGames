// Funciones de checkeo

// Confirmar linea | turno de jugador
const checkRow = (x, value) => {
     count_value = 0;
     for(i=0; i<3; i++){
        if(board[i][x] == value) count_value++;
     }
     return count_value;
}

const checkColumn = (y, value) => {
     count_value = 0;
     for(i=0; i<3; i++){
         if(board[y][i] == value) count_value++;
        }
        return count_value;
    }

    // ----------------------------------------
const checkDiag = (d, value) => {
    count_value = 0;
    if(board[(1+d)][0] == value) count_value++;
    if(board[1][1] == value) count_value++;
    if(board[(1-d)][2] == value) count_value++;
    
    return count_value;
}

// checkear casillas 
const checkLine = () => {
     if (turn == "ball") value = 1;
     else value = 2;
     line = false;

    // alert(checkRow(0, value) + " Fichas de " + turn);
    //  if(checkRow(0,value) == 3) {alert(turn + " has ganado CTM! ");}
    // if(checkColumn(0,value) == 3) {alert(turn + " 3 en columna 0");}
     if(checkRow(0,value) == 3) line = true;
     if(checkRow(1,value) == 3) line = true;
     if(checkRow(2,value) == 3) line = true;
     if(checkColumn(0,value) == 3) line = true;
     if(checkColumn(1,value) == 3) line = true;
     if(checkColumn(2,value) == 3) line = true;
     if(checkDiag(1,value) == 3) line = true;
     if(checkDiag(-1,value) == 3) line = true;

     if(line == true) showMessage(value); 
}

// Turnos
const checkTurnCount = (turn_value) => {
    turnCount = 0;
    for (i=0; i<3; i++){
        for (j=0; j<3; j++){
            if(board[i][j] == turn_value) turnCount++;
        }
    }
    // alert("hay " + turnCount + " ficha");
    return turnCount;
}

// Check randomMove | 
const difMove = (x,y) => {
    diferent = false;

    if (turn == "cross"){
        if(x != crossSellected_x ) diferent = true;
        if(y != crossSellected_y ) diferent = true;
    }else{
        if(x != ballSellected_x ) diferent = true;
        if(y != ballSellected_y ) diferent = true;
        
    }


    return diferent;
}

// Bloqueo de row, column y diag

const checkBlock = (x,y) => {
    // Si hay 2 ficjas del jugador y una de la maquina
    if (checkRow(y,1) == 1 && checkRow(y,2) == 2) return true;
    if (checkColumn(x,1) == 1 && checkColumn(x,2) == 2) return true;
    if ( (x==0 && y==2) || (x==1 && y==1) || (x==2 && y==0)){
        if(checkDiag(1,1) == 1 && checkDiag(1,2) == 2) return true;
    }
    if ( (x==0 && y==0) || (x==1 && y==1) || (x==2 && y==2)){
        if(checkDiag(-1,1) == 1 && checkDiag(-1,2) == 2) return true;
    }

    return false;
}