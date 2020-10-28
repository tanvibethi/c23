class Box extends base{

    constructor(x,y,w,h){
        super(x, y, w, h);
        this.options = {
            restitution: 0.8
        }
        this.img = loadImage("sprites/wood1.png");
    }




} 