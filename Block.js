class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.8,
          friction: 1,
          density: 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);

    }
    display(){

      var pos = this.body.position;

        if(this.body.speed < 3){

          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height);

        }else{

          World.remove(world, this.body);

        }
    }
}
