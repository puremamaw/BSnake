class GameBoard {

    boardWidth = 800;
    boardHeight = 800;
    cells = [];
    gameContainer = null;
    size = 40;
    snake = null;
    score = 0;
    keyDirection = null;
    cellWidth = 0;
    cellHeight = 0;
    hasMovementDisabled = false;
    food = [];

    foodContainer = [];

    initialize() {
        this.gameContainer = document.querySelector("#game-container");
        this.gameContainer.style.width = `${this.boardWidth}px`;
        this.gameContainer.style.height = `${this.boardHeight}px`;
        this.gameContainer.style.marginLeft = `calc(50% - ${this.boardWidth / 2}px)`;
        this.gameContainer.style.marginTop = `calc(50vh - ${this.boardHeight / 2}px)`;

        this.cellWidth = Math.floor(this.boardWidth / this.size);
        this.cellHeight = Math.floor(this.boardHeight / this.size);

        // for (let y = 0; y < this.size; y++) {
        //     for (let x = 0; x < this.size; x++) {
        //         let newCell = new GameCell(this.cellWidth, this.cellHeight, x, y);
        //         this.appendCell(newCell);

        //         if (!this.cells[x])
        //             this.cells[x] = [];

        //         this.cells[x][y] = newCell;
        //     }
        // }

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
        this.snake = new Snake(this.cellWidth, this.cellHeight);
        this.appendSnake(this.snake);
        this.createFood();
    }

    createFood() {
        this.food = new Food(this.cellWidth, this.cellHeight, this.boardWidth, this.boardHeight);
        this.appendFood(this.food);
    }


    onArrowKeysPressed = (event) => {
        let key = event.keyCode;
        if (key == 37 && this.keyDirection != "RIGHT") {
            this.keyDirection = "LEFT";
            this.snakeMovement();
        } else if (key == 38 && this.keyDirection != "DOWN") {
            this.keyDirection = "UP";
            this.snakeMovement();
        } else if (key == 39 && this.keyDirection != "LEFT") {
            this.keyDirection = "RIGHT";
            this.snakeMovement();
        } else if (key == 40 && this.keyDirection != "UP") {
            this.keyDirection = "DOWN";
            this.snakeMovement();
        }
    }

    snakeMovement = () => {
        if (!this.hasMovementDisabled) {
            if (this.keyDirection == "LEFT")
                this.snake.absoluteX -= 1;
            if (this.keyDirection == "UP")
                this.snake.absoluteY -= 1;
            if (this.keyDirection == "RIGHT")
                this.snake.absoluteX += 1;
            if (this.keyDirection == "DOWN")
                this.snake.absoluteY += 1;

            // console.log("snakeAbsoluteX", this.snake.absoluteX);
            // console.log("foodAbsoluteX", this.food.absoluteX);
            // console.log("snakeAbsoluteY", this.snake.absoluteY);
            // console.log("foodAbsoluteY", this.food.absoluteY);

            this.snake.continueSnake();
            this.appendSnake(this.snake);
            this.foodHasEaten();
            this.gameOver();
        }
    }

    game = setInterval(this.snakeMovement, 1);


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
        if (this.snake.absoluteX == this.food.absoluteX && this.snake.absoluteY == this.food.absoluteY)
            alert("NAKAON NA");
    }
}