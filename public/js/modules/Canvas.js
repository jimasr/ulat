const snakeHead = new Image();
const snakeBody = new Image();
const snakeTail = new Image();
const foodImage = new Image();

const path = 'img/';
snakeHead.src = path + 'head.png';
snakeBody.src = path + 'body.png';
snakeTail.src = path + 'tail.png';
foodImage.src = path + 'food.png';

class Canvas {
    constructor(canvas, cellSize) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d');
        this.cellSize = cellSize;
    }

    setSize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    setColor(color) {
        this.color = color;
    }

    setCellSize(size) {
        this.cellSize = size;
    }

    draw(food, snake) {
        this.clearCanvas();
        this.drawFood(food);
        this.drawSnake(snake);    
    }
    
    drawSnake(snake) {
        this.ctx.drawImage(
            snakeHead, 
            snake.head[0] * this.cellSize, 
            snake.head[1] * this.cellSize, 
            this.cellSize, 
            10);

        for(const s of snake.body) {
            this.ctx.drawImage(
                snakeBody, 
                s[0] * this.cellSize, 
                s[1] * this.cellSize, 
                this.cellSize, 
                10);
        }

        this.ctx.drawImage(
            snakeTail, 
            snake.tail[0] * this.cellSize, 
            snake.tail[1] * this.cellSize, 
            this.cellSize, 
            10); 

    }
    
    drawFood(food) {
        this.ctx.drawImage(
            foodImage, 
            food.x * this.cellSize, 
            food.y * this.cellSize, 
            15, 
            15); 
    }
    
    clearCanvas() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    gameOver() {
        this.clearCanvas();
        this.ctx.font = "bold 80px Chalkduster, fantasy";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Game", this.canvas.width/2, this.canvas.height/2 - 50);
        this.ctx.fillText("Over!", this.canvas.width/2, this.canvas.height/2 + 60);

    }

    newHighscore() {
        this.clearCanvas();
        this.ctx.font = "bold 80px Chalkduster, fantasy";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.fillText("New", this.canvas.width/2, this.canvas.height/2 - 50);
        this.ctx.fillText("Highscore!", this.canvas.width/2, this.canvas.height/2 + 60);
    }
    
}

export { Canvas }