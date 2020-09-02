const Engine = Matter.Engine;
// to put the physics
const World= Matter.World;
// to make a world
const Bodies = Matter.Bodies;
// the items in the world
var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    //to create an engine
    world = engine.world;
    //tp create the world

    var ground_options ={
        isStatic: true
        //to make it not fall
    }
    
    var ball_options = {
        restitution: 1.0
        // to make it bounce
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options); //to add the static
    World.add(world,ground);
    // to add the ground to the world
    ball = Bodies.circle(200,100,20,ball_options);//to add the bounce
    World.add(world,ball);
    //to add the ball to the world
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    //to update the engine every frame
    ellipseMode(RADIUS);
    //to put the the circle to  the middle of its x/y
    ellipse(ball.position.x,ball.position.y, 20, 20);
    //to make a circle with the balls x and y
    rectMode(CENTER);
    //to make the rectangle to the middle of its x/y
    rect(ground.position.x,ground.position.y,400,20);
    // to make a rect to follow th egrounds x and y   
}