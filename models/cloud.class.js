class Cloud extends MovableObject {
    height = 300;
    y = 10;
    width = 350;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500; // Number between 200 and 700   

        this.animate();
    }

    animate() {
        this.moveLeft();
    }

}