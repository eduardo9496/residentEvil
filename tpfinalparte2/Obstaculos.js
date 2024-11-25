class Obstaculo {
  constructor() {
    this.cargarImag();
    this.posX= 100;
    this.posY= 340;
    this.posX2= 280;
    this.posX3= 460;
    this.ancho= 80;
    this.alto=  140;
    this.estoyArriba=false;
  }

  cargarImag() {
    this.obstaculo1= loadImage("data/obstaculo1.png");
    this.obstaculo2= loadImage("data/obstaculo2.png");
  }

  dibujar() {
    if (this.estoyArriba) {
      image(this.obstaculo2, this.posX, this.posY, this.ancho, this.alto);
      image(this.obstaculo2, this.posX2, this.posY, this.ancho, this.alto);
      image(this.obstaculo2, this.posX3, this.posY, this.ancho, this.alto);
    } else {
      image(this.obstaculo1, this.posX, this.posY, this.ancho, this.alto);
      image(this.obstaculo1, this.posX2, this.posY, this.ancho, this.alto);
      image(this.obstaculo1, this.posX3, this.posY, this.ancho, this.alto);
    }
  }
}
