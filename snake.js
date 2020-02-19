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
    keyDirection = "RIGHT";
    snakeHead = null;

    constructor(x, y, w, h) {

        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.absoluteX = w * this.x;
        this.absoluteY = h * this.y;

        this.snakeHead = new SnakeCell(this.x, this.y, this.width, this.height);

        this.snakeHead.cellSnake();

        this.body.push(this.snakeHead);

        this.Element = this.snakeHead.Element;
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

        console.log("snake after eaten", this.body);

    }

    updatePosition = () => {

        this.Element.style.left = `${this.absoluteX}px`;
        this.Element.style.top = `${this.absoluteY}px`;

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
}