class Portal{
  constructor(){
    this.portal=loadImage("data/portal.gif")
    this.posX= width-90;
    this.posY= height-200;
    this.ancho=100;
    this.alto=200;
  }

  dibujar(){
    image(this.portal,this.posX,this.posY,this.ancho,this.alto);
  }



}
