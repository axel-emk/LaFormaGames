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
        this.izquierda = this.add.image(30, center_height, "izquierda");
        this.derecha = this.add.image(this.sys.game.config.width-30, center_height, "derecha");
        //Bola
        this.ball = this.physics.add.image(center_width, center_height, "ball");

        this.ball.setVelocityX(-180);
    }
}

export default Scene_play;