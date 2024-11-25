class Paisaje {
  constructor() {
    this.posX=0;
    this.posY=0;
    this.ancho= width;
    this.alto= height;
    this.cargarImg();
  }

  cargarImg() {
    this.paisaje= loadImage("data/paisaje.png");
  }

  dibujar() {
    image(this.paisaje, this.posX, this.posY, this.ancho, this.alto);
  }
}
