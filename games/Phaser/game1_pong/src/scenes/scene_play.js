import Jugadores from '../gameObjects/jugadores.js'
class Scene_play extends Phaser.Scene {
    constructor() {
        super({ key: "Scene_play" });
    }
    create() {
        // Agregar la imagen de fondo que cubre todo el canvas
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'background').setOrigin(0.5, 0.5);

        // Configuración del centro del canvas
        let center_width = this.sys.game.config.width / 2;
        let center_height = this.sys.game.config.height / 2;

        // Separador
        this.add.image(center_width, center_height, "separador");

        // Jugadores
        this.izquierda = new Jugadores(this, 30, center_height, "izquierda");
        this.derecha = new Jugadores(this, this.sys.game.config.width - 30, center_height, "derecha");

        // Bola
        this.physics.world.setBoundsCollision(false, false, true, true); // Desactiva colisión en los lados izquierdo y derecho
        this.ball = this.physics.add.image(center_width, center_height, "ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180);
        this.ball.setAngularVelocity(150); // Rotación constante

        // Crear límites invisibles como cuerpos estáticos individuales
        const arcoAltura = 170;
        const espacioArco = (this.sys.game.config.height - arcoAltura) / 2;

        // Zona superior izquierda
        const limiteSupIzq = this.add.rectangle(-5, espacioArco / 2, 20, espacioArco); // Cambia 10 a 0
        this.physics.add.existing(limiteSupIzq, true);
        limiteSupIzq.visible = false;

        // Zona inferior izquierda
        const limiteInfIzq = this.add.rectangle(-5, this.sys.game.config.height - espacioArco / 2, 20, espacioArco); // Cambia 10 a 0
        this.physics.add.existing(limiteInfIzq, true);
        limiteInfIzq.visible = false;

        // Zona superior derecha
        const limiteSupDer = this.add.rectangle(this.sys.game.config.width, espacioArco / 2, -5, espacioArco); // Cambia `this.sys.game.config.width - 10` a `this.sys.game.config.width`
        this.physics.add.existing(limiteSupDer, true);
        limiteSupDer.visible = false;

        // Zona inferior derecha
        const limiteInfDer = this.add.rectangle(this.sys.game.config.width, this.sys.game.config.height - espacioArco / 2, -5, espacioArco); // Cambia `this.sys.game.config.width - 10` a `this.sys.game.config.width`
        this.physics.add.existing(limiteInfDer, true);
        limiteInfDer.visible = false;


        // Físicas
        this.physics.add.collider(this.ball, limiteSupIzq);
        this.physics.add.collider(this.ball, limiteInfIzq);
        this.physics.add.collider(this.ball, limiteSupDer);
        this.physics.add.collider(this.ball, limiteInfDer);
        this.physics.add.collider(this.ball, this.izquierda, this.tocaJugador, null, this);
        this.physics.add.collider(this.ball, this.derecha, this.tocaJugador, null, this);

        // Controles
        // Jugador Derecho
        this.cursor = this.input.keyboard.createCursorKeys();
        // Jugador Izquierdo
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {
        // Rotar la bola manualmente
        this.ball.angle += 3; // Cambia el ángulo manualmente, más eficiente

        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            this.ball.setPosition(this.sys.game.config.width / 2, this.sys.game.config.height / 2)
        }

        // Control de llos jugadores
        // jugador derecha
        if (this.cursor.down.isDown) {
            this.derecha.body.setVelocityY(300);
        } else if (this.cursor.up.isDown) {
            this.derecha.body.setVelocityY(-300);
        } else {
            this.derecha.body.setVelocityY(0);
        }
        // Jugador izquierda
        if (this.cursor_S.isDown) {
            this.izquierda.body.setVelocityY(300);
        } else if (this.cursor_W.isDown) {
            this.izquierda.body.setVelocityY(-300);
        } else {
            this.izquierda.body.setVelocityY(0);
        }
    }
    tocaJugador() {
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
        this.ball.setAngularVelocity(Phaser.Math.Between(-200, 200)); // Cambia la velocidad angular en cada rebote
    }

}

export default Scene_play;