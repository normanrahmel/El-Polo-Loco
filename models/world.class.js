class World {
    /**
     * Global variables for the class
     */
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }


    setWorld() {
        this.character.World = this;
    }


    /**
     * Checks the collision and pulls the caracter live 
     */
    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                }
            });
        }, 200);
    }


    draw() {

        //Deletes the object each time the draw function is called
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); //here i move the whole picture to the left

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0); //here i move the whole picture back to the right
        /**
         * this. is no longer detected in the requestAnimationFrame
         * With requestAnimationFrame the draw method is called as often as the graphics card allows it
         */
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    /**
     * Sets the Objects 
     * The objects are the Background, Clouds, Chicken 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * It summarizes the mo because all are equal
     * mo=movabel obejcts
     */
    addToMap(mo) {
        if (mo.otherDirection) {

            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * (-1);
    }


    flipImageBack(mo) {
        mo.x = mo.x * (-1);
        this.ctx.restore();
    }
}