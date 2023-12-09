class Botones {
  constructor (posx, posy, tamx, tamy) {
    this.posx = posx;
    this.posy = posy;
    this.tamx = tamx;
    this.tamy = tamy;
    textAlign(CENTER, CENTER);
  }
  dibujarboton (estoy, voy, texto) {
    this.estoy = estoy;
    this.voy = voy;
    this.texto = texto;
    fill (0);
    rect (this.posx, this.posy, this.tamx, this.tamy,20);
    fill (255);
    text (this.texto,  this.posx+this.tamx/2, this.posy + this.tamy/2);
    
  }
  arribaboton (posx, posy, tamx, tamy) {
    return mouseX > this.posx && mouseX < this.posx + this.tamx && mouseY > this.posy && mouseY < this.posy + this.tamy
  }
}
