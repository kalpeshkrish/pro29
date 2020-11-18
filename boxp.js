class Boxp {
    constructor(x, y, width, height){
        var options={
            isStatic:false
          }
          
     this.body = Bodies.rectangle(x,y,30,50,options);
      this.width = 30;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
  
  };
  