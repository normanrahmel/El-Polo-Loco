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
    speedY = 0;
    acceleration = 2.5;

    /**
     * Makes the spring function of the objects
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * 
     * @returns return the height at which an element is located
     */
    isAboveGround() {
        return this.y < 180;
    }


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

    playAnimation(images) {
        let i = this.currenImage % this.IMAGES_WALKING.length; // let i = 0 REST 6; i = 0, 1, 2, 3, 4, 5, 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currenImage++;
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