class Coin extends MovableObject {

    collected = false;
    height = 50;
    width = 50;
    x = 5;
    y = -400;
    IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];


    constructor(x, y) {
        super().loadImage('img/8_coin/coin_2.png');
        this.loadImages(this.IMAGES);
        this.x = Math.random() * 2500;
        this.y = Math.random() * 400;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 100);
    }
}