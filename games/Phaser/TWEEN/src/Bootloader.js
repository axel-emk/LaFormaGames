class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.image('logo_gamma', 'logo_gamma.png');

        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }
    create() {
        this.logo = this.add.image(60, 60, 'logo_gamma');
    
        // Tween 1: Mover a la derecha
        this.tweens.add({
            targets: this.logo,
            x: 400,
            duration: 1000,
            ease: 'Power2',
            onComplete: () => {
                // Tween 2: Mover hacia abajo
                this.tweens.add({
                    targets: this.logo,
                    y: 300,
                    duration: 1000,
                    ease: 'Power2',
                    onComplete: () => {
                        // Tween 3: Mover hacia la izquierda
                        this.tweens.add({
                            targets: this.logo,
                            x: 60,
                            duration: 1000,
                            ease: 'Power2',
                            onComplete: () => {
                                // Tween 4: Mover hacia arriba
                                this.tweens.add({
                                    targets: this.logo,
                                    y: 60,
                                    duration: 1000,
                                    ease: 'Power2'
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    
}
export default Bootloader;