class GameBoard {

    boardWidth = 800;
    boardHeight = 800;
    cells = [];
    gameContainer = null;
    size = 40;
    snake = null;
    score = 0;
    cellWidth = 0;
    cellHeight = 0;
    hasMovementDisabled = false;
    food = [];
    gameSpeed = 1000;

    gameObjects = [];

    initialize() {
        this.gameContainer = document.querySelector("#game-container");
        this.gameContainer.style.width = `${this.boardWidth}px`;
        this.gameContainer.style.height = `${this.boardHeight}px`;
        this.gameContainer.style.marginLeft = `calc(50% - ${this.boardWidth / 2}px)`;
        this.gameContainer.style.marginTop = `calc(50vh - ${this.boardHeight / 2}px)`;

        this.cellWidth = Math.floor(this.boardWidth / this.size);
        this.cellHeight = Math.floor(this.boardHeight / this.size);

        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                let newCell = new GameCell(this.cellWidth, this.cellHeight, x, y);
                this.appendCell(newCell);

                if (!this.cells[x])
                    this.cells[x] = [];

                this.cells[x][y] = newCell;
                this.gameObjects.push(newCell);
            }
        }

        document.addEventListener("keydown", this.onArrowKeysPressed);
        this.defaultSnakeLocation();
    }

    appendCell(cell) {
        this.gameContainer.appendChild(cell.Element);
    }

    appendSnake(snake) {
        this.gameContainer.appendChild(snake.Element);
    }

    appendFood(food) {
        this.gameContainer.appendChild(food.Element);
    }

    defaultSnakeLocation() {
        this.snake = new Snake(4, 20, this.cellWidth, this.cellHeight);
        this.appendSnake(this.snake);
        this.gameObjects.push(this.snake);
        this.createFood();
    }

    createFood() {
        this.food = new Food(this.cellWidth, this.cellHeight, this.cells.length);
        this.gameObjects.push(this.food);
        this.appendFood(this.food);
    }


    onArrowKeysPressed = (event) => {
        let key = event.keyCode;
        if (key == 37 && this.snake.keyDirection != "RIGHT") {
            this.snake.keyDirection = "LEFT";
            this.updateSnakeMovement();
        } else if (key == 38 && this.snake.keyDirection != "DOWN") {
            this.snake.keyDirection = "UP";
            this.updateSnakeMovement();
        } else if (key == 39 && this.snake.keyDirection != "LEFT") {
            this.snake.keyDirection = "RIGHT";
            this.updateSnakeMovement();
        } else if (key == 40 && this.snake.keyDirection != "UP") {
            this.snake.keyDirection = "DOWN";
            this.updateSnakeMovement();
        }
    }

    updateSnakeMovement = () => {
        if (!this.hasMovementDisabled) {
            if (this.snake.keyDirection == "LEFT") {
                this.snake.x--;
                this.snake.absoluteX -= this.cellWidth;
            }

            if (this.snake.keyDirection == "UP") {
                this.snake.y--;
                this.snake.absoluteY -= this.cellHeight;
            }

            if (this.snake.keyDirection == "RIGHT") {
                this.snake.x++;
                this.snake.absoluteX += this.cellWidth;
            }

            if (this.snake.keyDirection == "DOWN") {
                this.snake.y++;
                this.snake.absoluteY += this.cellHeight;
            }

            this.snake.continueSnake();
            this.snake.updatePosition();
            this.appendSnake(this.snake);
            this.foodHasEaten();
            this.gameOver();
        }
    }

    // update = () => {
    //     this.updateSnakeMovement();
    //     for (let x = 0; x < this.gameObjects.length; x++)
    //         this.gameObjects[x].update();
    // }

    // updateGame = setInterval(this.update, this.gameSpeed);


    gameOver = () => {
        if (this.snake.absoluteX < -8 ||
            this.snake.absoluteY < 0 ||
            this.snake.absoluteX > (this.boardWidth - this.cellWidth) ||
            this.snake.absoluteY > (this.boardHeight - this.cellHeight)) {
            this.deleteSnake();
            this.deleteFood();
            alert("Game Over");
            clearInterval(this.game);
            this.hasMovementDisabled = true;
        }
    }

    deleteFood = () => {
        this.gameContainer.removeChild(this.food.Element);
    }

    deleteSnake = () => {
        this.gameContainer.removeChild(this.snake.Element);
    }

    foodHasEaten = () => {
        if (this.snake.absoluteX == this.food.absoluteX && this.snake.absoluteY == this.food.absoluteY) {
            this.deleteFood();
            this.createFood();
            this.snake.foodHasEaten();
        }
    }
}