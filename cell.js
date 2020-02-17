class Cell {
    position = Vector2D.Zero;
    dimension = Vector2D.Zero;
    color = "gray";
    absoluteX = 0;
    absoluteY = 0;

    constructor(x, y, w, h) {
        this.position.x = x;
        this.position.y = y;
        this.dimension.width = w;
        this.dimension.height = h;

        let cell = [];

        cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${this.position.width}px`;
        cell.style.height = `${this.position.height}px`;
        cell.style.backgroundColor = "black";
        cell.style.position = "absolute";

    }
}