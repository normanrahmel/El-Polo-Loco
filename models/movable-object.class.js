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
    energy = 100;
    lastHit = 0;


    /**
     * Makes the spring function of the objects
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    /**
     * damage to the movable obejcte
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * checks if a movable obejct has no more life 
     * energy = 100
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     *  Date.getTime() Millisekunden since the 1.1.1970 - lastHit;
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
        timePassed = timePassed / 1000; // Difference in seconds
        return timePassed < 1;
    }


    /**
     * 
     * @returns return the height at which an element is located
     */
    isAboveGround() {
        return this.y < 180;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     *  Collision detection
     */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
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
        let i = this.currenImage % images.length; // let i = 0 REST 6; i = 0, 1, 2, 3, 4, 5, 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currenImage++;
    }

    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    jump() {
        this.speedY = 30;
    }
}