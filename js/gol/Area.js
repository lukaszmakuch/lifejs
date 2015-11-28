define("Area", ["Coordinates"], function (Coordinates) {
    var Area = function(width, height)
    {
        this.width = width;
        this.height = height;
        this.cellsByCoordinates = new Map();
        this.coordinatesByCells = new Map();
        this.relativeNeighborLocation = [
            [-1, -1], [0, -1], [1, -1],
            [-1, 0], [1, 0],
            [-1, 1], [0, 1], [1, 1]
        ];
    };
    
    Area.prototype.addCell = function(cell, coordinates)
    {
        this.cellsByCoordinates.set(coordinates.getHash(), cell);
        this.coordinatesByCells.set(cell, coordinates);
    };
    
    Area.prototype.getCellWithCoordinates = function(coordinates)
    {
        return this.cellsByCoordinates.get(coordinates.getHash());
    };

    Area.prototype.getAllCells = function()
    {
        var cells = [];
        this.cellsByCoordinates.forEach(function (cell) { cells.push(cell); });
        return cells;
    };

    Area.prototype.getCoordinatesOf = function (cell)
    {
        return this.coordinatesByCells.get(cell);
    };
    
    Area.prototype.getNeighborsOf = function(cell)
    {
        var neighbors = [];
        var cellCoordinates = this.getCoordinatesOf(cell);
        var cellX = cellCoordinates.x;
        var cellY = cellCoordinates.y;
        this.relativeNeighborLocation.forEach((function (neighborLocation) {
            var singleNeighbor = this.getCellWithCoordinates(new Coordinates(
                cellX + neighborLocation[0], 
                cellY + neighborLocation[1]
            ));
            if (undefined !== singleNeighbor) {
                neighbors.push(singleNeighbor);
            }
        }).bind(this));
        
        return neighbors;
    };    
    
    return Area;
});

