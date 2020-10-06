class Dustbin {
    constructor(x,y,height,angle){

      var options = {
      isStatic:true 

      }
      this.body=Bodies.rectangle(x,y,20,height,options);
      this.width = 20;
      this.height = height;



       Matter.Body.setAngle(this.body, angle);
      World.add(world,this.body)
    

    }
display (){
  var pos = this.body.position;
  var angle = this.body.angle;
  push ();
  translate(pos.x,pos.y);
  rotate (angle);
  
  rectMode(CENTER)
  strokeWeight (4);
  stroke ("green")
fill ("green");
rect(this.body.position.x,this.body.position.y,this.width,this.height);
pop ();

}
 

  }
      






  
  
  