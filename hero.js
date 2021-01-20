class Hero{
    constructor(x,y,r){
        var options ={
            frictionAir:0.001,
            density : 1
        };

        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("images/Superhero-01.png");
        this.body  = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        push();

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop();
        

    }
}