class Enemigo {
  constructor(x, y) {
    this.posX=x;
    this.posY=y;
    this.ancho=80;
    this.alto=80;
    this.cargarImg();
    this.vida=true;
  }


  cargarImg() {
    this.enemigo1= loadImage("data/enemigo.png")
  }

  dibujar() {
    if (this.vida) {
      this.mover();
      image(this.enemigo1, this.posX, this.posY, this.ancho, this.ancho);
    }
  }

  mover() {
    this.posX-=1;
  }

  murio() {
    this.vida=false;
  }

  colicionoBala(bala) {
    if (dist(this.posX, this.posY+30, bala.posX, bala.posY) < 40) {
      this.murio();
    }
  }
}
