class Ball{
    constructor(x,y,width,height){
      var space={
          density:0.5,
          frictionAir:0.005
      }
      this.body = Bodies.rectangle(x,y,width,height,space);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS);
      fill("orange");
      stroke("yellow");
      strokeWeight(2);
      ellipse(0,0,this.width, this.height);
      pop();
    }
}