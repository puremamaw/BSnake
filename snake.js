class Snake {

    width = 0;
    height = 0;
    x = 4;
    y = 20;
    absoluteX = 0;
    absoluteY = 0;
    Element = null;

    constructor(w, h) {

        this.width = w;
        this.height = h;
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

        snake[0] = {
            x: this.absoluteX,
            y: this.absoluteY
        };

        this.Element = snake;
    }

    continueSnake = () => {

        this.Element.style.left = `${this.absoluteX}px`;
        this.Element.style.top = `${this.absoluteY}px`;

        this.Element[0] = {
            x: this.absoluteX,
            y: this.absoluteY
        };
    }
}