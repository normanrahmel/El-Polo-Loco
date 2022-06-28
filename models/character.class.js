class Character extends MovableObject {
    x = 120;
    y = 190;
    World;
    width = 130;
    height = 240;
    speed = 10;
    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];


    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.World.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.World.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
        }, 1000 / 60);

        setInterval(() => {

            if (this.World.keyboard.RIGHT || this.World.keyboard.LEFT) {

                //Walk animation
                let i = this.currenImage % this.IMAGES_WALKING.length; // let i = 0 REST 6; i = 0, 1, 2, 3, 4, 5, 0
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currenImage++;
            }
        }, 50);
    }


    moveRight() {

    }


    jump() {

    }

}