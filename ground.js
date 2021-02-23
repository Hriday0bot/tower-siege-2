class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(450,385,890,15,options);
        World.add(world, this.ground);   
    }
    display(){
        strokeWeight(2);
        fill("black");
        rectMode(CENTER);
        rect (this.ground.position.x, this.ground.position.y,890,15);
    }
}
