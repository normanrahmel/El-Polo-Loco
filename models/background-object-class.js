class backgroundObjects extends MovableObject {

    width = 720;
    height = 480;

    /**
     * 
     * 
     * @param {*} imagePath - loads Background Images with Path
     * @param {*} x - get x Coordinates from Movable-Object.class.js
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0;
    }
}