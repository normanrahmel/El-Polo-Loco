class World {
    /**
     * Global variables for the class
     */
    character = new Character();
    level = level1;
    endboss = this.level.enemies.find(e => e instanceof Endboss);
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottelBar = new BottleBar();
    coin = new Coin();
    bottle = new Bottle();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.endboss.World = this;
        this.character.World = this;
    }


    /**
     * Checks the collision and pulls the caracter live 
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }


    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }


    /**
     * Collision detection with chicken
     */
    checkCollisions() {
        this.bottleCollision();
        this.enemiesCollisions();
        this.coinCollision();
        this.endbossCollisionsWithBottle();
        this.chickenCollisionsWithBottle();
    }


    /**
     * Collision detection with Chicken and Endboss
     */
    enemiesCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }


    /**
     * Collision detection with Endboss
     */
    endbossCollisionsWithBottle() {
        this.level.enemies.forEach((bottle) => {
            if (this.endboss.isColliding(bottle)) {
                //this.endboss.hit();
                this.endboss.energy -= 25;
            }
        });
    }


    /**
     * Collision detection with Chicken
     */
    chickenCollisionsWithBottle() {
        this.level.enemies.forEach((bottle) => {
            if (this.enemies.isColliding(bottle)) {
                //this.enemies.hit();
                this.enemies.energy -= 1;
            }
        });
    }


    /**
     * Collision detection with Bottel
     */
    bottleCollision() {
        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottle.splice(index, 1);
                this.character.bottels += 20;
                //this.bottleBar.setPercentage(this.character.bottels);
            }
        })
    }



    /*
     * Collision detection with Coins
     */
    coinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1);
                //this.coinBar.collectCoin();
                this.coinBar.setPercentage(this.coinBar.percentage);
            }
        })
    }


    draw() {

        //Deletes the object each time the draw function is called
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); //here i move the whole picture to the left
        this.addObjectsToMap(this.level.backgroundObjects);

        //Fixed the camera perspective for the status bar
        this.ctx.translate(-this.camera_x, 0); //Back
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottelBar);
        this.ctx.translate(this.camera_x, 0); //Forwards
        this.addToMap(this.character);


        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.throwableObjects);

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