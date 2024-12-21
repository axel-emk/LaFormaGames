class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        this.load.setPath('./assets/');
        this.registry.set('points', 0);
        this.puntos = 0;

    }

    create() {
        this.registry.events.on('changedata', (parent, key, data) => {
            if(key === 'points') {
                console.log(data);
            }
        });

        this.input.on('pointerdown', () => {
            this.puntos++;
            this.registry.set('points', this.puntos);
        });

        // II - Registro de eventos
        // this.registry.events.on('cambio', (puntos) => {
        //     console.log(puntos);
        // });
        
        // this.registry.events.emit('cambio', 3400);

        // I - prueba datos
        // this.data.set('vidas', 3);
        // this.data.set('monedas', 300);
        // this.data.setValue('monedas', 400);
        // console.log(this.data.get('monedas'));
        // console.log(this.data.getAll());
    }
}
export default Bootloader;