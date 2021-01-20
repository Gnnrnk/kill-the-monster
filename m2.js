class Monster1{
    constructor(x,y,width,height){
    var options={
        'restitution':0.1,
        'friction':1.0,
        'density':20
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/m2.jpg")
        World.add(world,this.body)
        

    }
    display(){
      //  console.log(this.body)
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("blue");
        //fill("red");
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}