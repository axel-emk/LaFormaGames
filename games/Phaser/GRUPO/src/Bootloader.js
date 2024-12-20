class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        this.load.setPath('./assets/');
        this.load.animation('monedaData', 'monedas_anim.json');
        this.load.atlas('monedas', 'monedas.png', 'monedas_atlas.json');
    }

    create() {
        // let moneda = this.add.sprite(150, 150, 'monedas');
        
        // let grupo = this.add.group({
        // let grupo = this.physics.add.staticGroup({
        let grupo = this.physics.add.group({
            key:'monedas',
            repeat: 5,
            setXY: {
                x: 150,
                y: 150,
                stepX: 50
            }

        });
        // grupo.add(moneda);
        // grupo.create(50, 150, 'monedas');
        let imagen = this.add.sprite(90, 150, 'monedas');
        grupo.add(imagen);
        
        grupo.playAnimation('moneda');
        console.log(grupo);
        // grupo.getChildren().map
        grupo.children.iterate((x) => {
            x.setScale(2);
            x.body.setAllowGravity(false);
        });

        // Phaser.Actions.ScaleXY(grupo.getChildren(), 2, 2);
        this.tweens.add({
            targets: grupo.getChildren(),
            y: 100,
            duration: 600,
            ease: 'Power1',
            repeat: -1,
            yoyo: true
        });
    }
}
export default Bootloader;