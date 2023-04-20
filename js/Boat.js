 class Boat{
 
    constructor(x,y,w,h,boatPos){
        var boatOptions={
        restitution:0.8,
        friction:1.0,
        density:1.0
        
        }

        this.body=Bodies.rectangle(x,y,w,h,boatOptions);
        World.add(world,this.body);
        
        this.width=w;
        this.height=h;

        this.image=loadImage("./assets/boat.png")
        this.boatPosition=boatPos;
    
    }

    display(){
        var pos=this.body.position;
        push();
        translate (pos.x,pos.y);
        imageMode (CENTER);
        image(this.image,0,this.boatPosition,this.width,this.height);
        pop ();
    }
}





