
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


 var backroundimg;
 var ground;
 var monster;
function preload() {
//preload the images here
backgroundimg = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(5,780,2500,5);
  monster = new Monster(650,700,50,100);
  monster1 = new Monster(650,600,50,100);
  hero = new Hero(150,500,150,50);
  rope = new Rope(hero.body,{x:148,y:498})
  monster2 = new Monster(650,500,50,100)
  monster3 = new Monster(650,400,50,100)
  monster4 = new Monster1(700,700,50,100)
  monster5 = new Monster1(700,600,50,100)
  monster6 = new Monster1(700,500,50,100);
  monster7 = new Monster1(700,400,50,100);
  monster8 = new Monster(650,300,50,100)
  monster9 = new Monster(650,200,50,100)
  monster10 = new Monster(650,100,50,100)
  monster11 = new Monster1(700,100,50,100);
  monster12 = new Monster1(700,300,50,100);
  monster13 = new Monster1(700,200,50,100)
  monster14 = new Monster2(900,400,200,400)
  monster15 = new Monster2(900,200,200,400)



}

function draw() {
  background(backgroundimg);
  Engine.update(engine);
  ground.display();
  monster.display();
  monster1.display();
  hero.display();
  rope.display();
  monster2.display();
  monster3.display();
  monster4.display();
  monster5.display();
  monster6.display();
  monster7.display();
  monster8.display();
  monster9.display();
  monster10.display();
  monster11.display();
  monster12.display();
  monster13.display();
  monster14.display();
  monster15.display();
}
function mouseDragged(){
  // if (gameState!=="launched"){
   Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  // }
}
function mouseReleased(){
  rope.fly();

}
function keyPressed(){
  if(keyCode === 32){
  ;
     rope.attach(hero.body);
     Matter.Body.setPosition(hero.body, {x: 200, y:50 });
     
  }
}


