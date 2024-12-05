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
    this.load.atlas('tomato_atlas', './assets/evil_tomato.png', './assets/evil_tomato.json');
    this.load.json('evil_tomato_anim', './assets/evil_tomato_anim.json');
}
function create() {
    console.log("Create");
    this.tomato = this.add.sprite(100, 100, 'tomato_atlas').setScale(2);
    this.dataAnim = this.cache.json.get('evil_tomato_anim'); 

    this.anims.fromJSON(this.dataAnim);

    this.tomato.anims.play('tomato_atlas_walk');

    // Métodos para parar y continuar la animación
    // Pausa animación
    setTimeout(() => {
        this.tomato.anims.pause();
    }, 2000);

    // Continua animación
    setTimeout(() => {
        this.tomato.anims.resume();
    }, 4000);

    // Detiene completamente la animación
    setTimeout(() => {
        this.tomato.anims.stop();
    }, 6000);


}








