define(["Area", "Coordinates", "AreaEvolutionStrategy", "mediator-js"], function (Area, Coordinates, AreaEvolutionStrategy, Mediator) {
    describe("strategy of processing the whole area", function () {

        it("uses CellEvolutionStrategy to update cells", function () {
            var area = new Area(2, 1);

            var cell1 = {};
            var cell1Pos = new Coordinates(1, 1);
            var cell1Replacement = {};

            var cell2 = {};
            var cell2Pos = new Coordinates(2, 1);
            var cell2Replacement = {};

            area.addCell(cell1, cell1Pos);
            area.addCell(cell2, cell2Pos);

            var cellEvolutionStrategy = {
                getNextCellInPlaceOf: function(cell, area) {
                    if (cell === cell1) { return cell1Replacement; }
                    if (cell === cell2) { return cell2Replacement; }
                }
            };
            
            var mediator = new Mediator();
            spyOn(mediator, "publish");
            
            var evolutionStrategy = new AreaEvolutionStrategy(
                cellEvolutionStrategy,
                mediator
            );

            expect(mediator.publish).not.toHaveBeenCalled();
            evolutionStrategy.replaceCellsOfAreaWithNewGeneration(area);
            expect(mediator.publish).toHaveBeenCalledWith("area.cells.new_generation", area);

            expect(area.getCellWithCoordinates(cell1Pos)).toBe(cell1Replacement);
            expect(area.getCellWithCoordinates(cell2Pos)).toBe(cell2Replacement);
        });

    });
});