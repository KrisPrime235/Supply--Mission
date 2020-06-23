class Side{
    constructer(x, y, width, height){
        var options = {
            'isStatic': true,
            'friction': 10,
            'restitution': 0.1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = 50;
        this.y = 50;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(0,255,0);
        rect(400,650,200,20);
        rect(500,610,20,100);
        rect(300,610,20,100);
        pop();
    }
}