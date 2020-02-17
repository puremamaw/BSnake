class Snake {

    width = 0;
    height = 0;
    x = 0;
    y = 0;
    absoluteX = 0;
    absoluteY = 0;
    Element = null;
    body = [];
    newHead = null;
    keyDirection = null;
    snakeHead = null;

    constructor(x, y, w, h) {

        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.absoluteX = w * this.x;
        this.absoluteY = h * this.y;

        let snake = []

        snake = document.createElement("div");
        snake.classList.add("snake");
        snake.style.width = `${this.width}px`;
        snake.style.height = `${this.height}px`;
        snake.style.left = `${this.absoluteX}px`;
        snake.style.top = `${this.absoluteY}px`;
        snake.style.backgroundColor = "black";
        snake.style.position = "absolute";

        snake[0] = new SnakeCell(this.x, this.y, this.width, this.height);

        this.snakeHead = snake[0];

        this.body.push(snake[0]);
        this.Element = snake;
    }

    continueSnake = () => {

        this.Element.style.left = `${this.absoluteX}px`;
        this.Element.style.top = `${this.absoluteY}px`;

        this.Element[0] = {
            x: this.x,
            y: this.y
        };

    }


    get head() {
        return this.body[0];
    }


    get tail() {
        return this.body[this.body.length - 1];
    }

    foodHasEaten = () => {
        let currentX = this.x;
        let currentY = this.y;

        if (this.keyDirection == "DOWN")
            currentY++;
        if (this.keyDirection == "UP")
            currentY--;
        if (this.direction == "RIGHT")
            currentX++;
        if (this.direction == "LEFT")
            currentX--;

        let newCell = new SnakeCell(currentX, currentY, this.width, this.height);

        this.body.push(newCell);

        console.log("snakebodyX", currentX);
        console.log("snakebodyY", currentY);
        console.log("after", this.body);

    }

    updatePosition = () => {

        let lastPosition = new Vector2D();
        lastPosition.x = this.head.position.x;
        lastPosition.y = this.head.position.y;


        switch (this.keyDirection) {
            case "UP":
                this.head.position.y--;
                break;
            case "DOWN":
                this.head.position.y++;
                break;
            case "LEFT":
                this.head.position.x--;
                break;
            case "RIGHT":
                this.head.position.x++;
                break;
        }

        for (let x = 1; x < this.body.length; x++) {
            let tempPosition = new Vector2D();
            tempPosition.x = this.body[x].position.x;
            tempPosition.y = this.body[x].position.y;
            this.body[x].position.x = lastPosition.x;
            this.body[x].position.y = lastPosition.y;
            lastPosition = tempPosition;
        }
    }

    update = () => {
        this.updatePosition();
        for (let x = 0; x < this.body.length; x++) {
            this.body[x].update();
        }
    }
}