class Direction {
    constructor(initDir, initX, initY) {
        this.dir = initDir; // N = 0, E = 1, S = 2, W = 3
        this.x = initX;
        this.y = initY;
        DX = [0, 1, 0, -1];
        DY = [1, 0, -1, 0]
    }

    goRight() {
        if (this.dir === 3) {
            this.dir = 0;
        } else {
            this.dir = this.dir + 1;
        }
    }

    goLeft() {
        if (this.dir === 0) {
            this.dir = 3
        } else {
            this.dir = this.dir - 1;
        }
    }

    move() {
        this.x = this.x + DX[this.dir];
        this.y = this.y + DY[this.dir];
    }
}