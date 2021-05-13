class Block {
    constructor(x,y) {
      var options = {
          isStatic: false,restitution:0.2
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      
      this.visibility=255
    }

    display(){
      var pos =this.body.position;
      
      push ()
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      rectMode(CENTER);

      rect(0,0, this.width, this.height);
      pop()
    
    
    }
  };