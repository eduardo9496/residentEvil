class Bala {
  constructor(x, y) {

    this.posX= x;
    this.posY= y-65;
    this.ancho=40;
    this.alto=10;
    this.disparada=false;
    this.cargarImag();
  }

  cargarImag() {
    this.bala= loadImage("data/bala.png");
  }

  dibujar() {
    if (this.disparada) {
      image(this.bala, this.posX, this.posY, this.ancho, this.alto);
      this.mover();
    }
  }

  mover() {
    this.posX+=7;
  }

  disparar() {
    this.disparada=true;
  }
}
