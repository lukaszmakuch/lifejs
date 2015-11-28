define("AreaView", ["Coordinates"], function (Coordinates) {
    var AreaView = function (canvas2dContext, area, mediator) {
        this.ctx = canvas2dContext;
        this.canvas = this.ctx.canvas;
        this.area = area;
        this.mediator = mediator;
        this.refresh();
        mediator.subscribe("area.cells.new_generation", (function (area) {
            if (area === this.area) {
                this.refresh();
            }
        }).bind(this));
        canvas2dContext.canvas.addEventListener('click', (function(e) {
            var canvasPos = this.canvas.getBoundingClientRect();
            this.noticeClick(e.clientX - canvasPos.left, e.clientY - canvasPos.top);
        }).bind(this));
    };

    AreaView.prototype.refresh = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.cellWidth = this.canvas.width / this.area.width;
        this.cellHeight = this.canvas.height / this.area.height;
        var cellRadius = Math.min(this.cellWidth, this.cellHeight) / 2;
        this.area.getAllCells().forEach((function (cell) {
            var coordinates = this.area.getCoordinatesOf(cell);
            this.ctx.beginPath();
            this.ctx.arc(
                this.cellWidth * (coordinates.x + 1) - this.cellWidth / 2, 
                this.cellHeight * (coordinates.y + 1) - this.cellHeight / 2, 
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
    
    AreaView.prototype.noticeClick = function (canvasX, canvasY) {
        var cellCordX = Math.floor(canvasX / this.cellWidth);
        var cellCordY = Math.floor(canvasY / this.cellHeight);
        var cell = this.area.getCellWithCoordinates(new Coordinates(cellCordX, cellCordY));
        this.mediator.publish("area.cell.clicked", cell);
        this.refresh();
    };
    
    return AreaView;
});