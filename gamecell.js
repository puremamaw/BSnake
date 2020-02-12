class GameCell {
    width = 0;
    height = 0;
    x = 0;
    y = 0;
    absoluteX = 0;
    absoluteY = 0;
    Element = null;

    constructor(w, h, x, y) {
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.absoluteX = w * x;
        this.absoluteY = h * y;

        let newCell = document.createElement("div");
        newCell.classList.add("cell");

        newCell.style.width = `${this.width}px`;
        newCell.style.height = `${this.height}px`;
        newCell.style.position = "absolute";
        newCell.style.left = `${(this.absoluteX)}px`;
        newCell.style.top = `${(this.absoluteY)}px`;
        newCell.style.textAlign = "center";
        this.Element = newCell;
    }
}