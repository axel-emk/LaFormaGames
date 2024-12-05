import Jugadores from '../gameObjects/jugadores.js'
class Scene_play extends Phaser.Scene {
    constructor(){
        super({key: "Scene_play"});
    }
    create() {
        //Automatizacion
        let center_width = this.sys.game.config.width/2;
        let center_height = this.sys.game.config.height/2;

        //Separador
        this.add.image(center_width, center_height, "separador"); // console.log(this);

        // Jugador
        // this.izquierda = this.add.image(30, center_height, "izquierda");
        // this.derecha = this.add.image(this.sys.game.config.width-30, center_height, "derecha");
        this.izquierda = new Jugadores(this, 30, center_height, "izquierda");  
        this.derecha = new Jugadores(this, this.sys.game.config.width-30, center_height, "derecha");

        //Bola
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(center_width, center_height, "ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180);

        //Fisicas
        this.physics.add.collider(this.ball, this.izquierda, this.tocaJugador, null, this);
        this.physics.add.collider(this.ball, this.derecha, this.tocaJugador, null, this);
    }
    tocaJugador () {
        
    }
}

export default Scene_play;