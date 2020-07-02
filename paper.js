class Paper extends BaseClass{
    constructor(x, y) {
      super(x,y,70,70);
      this.image = loadImage("sprites/paper.png");
    }    

    display(){
      super.display();
    }
    fly() {
      this.chain.bodyA=null;
   }
}