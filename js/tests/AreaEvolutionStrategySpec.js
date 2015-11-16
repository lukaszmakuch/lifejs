describe("strategy of processing the whole area", function () {
    
    it("uses CellEvolutionStrategy to update cells", function () {
        var area = new GOL.Area(2, 1);
        
        var cell1 = {};
        var cell1Pos = new GOL.Coordinates(1, 1);
        var cell1Replacement = {};
        
        var cell2 = {};
        var cell2Pos = new GOL.Coordinates(2, 1);
        var cell2Replacement = {};
        
        area.addCell(cell1, cell1Pos);
        area.addCell(cell2, cell2Pos);
        
        var cellEvolutionStrategy = {
            getNextCellInPlaceOf: function(cell, area) {
                if (cell === cell1) { return cell1Replacement; }
                if (cell === cell2) { return cell2Replacement; }
            }
        };
        
        var evolutionStrategy = new GOL.AreaEvolutionStrategy(cellEvolutionStrategy);
        
        evolutionStrategy.replaceCellsOfAreaWithNewGeneration(area);
        
        expect(area.getCellWithCoordinates(cell1Pos)).toBe(cell1Replacement);
        expect(area.getCellWithCoordinates(cell2Pos)).toBe(cell2Replacement);
    });
    
});