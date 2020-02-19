class Cell {
    position = Vector2D.Zero;
    dimension = Vector2D.Zero;
    absoluteX = 0;
    absoluteY = 0;
    Element = null;

    constructor(x, y, w, h) {
        this.position.x = x;
        this.position.y = y;
        this.dimension.width = w;
        this.dimension.height = h;
        this.absoluteX = x * w;
        this.absoluteY = y * h;

        let cell = [];

        cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${this.dimension.width}px`;
        cell.style.height = `${this.dimension.height}px`;
        cell.style.left = `${this.absoluteX}px`;
        cell.style.top = `${this.absoluteY}px`;
        cell.style.backgroundColor = "gray";
        cell.style.border = "1px solid black";
        cell.style.position = "absolute";

        this.Element = cell;
    }

    cellSnake() {
        this.Element.style.backgroundColor = "black";
    }
}