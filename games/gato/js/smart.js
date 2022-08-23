// Funciones del juego

// Movimiento aleatorio
const searchMove = () => {

    // Contar numero de bolas
    // contar linea
    // si no se hace nada de lo anterior
        // si es 3
                // borrar una
                // movimientos aleatorios

    // sino movimiento aleatorio
    balls = checkTurnCount(1);
    if(balls > 1){
        completed = false;
        // Formar linea maquina | ,1
        if (completed == false) completed = completeRow(0,1);
        if (completed == false) completed = completeRow(1,1);
        if (completed == false) completed = completeRow(2,1);
        if (completed == false) completed = completeColumn(0,1);
        if (completed == false) completed = completeColumn(1,1);
        if (completed == false) completed = completeColumn(2,1);
        if (completed == false) completed = completeDiag(1,1);
        if (completed == false) completed = completeDiag(-1,1);
        
        // Cortar linea rival | ,2
        if (completed == false) completed = completeRow(0,2);
        if (completed == false) completed = completeRow(1,2);
        if (completed == false) completed = completeRow(2,2);
        if (completed == false) completed = completeColumn(0,2);
        if (completed == false) completed = completeColumn(1,2);
        if (completed == false) completed = completeColumn(2,2);
        if (completed == false) completed = completeDiag(1,2);
        if (completed == false) completed = completeDiag(-1,2);
        
        if (completed == false){

            // si no se hizo nada de lo anterior
    
            if(balls == 3){
                cellFind = false;
        
                // Borrar celda utilizada 
                while (cellFind == false){
                    x = Math.round(Math.random()*2);
                    y = Math.round(Math.random()*2);
                    // condicionales
                    if(board[x][y]== 1 && checkBlock(x,y) == false)  
                    cellFind = true;
                }
                ballSellected_x = x;
                ballSellected_y = y;
                clearCell(x,y); 
        
            }
            randomMove();    
        }


    }else{
        randomMove();
    }


}

