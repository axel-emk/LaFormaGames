class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';

        this.load.image('logo_gamma', 'logo_gamma.png');
        this.load.audio('sonido', 'sandwich.mp3');

        this.load.on('filecomplete', (key, type, data) => {
            console.log(`Archivo cargado: ${key}, tipo: ${type}`);
        });
        
        this.load.on('loaderror', (file) => {
            console.error(`Error cargando archivo: ${file.src}`);
        });
        
    }

    create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'logo_gamma');
    
        let audio = this.sound.add('sonido', { loop: false });
        
        this.sound.pauseOnBlur = false;

        
        // Prueba reproducir directamente al cargar la escena
        // audio.play();
    
        this.input.keyboard.on('keydown', (event) => {
            if (event.code === 'ArrowRight') {
                console.log('Tecla RIGHT presionada');
                audio.play();
            } if (event.code === 'ArrowUp') {
                console.log('Tecla Up presionada');
                // audio.rate += 0.1;
                // audio.detune -= 100;
                // audio.mute = true;
                // audio.volume -= 0.1;
                // audio.seek -= 4;
                this.tweens.add({
                    targets: audio,
                    volume: 0,
                    ease: 'Power1',
                    duration:2000
                });
            } if (event.code === 'ArrowDown') {
                console.log('Tecla Down presionada');
                // audio.rate = 1;
                // audio.detune = 1;
                // audio.mute = false;
                audio.volume = 1;
            } else if (event.code === 'ArrowLeft') {
                console.log('Tecla LEFT presionada');
                audio.stop();
            }
        });
        
    }
    
}
export default Bootloader;