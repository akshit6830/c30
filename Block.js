class Block{
  constructor(x, y, width, height ) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.org_x = x;
      this.org_y = y;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.img = loadImage('block.png');
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    reset(){
      // World.remove(world , this.body);
      this.Visiblity = 255 ;
      this.body.position = {x : this.org_x , y : this.org_y}
      World.add(world, this.body);

    }
    display(){
      var pos= this.body.position;
      // console.log(this.body.speed);
      if (this.body.speed < 3){
        imageMode(CENTER);
        image(this.img , pos.x,pos.y,this.width, this.height);
      }
      else {
        World.remove(world ,this.body);
        push()
  
        tint(255,this.Visiblity);
        this.Visiblity -= 5 ;
        image(this.img , pos.x,pos.y , 30,40);
        
        pop();
      }
    }
  
  };