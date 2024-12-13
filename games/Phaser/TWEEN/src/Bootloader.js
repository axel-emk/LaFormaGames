class Bootloader extends Phaser.Scene {
    constructor() {
        super({ key: "Bootloader" });
    }

    preload() {
        // Asegúrate de cargar la fuente personalizada antes de usarla
        this.load.script(
            'webfont',
            'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
        );
    }
  

    create() {
        // Configura las fuentes de Google y personalizadas
        WebFont.load({
            custom: {
                families: ['pruebas'], // Nombre definido en @font-face
                urls: ['./assets/font/IndieFlower.ttf'], // Ruta a tu archivo de fuente
            },
            active: () => {
                // Una vez cargada la fuente, crea el texto
                const configText = {
                    x: 100,
                    y: 100, 
                    text: 'Hola CTM!!!!!\ncomo estas?',
                    style: {
                        fontFamily: 'pruebas',
                        backgroundColor: '#ff0000',
                        fontSize: 40,
                        align: 'center'
                    }
                };
                const texto = this.make.text(configText);
                texto.setBackgroundColor('#ff00ff');
                this.add.text(10, 10, 'Soy un puto texto!', { fontFamily: 'pruebas'});
            }
        });
    }
}

export default Bootloader;
