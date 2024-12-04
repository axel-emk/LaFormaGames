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
                // y:500
            }
        }
    }
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
    this.load.image("bird", "./assets/bird.png");
  }
  
  function create() {
    //console.log(Phaser.Input.Keyboard.KeyCodes); // Muestra los códigos de las teclas en consola
    this.pajaro = this.add.image(100, 50, "bird");

    // Crear las teclas de las flechas
    // this.cursors = this.input.keyboard.createCursorKeys(); // Genera las teclas predefinidas (left, right, up, down)
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

}
  
function update() {
  // if (this.cursors.right.isDown) {
  //     this.pajaro.x++; // Mueve el pájaro hacia la derecha
  // }

  // if (this.cursors.left.isDown) {
  //     this.pajaro.x--; // Mueve el pájaro hacia la izquierda
  // }
  if (this.right.isDown) {
      this.pajaro.x++; // Mueve el pájaro hacia la derecha
  }else if (this.left.isDown) {
      this.pajaro.x--; // Mueve el pájaro hacia la izquierda
  }
}
  