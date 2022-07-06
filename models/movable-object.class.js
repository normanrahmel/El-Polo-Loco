class MovableObject extends DrawableObject {
    /**
     * Global variables for the class
     */
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
        if (this instanceof ThrowableObject) { //Throwable-Objects should always fall
            return true
        } else {
            return this.y < 180;
        }
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