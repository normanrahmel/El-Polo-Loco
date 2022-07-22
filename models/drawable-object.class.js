class DrawableObject {
    /**
     * Global variables for the class
     */
    img;
    imageCache = {};
    currenImage = 0;
    x = 120;
    y = 190;
    height = 100;
    width = 100;



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            //ctx.lineWidth = '5';
            //ctx.strokeStyle = 'blue';
            //ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    /**
     * 
     * From the class Character we put an array into the function loadImages with 6. images of Pepe.
     * Then I define a variable img and assign it the object "new Image();".
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png'] 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}