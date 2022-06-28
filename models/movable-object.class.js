class MovableObject {
    x = 120;
    y = 190;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currenImage = 0;
    speed = 0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
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


    moveRight() {
        console.log('Move right')
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }

}