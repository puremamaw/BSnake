class Cell {
    position = Vector2D.Zero;
    dimension = Vector2D.Zero;
    color = "gray";

    constructor(x, y, w, h) {
        this.position.x = x;
        this.position.y = y;
        this.dimension.width = w;
        this.dimension.height = h;
    }
}