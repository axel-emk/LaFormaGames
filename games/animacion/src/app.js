const config = {
    width: 320,
    height: 180,
    parent: 'container',
    pixelArt: true,
    scene: {
        preload,
        create
    }
}

new Phaser.Game(config);

function preload() {
    console.log("Preload");
    this.load.spritesheet('evil_tomato', './assets/evil_tomato.png', {frameWidth: 16, frameHeight: 25});
    // this.load.json('evil_tomato_anim', './assets/evil_tomato_anim.json');
}
function create() {
    console.log("Create");
    this.tomato = this.add.sprite(100, 100, 'evil_tomato');
    // this.tomato = this.add.sprite(100, 100, 'evil_tomato', 0).setScale(5);

    this.anims.create({
        key: 'tomato_walk',
        frames: this.anims.generateFrameNumbers('evil_tomato', {
            // frames: [ 1, 2, 3, 4, 5, 6, 7, 8]
            start: 1,
            end: 8,
        }), 
        repeat: -1,
        frameRate: 12, 
    });

    this.tomato.anims.play('tomato_walk');
}








