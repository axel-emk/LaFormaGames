import SceneC from '../src/sceneC.js';

export default class SceneA extends Phaser.Scene {
    constructor() {
        super({ key: "SceneA" });
    }
    preload() {}

    create() {
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff3300, 1);

        // Dibujar rectángulos
        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(100, 100, 100, 100);

        this.add.text(120, 110, "A", { font: "96px Courier", fill: "#000000" });

        // Agregar y lanzar SceneC
        this.scene.add("SceneC", new SceneC());
    }
    update(time, delta) {}
}
