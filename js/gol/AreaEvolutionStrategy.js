define("AreaEvolutionStrategy", function () {
    var AreaEvolutionStrategy = function(cellEvolutionStrategy)
    {
        this.cellEvolutionStrategy = cellEvolutionStrategy;
    };
    
    AreaEvolutionStrategy.prototype.replaceCellsOfAreaWithNewGeneration = function(area)
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
  
    return AreaEvolutionStrategy;
});