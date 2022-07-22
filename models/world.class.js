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
    playHurtSound = new Audio('audio/hurt.mp3');
    playCoinSound = new Audio('audio/coin.mp3');
    gameWin = new Audio('audio/win.mp3');
    playChampionSound = new Audio('audio/champion.mp3');
    loserSound = new Audio('audio/loser.mp3');
    walking_sound = new Audio('audio/chicken.mp3');



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
        if (this.keyboard.D && this.character.bottels > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);

            //Bottles
            this.character.bottels -= 20;
            this.bottelBar.setPercentage(this.character.bottels);
        }
    }


    /**
     * Collision detection with chicken
     */
    checkCollisions() {
        this.bottleCollision();
        this.enemiesCollisions();
        this.coinCollision();
        this.chickenCollisionsWithBottle();
    }




    /**
     * Collision detection with Chicken and Endboss
     */
    enemiesCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.walking_sound.play();
                this.playHurtSound.play();
                this.statusBar.setPercentage(this.character.energy);
                if (this.character.energy <= 0) {
                    this.soundsWhenPepeIsDead();
                }
            }
        });
    }


    /**
     * Collision detection with Chicken & Endboss
     */
    chickenCollisionsWithBottle() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach(bottle => {
                if (enemy.isColliding(bottle)) {
                    if (enemy instanceof Endboss) {
                        enemy.energy -= 25;
                        this.playHurtSound.play();
                        if (enemy.energy < 0) {
                            this.soundsWhenTheEndbossIsDead();
                        }
                    } else {
                        enemy.energy -= 1;
                        this.playHurtSound.play();
                        if (this.character.energy <= 0) {
                            this.playHurtSound.pause();
                        }
                    }
                }
            });
        });
    }


    soundsWhenTheEndbossIsDead() {
        this.playHurtSound.pause();
        this.walking_sound.pause();
        this.gameWin.play();
        setTimeout(() => {
            this.playChampionSound.play();
        }, 2000);
    }


    soundsWhenPepeIsDead() {
        this.walking_sound.pause();
        this.playHurtSound.pause();
        this.loserSound.play();
        setTimeout(() => {
            this.loserSound.pause();
        }, 3600);
    }


    /**
     * Collision detection with Bottel
     */
    bottleCollision() {
        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isColliding(bottle) && this.character.bottels < 100) {
                this.level.bottle.splice(index, 1);
                this.character.bottels += 20;
                this.playCoinSound.play();
                this.bottelBar.setPercentage(this.character.bottels);
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
                this.character.coins += 20;
                this.playCoinSound.play();
                this.coinBar.setPercentage(this.character.coins);
                // if the Coinbar is full it charge your live energy
                if (this.character.coins == 100) {
                    this.character.energy += 50;
                    this.character.coins -= 100;
                }
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