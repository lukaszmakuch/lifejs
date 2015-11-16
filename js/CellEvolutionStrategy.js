var GOL = (function (GOL) {
    
    GOL.CellEvolutionStrategy = function() {};
    
    GOL.CellEvolutionStrategy.prototype.getNextCellInPlaceOf = function(cell, sourceArea)
    {
        var numberOfAliveNeighbors = this.countAliveNeighborsOf(cell, sourceArea);
        var nextCellIsAlive = (
            (cell.isAlive() && (numberOfAliveNeighbors >= 2) && (numberOfAliveNeighbors <= 3))
            || (!cell.isAlive() && (numberOfAliveNeighbors === 3))
        );
        return new GOL.Cell(nextCellIsAlive);
    };
    
    GOL.CellEvolutionStrategy.prototype.countAliveNeighborsOf = function(cell, sourceArea)
    {
        var aliveNeighborsCounter = 0;
        sourceArea.getNeighborsOf(cell).forEach(function (neighbor) {
            aliveNeighborsCounter += neighbor.isAlive() ? 1 : 0;
        });
        return aliveNeighborsCounter;
    };
  
    return GOL;
} (GOL || {}));
