class Bob {

    constructor(x,y,color){

        var options  = {

       restitution: 1,
       friction: 0  ,
       frictionAir: 0.0,
       slop: 1,
       inertia: Infinity 

        };

        this.body = bodies.rectangle(x, y, 40, 40, options);
        this.x = x;
        this.y =y;
        this.color = color;
        world.add (world, this .body);
        
    }

    display() {

    var angle = this.body.angle;
    var pos = this.body.positiuon;
    Push();
        Translate(pos.x, pos.y);
        Rotate(angle);
        noStroke();
        Fill(this.color);
        ellips(0,0,60,60);
        Pop();
    }
}