class bird extends base {
    constructor(x, y){
        super(x, y, 50, 50);
        this.img = loadImage("sprites/bird.png");
    }

    display(){
        this.Object.position.x = mouseX;
        this.Object.position.y = mouseY;

        super.display()
    }
}