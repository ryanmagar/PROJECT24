class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.bodyB=Bodies.rectangle(x,y,width,height,options);
        World.add(world.bodyB);
        this.body1=Bodies.rectangle(x(width/2),y(height/2),height,width);
        World.add(world.body1);
        this.bodyr=Bodies.rectangle(x(width/2),y(height/2),height,width);
        World.add(world.bodyr);
        this.bodyB.width=width;
        this.bodyB.height=height;
    }

    display(){
        fill("white");
        rect(this.bodyB.position.x,this.bodyB.position.y,this.body.width,this.body.height);
        rect(this.bodyB.position.x-(this.bodyB.width/2)),(this.bodyB.height/2);
        rect(this.bodyB.position.x-(this.bodyB.width/2)),(this.bodyB.height/2);
    }
}