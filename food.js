class Food {

    width = 0;
    height = 0;
    absoluteX = 0;
    absoluteY = 0;
    boardWidth = 0;
    boardHeight = 0;
    x = 0;
    y = 0;
    Element = null;

    constructor(w, h, bw, bh) {
        this.width = w;
        this.height = h;
        this.boardWidth = bw;
        this.boardHeight = bh;
        this.absoluteX = (Math.floor(Math.random() * ((this.boardWidth - this.width) - 0) + 0));
        this.absoluteY = (Math.floor(Math.random() * ((this.boardHeight - this.height) - 0) + 0));

        let food = []

        food = document.createElement("div");
        food.classList.add("food");
        food.style.width = `${this.width}px`;
        food.style.height = `${this.height}px`;
        food.style.backgroundColor = "red";
        food.style.position = "absolute";
        food.style.left = `${this.absoluteX}px`;
        food.style.top = `${this.absoluteY}px`;

        this.Element = food;
    }
}