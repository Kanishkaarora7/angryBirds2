class Bird extends Base {
    constructor(x,y){
       
    
       super(x,y,40,40)
       
        this.image=loadImage("angrybirdimages/bird.png")
       
    
    }
    
   display(){
       this.body.position.x=mouseX
       this.body.position.y=mouseY
      super.Basedisplay()
} 
}