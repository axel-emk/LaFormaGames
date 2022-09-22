// Variables globales
const board = new Array(3);
let turn;

let crossSellected_x;
let crossSellected_y;

let ballSellected_x;
let ballSellected_y;


// --------------- Funciones ----------------

// Limpiar celda
const clearCell = (x, y) => {
    board[x][y] = 0;
    const cell = document.getElementById("c" + x + y);
    cell.innerHTML = "";

}

// Limpiar Tablero
const clearBoard = () => {
    for(i=0; i<3; i++)
        for(j=0; j<3; j++){
            clearCell(i, j)
        }   
}

// Pintar casilla | Jugar
const paintCell = (x, y) => {

    cell = document.getElementById("c" + x + y);
    // cell.innerHTML = "<img src='./img/circle1.gif'>";  // primer ejemplo de llamado img.gif
    cell.innerHTML =  "<img src=" + turn + ".gif>"; 
    
    // Condiciones para jugar
    if(turn == "ball"){
        board[x][y] = 1;
        ballSellected_x = x;
        ballSellected_y = y;
    }else{
        board[x][y] = 2;
        crossSellected_x = x;
        crossSellected_y = y;
    }

    // checkrow | checkeo de la jugada
    checkLine();

    if (turn == "ball") turn = "cross";
    else turn = "ball";

}

// Checkear Casilla / Reglas del juego (limitaciones)
const checkCell = (x, y) => {
    crosses = checkTurnCount(2);
    if(crosses == 3){
        if(board[x][y] == 2){
            crossSellected_x = x;
            crossSellected_y = y;
            clearCell(x,y); 
        }
    }else{
        if(board[x][y] == 0 && difMove(x,y)) selectCell(x,y);

    }
} 


// Seleccion de casilla
const selectCell = (x, y) => {
    paintCell(x, y);
    searchMove();
    // alert("x: " + x + "\ny:" + y); // mostrar cordenadas seleccionadas
}


// Autoplay
const autoplay = () => {
    // Mensaje game over
    // hideMessage();
    panel_message = document.getElementById("message");
    panel_message.style.display = "none";

    
    // alert('HOLA MUNDO CTM')
    for (i=0; i<3; i++) board[i] = new Array(3);

    turn = "ball";
    
    // Dar coordenadas | Fuera del tablero para que este vacio
    crossSellected_x = 4;
    crossSellected_y = 4;
    
    ballSellected_x = 4;
    ballSellected_y = 4;
    
    // Limpiar tabler0
    clearBoard();

    // Llamar al archivo IA | busqueda de las fichas
    searchMove();
    
    // paintCell(0,2); // mostrar en la primera celda
    // alert(board[2][2]); // ejemplo resultado = 0
} 


// Ejecutar
autoplay();


// Tipos de datos
/*
----BOARD----- 
vacia= 0
bolas = 1
cruz = 2

----TURN-----
maquina = ball
human = cross
*/