// Movimiento aleatorio | click en casilla | primera jugada
const randomMove = () => {
    cellAvailable = false;

    while (cellAvailable == false){
        x = Math.round(Math.random()*2);
        y = Math.round(Math.random()*2);
        // condicionales
        if(board[x][y]== 0 && difMove(x,y) )        
        cellAvailable = true;
    }
    paintCell(x,y);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Inteligencia Artificial

// ------------------------------ filas
const completeRow = (x, turn_value) => {
    // Si hay 2 en lineas
    if(checkRow(x, turn_value) == 2){
        // buscar cual casilla falta para completar la linea
        findFinal = false;
        for(i=0; i<3; i++){
            if(board[i][x] == 0){
                findFinal= true;
                findFinal_x= i;
                findFinal_y= x;
            }
        }
        // si esta vacia
        if (findFinal == true){
            // Si hay 3 fichas
            if(checkTurnCount(turn_value) == 3){
                // preguntar de quien queremos completar la linea
                // si es la maquina -> armar linea
                if (turn_value == 1){
                        // buscar la perdida
                        findLost = false;
                        
                        for (i=0; i<3 && findLost == false; i++){
                            if(i != x){
                                for (j=0; j<3 && findLost == false; j++){
                                    if (board[j][i] == 1){
                                        findLost = true;
                                        findLost_x = j;
                                        findLost_y = i;                                      
                                        
                                    }
                                }
                            }
                        }                        
                        // la borramos
                        ballSellected_x = findFinal_x;
                        ballSellected_y = findFinal_y;
                        clearCell(findFinal_x, findFinal_y);


                // sino -> bloquear linea
                }else{
                        // Buscar una ficha de la maquina que no bloquea
                        // la borramos
                        cellFind = false;
        
                        // Borrar celda utilizada 
                        while (cellFind == false){
                            x = Math.round(Math.random()*2);
                            y = Math.round(Math.random()*2);
                            // condicionales
                            if(board[x][y]== 1 && checkBlock(x,y) == false)  
                            cellFind = true;
                        }
                        ballSellected_x = x;
                        ballSellected_y = y;
                        clearCell(x,y); 
                }
            }
            // Sino
                // pintar la casilla final
                paintCell(findFinal_x, findFinal_y);
                return true;

        }
        // sino return false

        // sino return false
        }else return false
    
    // sino return false
    return false;

}

// ------------------------------ Columnas
const completeColumn = (x, turn_value) => {
    // Si hay 2 en lineas
    if(checkColumn(x, turn_value) == 2){
        // buscar cual casilla falta para completar la linea
        findFinal = false;
        for(i=0; i<3; i++){
            if(board[x][i] == 0){
                findFinal= true;
                findFinal_x= x;
                findFinal_y= i;
            }
        }
        // si esta vacia
        if (findFinal == true){
            // Si hay 3 fichas
            if(checkTurnCount(turn_value) == 3){
                // preguntar de quien queremos completar la linea
                // si es la maquina -> armar linea
                if (turn_value == 1){
                        // buscar la perdida
                        findLost = false;
                        
                        for (i=0; i<3 && findLost == false; i++){
                            if(i != x){
                                for (j=0; j<3 && findLost == false; j++){
                                    if (board[i][j] == 1){
                                        findLost = true;
                                        findLost_x = i;
                                        findLost_y = j;                                      
                                        
                                    }
                                }
                            }
                        }                        
                        // la borramos
                        ballSellected_x = findFinal_x;
                        ballSellected_y = findFinal_y;
                        clearCell(findFinal_x, findFinal_y);


                // sino -> bloquear linea
                }else{
                        // Buscar una ficha de la maquina que no bloquea
                        // la borramos
                        cellFind = false;
        
                        // Borrar celda utilizada 
                        while (cellFind == false){
                            x = Math.round(Math.random()*2);
                            y = Math.round(Math.random()*2);
                            // condicionales
                            if(board[x][y]== 1 && checkBlock(x,y) == false)  
                            cellFind = true;
                        }
                        ballSellected_x = x;
                        ballSellected_y = y;
                        clearCell(x,y); 
                }
            }
            // Sino
                // pintar la casilla final
                paintCell(findFinal_x, findFinal_y);
                return true;

        }
        // sino return false

        // sino return false
        }else return false
    
    // sino return false
    return false;

}

const completeDiag = (x, turn_value) => {
    // Si hay 2 en lineas
    if(checkDiag(x, turn_value) == 2){
        // buscar cual casilla falta para completar la linea
        findFinal = false;
        
        if(board[1][1] == 0){
            findFinal_x = 1;
            findFinal_y = 1;
            findFinal = true
        }
        if(board[(1-x)][2] == 0){
            findFinal_x = (1-x);
            findFinal_y = 2;
            findFinal = true
        }
        if(board[(1+x)][0] == 0){
            findFinal_x = (1+x);
            findFinal_y = 0;
            findFinal = true
        }


        // si esta vacia
        if (findFinal == true){
            // Si hay 3 fichas
            if(checkTurnCount(turn_value) == 3){
                // preguntar de quien queremos completar la linea
                // si es la maquina -> armar linea
                if (turn_value == 1){
                        // buscar la perdida
                        findLost = false;
                        
                        for (i=0; i<3 && findLost == false; i++){
                            for (j=0; j<3 && findLost == false; j++){
                                    if (( ( i!=1 || j!=1) &&
                                        (i!= (1-x) || j!=2) &&
                                        (i!= (1+x) || j!=0))  
                                        && board[j][i] == 1){
                                        findLost = true;
                                        findLost_x = j;
                                        findLost_y = i;                                      
                                        
                                    }
                                }
                            }
                                                
                        // la borramos
                        ballSellected_x = findFinal_x;
                        ballSellected_y = findFinal_y;
                        clearCell(findFinal_x, findFinal_y);


                // sino -> bloquear linea
                }else{
                        // Buscar una ficha de la maquina que no bloquea
                        // la borramos
                        cellFind = false;
        
                        // Borrar celda utilizada 
                        while (cellFind == false){
                            x = Math.round(Math.random()*2);
                            y = Math.round(Math.random()*2);
                            // condicionales
                            if(board[x][y]== 1 && checkBlock(x,y) == false)  
                            cellFind = true;
                        }
                        ballSellected_x = x;
                        ballSellected_y = y;
                        clearCell(x,y); 
                }
            }
            // Sino
                // pintar la casilla final
                paintCell(findFinal_x, findFinal_y);
                return true;

        }
        // sino return false

        // sino return false
        }else return false
    
    // sino return false
    return false;

}