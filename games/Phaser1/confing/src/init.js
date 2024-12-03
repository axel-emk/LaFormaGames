const config = {
    type: Phaser.AUTO, // Usa WebGL o Canvas según disponibilidad
    width: 800,
    height: 600,
    parent: "container",
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
   // this.load.image('background', 'path/to/background.png'); // Cargar recursos
   console.log("Soy Preload");
  }
  
  function create() {
    //this.add.image(400, 300, 'background'); // Agregar imagen
    console.log("Soy create");
  }
  
  function update(time, delta) {
    // Actualizar lógica del juego
    // console.log(delta);
  }
  