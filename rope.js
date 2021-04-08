class Rope{
    constructor(bodyA,pointB){
        var options={
            stiffness:1,
            bodyA:bodyA,
            pointB:pointB,
            length:1
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
    }
    display(){
        push();
    stroke("red");
    strokeWeight(5);
     line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
      pop();
    }
}