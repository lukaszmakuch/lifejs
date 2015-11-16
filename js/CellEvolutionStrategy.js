var GOL = (function (GOL) {
    
    GOL.CellEvolutionStrategy = function()
    {
    };
    
    GOL.CellEvolutionStrategy.prototype.getNextCellInPlaceOf = function(cell, sourceArea)
    {
        var numberOfAliveNeighbors = this.countAliveNeighborsOf(cell, sourceArea);
        if (cell.isAlive()) {
            if (numberOfAliveNeighbors < 2) {
                return new GOL.Cell(false);
            }

            if ((numberOfAliveNeighbors >= 2) && (numberOfAliveNeighbors <= 3)) {
                return new GOL.Cell(true);
            }

            if (numberOfAliveNeighbors > 3) {
                return new GOL.Cell(false);
            }
        } else {
            if (numberOfAliveNeighbors === 3) {
                return new GOL.Cell(true);
            } else {
                return new GOL.Cell(false);
            }
        }
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
