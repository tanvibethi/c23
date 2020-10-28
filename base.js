class base{

    constructor(x, y, w, h, angle){

    this.options = 
    {
        //isStatic: true
     }
   
     this.Object = BODIES.rectangle(x, y, w, h, this.options); //creating engine object
     WORLD.add(worldAB, this.Object);
     
     this.w = w;
     this.h = h;

     this.img = loadImage("sprites/base.png");

     Matter.Body.setAngle(this.Object, angle);

   
    }


    display(){

        var pos = this.Object.position;
        var angle = this.Object.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        fill("red");
        imageMode(CENTER);
        image(this.img, 0, 0, this.w, this.h);
        pop();

    }




} 