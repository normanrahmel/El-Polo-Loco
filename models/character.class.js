class Character extends MovableObject {
    x = 120;
    y = 215;
    World;
    width = 150;
    height = 205;
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

            if (this.World.Keyboard.RIGHT) {

                let i = this.currenImage % this.IMAGES_WALKING.length; // let i = 0 REST 6; i = 0, 1, 2, 3, 4, 5, 0
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currenImage++;
            }
        }, 100);
    }


    moveRight() {

    }


    jump() {

    }

}