import Bootloader from './Bootloader.js';
                
const config = {
    title: "gammafp",
    width: 500,
    height: 400,
    parent: "container",
    backgroundColor: "#c7ecee",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);