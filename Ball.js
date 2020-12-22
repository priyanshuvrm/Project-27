class Ball{
   constructor(x,y,width,height){
    var option = {
    restituition:10 , 
    density:0.5
    
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    World.add(world,this.body)
   }
   display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(pos.x,pos.y,this.width,this.height);
   }
}















