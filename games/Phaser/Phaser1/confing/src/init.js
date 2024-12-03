const config = {
    type: Phaser.AUTO, // Usa WebGL o Canvas según disponibilidad
    width: 800,
    height: 600,
    parent: "container",
    scene: {
      preload: preload,
      create: create,
      update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y:500
            }
        }
    }
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
   this.load.image('pajaro', './assets/bird.png'); // Cargar recursos
   console.log("Soy Preload");
  }
  
  function create() {
    this.pajaro = this.physics.add.image(80, 100, 'pajaro'); // Crear variable de imagen con fisica
    this.pajaro.setScale(2);
    this.pajaro.flipX = true;
    this.pajaro.setOrigin(0.5); // Origen de la imagen
    // Fisicas
    this.pajaro.setCollideWorldBounds(true); // encierra el elemento en el contenedor
    this.pajaro.setBounce(0.3); //agregar rebote
    this.pajaro.setVelocity(50,0); //Velocidad
    //this.pajaro.setAcceleration(50,0); //Aceleracion

    // this.pajaro = this.add.image(80, 100, 'pajaro'); // Crear variable de imagen
    // this.add.image(50, 100, 'pajaro'); // Agregar imagen
    // console.log(this.pajaro);
  }
  
  function update(time, delta) {
    // this.pajaro.y++; // Agregar moviento en eje y
    // this.pajaro.x++; // Agregar moviento en eje x
    // this.pajaro.angle++;
    // console.log(delta);
  }
  