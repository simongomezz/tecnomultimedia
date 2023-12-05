class Imagenes {
  constructor () {
    this.load ();
  }

  load () {
    this.imagenes = [];
    for (let i = 0; i < 4; i++) {
      this.imagenes[i] = loadImage ("data/imagen" + i + ".png");
    }
  }
  ganar () {
    image (this.imagenes[2], 0, 0);
  }

  display () {
    image (this.imagenes[0], 0, 0);
  }
}
