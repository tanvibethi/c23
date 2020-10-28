class pig extends base{

    constructor(x,y){
        super(x, y, 50, 50);
        this.options = {
            restitution: 0.8
        }
        this.img = loadImage("sprites/enemy.png");

    }
    

} 