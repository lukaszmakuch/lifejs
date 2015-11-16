var GOL = (function (GOL) {
    
    GOL.AreaEvolutionStrategy = function(cellEvolutionStrategy)
    {
        this.cellEvolutionStrategy = cellEvolutionStrategy;
    };
    
    GOL.AreaEvolutionStrategy.prototype.replaceCellsOfAreaWithNewGeneration = function(area)
    {
        var nextGenerationCells = new Map();
        area.getAllCells().forEach((function (originalCell) {
            nextGenerationCells.set(
                area.getCoordinatesOf(originalCell),
                this.cellEvolutionStrategy.getNextCellInPlaceOf(originalCell, area)
            );
        }).bind(this));
        
        nextGenerationCells.forEach(function (nextGenerationCell, itsPosition) {
            area.addCell(nextGenerationCell, itsPosition);
        });
    };
  
    return GOL;
} (GOL || {}));
