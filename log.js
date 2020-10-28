class log extends base{

    constructor(x,y,height, angle){
        super(x,y,20,height,angle);

    this.options = {
        restitution: .8,
        density: 1.2,
        friction: 1
     }
     
     Matter.Body.setAngle(this.Object, angle);

     this.img = ("sprites/wood2.png");

    }



} 