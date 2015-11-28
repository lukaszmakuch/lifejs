define("AreaEvolutionStrategy", function () {
    var AreaEvolutionStrategy = function(cellEvolutionStrategy, mediator)
    {
        this.cellEvolutionStrategy = cellEvolutionStrategy;
        this.mediator = mediator;
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
        
        this.mediator.publish("area.cells.new_generation", area);
    };
  
    return AreaEvolutionStrategy;
});