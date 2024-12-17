const config = {
    width: 300,
    height: 200,
    parent: 'container',
    pixelArt:true,
    scene: {preload, create}
};

new Phaser.Game(config);

function preload() {
    console.log("Preload");
    this.load.path = './assets/';
    this.load.json('tomato_anim', 'tomato_anim.json');
    this.load.atlas('tomato', 'tomato.png', 'tomato_atlas.json');
}

function create() {
    console.log('create');
    this.tomato = this.add.sprite(100, 100, 'tomato');
    this.tomato_walk = this.add.sprite(120, 100, 'tomato');
    this.tomato_down = this.add.sprite(140, 100, 'tomato');

    this.tomato_anim = this.cache.json.get('tomato_anim');

    this.anims.fromJSON(this.tomato_anim);
    
    this.tomato.anims.play('idle');
    this.tomato_walk.anims.play('walk');
    this.tomato_down.anims.play('down');
}