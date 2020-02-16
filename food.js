class Food {

    width = 0;
    height = 0;
    absoluteX = 0;
    absoluteY = 0;
    boardWidth = 0;
    boardHeight = 0;
    cellLength = 0;
    x = 0;
    y = 0;
    Element = null;

    constructor(w, h, cl) {
        this.width = w;
        this.height = h;
        this.cellLength = cl;
        this.absoluteX = this.width * Math.floor(Math.random() * ((this.cellLength - 0) + 0));
        this.absoluteY = this.height * Math.floor(Math.random() * ((this.cellLength - 0) + 0));

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