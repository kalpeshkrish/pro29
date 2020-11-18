class poly{

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.image=loadImage("polygon.jpg");

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.image);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.image.position;
       
       image(this.image,0,0, this.width, this.height);

    }
}