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
        this.logo = this.add.image(40, this.scale.height / 2, 'logo_gamma');

        let tween = this.tweens.add({
            targets: this.logo,
            // duration: 1000,
            // x:300,
            props: {
                x:{
                    value: 300,
                    duration: 2000
                },
                y: {
                    value: 200,
                    duration: 1000
                }
            },
            repeat: 2,
            yoyo: true,
            ease: 'Power4',
            // delay: 1000,
            // hold: 1000,
            // repeatDelay: 1000,
            // completeDelay: 1000,
            onStart: () => console.log('Inicia'),
            onYoyo: () => console.log('Yoyo'),
            onComplete: () => console.log('Final'),
            onRepeat: () => console.log('Repeat')
        });

        // setTimeout(() => {
        //     tween.pause();
        // }, 2500);

        // setTimeout(() => {
        //     tween.resume();
        // }, 4000);

    }
}
export default Bootloader;