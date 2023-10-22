class Personaje {
  constructor (posx, posy) {
    this.posx = posx;
    this.posy = posy;
    this.tamañox = 20;
    this.tamañoy = 20;
    this.miColor = color (255, 255, 0);
  }

  dibujar () {
    fill (this.miColor);
    rect (this.posx, this.posy, this.tamañox, this.tamañoy)
  }

  teclaPresionada (keyCode) {
    if (keyIsDown (RIGHT_ARROW)) {
      this.moverDerecha ();
    }
    if (keyIsDown (LEFT_ARROW)) {
      this.moverIzquierda ();
    }
    if (keyIsDown (UP_ARROW)) {
      this.moverArriba ();
    }
    if (keyIsDown (DOWN_ARROW)) {
      this.moverAbajo ();
    }
  }

  moverDerecha () {
    this.posx += 3;
    if (this.posx > width - this.tamañox) {
      this.posx =  width - this.tamañox;
    }
  }

  moverIzquierda () {
    this.posx -= 3
      if (this.posx < 0) {
      this.posx = 0;
    }
  }

  moverArriba () {
    this.posy -= 3;
    if (this.posy < 0) {
      this.posy = 0;
    }
  }

  moverAbajo () {
    this.posy += 3;
    if (this.posy > height - this.tamañoy) {
      this.posy = height - this.tamañoy;
    }
  }

  posicionInicial () {
    this.vivo = true;
    this.posx = 50;
    this.posy = 50;
  }

  morir () {
    this.posicionInicial ();
  }

  estaVivo () {
  }
}
