import Bootloader from './Bootloader.js';

const config = {
    title: "tween",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 600,
        height: 400,
        // mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#4834d4",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);