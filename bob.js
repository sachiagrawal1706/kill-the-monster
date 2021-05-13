class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius
      this.image=loadImage('images/Superhero-01.png')
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.image,pos.x, pos.y, this.radius, this.radius);
    }
  };