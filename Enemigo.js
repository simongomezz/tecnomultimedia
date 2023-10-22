class Enemigo {
  constructor (posx, posy) {
    this.posx = posx;
    this.posy = posy;
    this.tamañox = 15;
    this.tamañoy = 15;
    this.miColor = color (10);
  }

  crearEnemigos () {
  }

  dibujar () {
    fill (this.miColor);
    rect (this.posx, this.posy, this.tamañox, this.tamañoy);
  }

  moverIzquierda() {
  }

  llegaIzquierda () {
  }

  moverDerecha () {
  }

  estaVivo () {
  }
}
