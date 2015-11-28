define("AreaView", [], function () {
    var AreaView = function (canvas2dContext) {
        this.ctx = canvas2dContext;
    };

    AreaView.prototype.render = function (area) {
        var canvas = this.ctx.canvas;
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        var cellWidth = canvas.width / area.width;
        var cellHeight = canvas.height / area.height;
        var cellRadius = Math.min(cellWidth, cellHeight) / 2;
        area.getAllCells().forEach((function (cell) {
            var coordinates = area.getCoordinatesOf(cell);
            this.ctx.beginPath();
            this.ctx.arc(
                cellWidth * (coordinates.x + 1) - cellWidth / 2, 
                cellHeight * (coordinates.y + 1) - cellHeight / 2, 
                cellRadius, 
                0, 
                Math.PI * 2, 
                false
            );
            if (cell.isAlive()) {
                this.ctx.fill();
            } else {
                this.ctx.stroke();
            }
        }).bind(this));
    };
    
    return AreaView;
});