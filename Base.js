class Base {
    constructor(x,y,width,height,angle){
        var ground_options ={
            restitution:1.0
        }
    
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.width=width;
        this.height=height;
        this.image=loadImage("angrybirdimages/base.png")
        World.add(world,this.body);
    
    }
    
  Basedisplay(){
       push ()
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       imageMode(CENTER)
       fill('white')
      stroke ('red')
       image(this.image,0,0,this.width,this.height);
    pop ()
} 
}
