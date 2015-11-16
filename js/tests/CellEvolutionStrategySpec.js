describe("Getting new state of cell that comes from some area", function () {

    var cellEvolutionStrategy = new GOL.CellEvolutionStrategy();

    var fakeAreaFactory = {
        getAreaThatClaimsSomeNeighbors: function (servedCell, returnedNeighbors) {
            return {
                getNeighborsOf: function(cell) {
                    return (cell === servedCell) ? returnedNeighbors : [];
                }
            };
        }
    };
    
    var expectStrategyBehavior = function (
        givenCellIsAlive,
        numberOfAliveNeighbors,
        numberOfDeadNeighbors,
        shouldNewCellBeAlive
    ) {
        var cell = new GOL.Cell(givenCellIsAlive);
        var neighbors = [];
        for (var i = 0; i < numberOfAliveNeighbors; i++) {
            neighbors.push(new GOL.Cell(true));
        }
        
        for (var i = 0; i < numberOfDeadNeighbors; i++) {
            neighbors.push(new GOL.Cell(false));
        }
        
        var area = fakeAreaFactory.getAreaThatClaimsSomeNeighbors(cell, neighbors);
        var nextCell = cellEvolutionStrategy.getNextCellInPlaceOf(cell, area);
        expect(nextCell.isAlive()).toBe(shouldNewCellBeAlive);
    };

    it("kills any alive cell with fewer than 2 alive neighbors", function () {
        expectStrategyBehavior(true, 1, 4, false);
        expectStrategyBehavior(true, 0, 4, false);
    });
    
    it("leaves a cell untouched if it's alive and with 2-3 alive neighbours", function () {
        expectStrategyBehavior(true, 2, 4, true);
        expectStrategyBehavior(true, 3, 4, true);
    });
    
    it("makes a cell with more than 3 alive neighbors dead", function () {
        expectStrategyBehavior(true, 4, 4, false);
        expectStrategyBehavior(true, 5, 4, false);
        expectStrategyBehavior(true, 6, 4, false);
        expectStrategyBehavior(true, 7, 4, false);
        expectStrategyBehavior(true, 8, 4, false);
    });
    
    it("makes a dead cell alive only if it has exactly 3 alive neighbors", function () {
        expectStrategyBehavior(false, 0, 4, false);
        expectStrategyBehavior(false, 1, 4, false);
        expectStrategyBehavior(false, 2, 4, false);
        expectStrategyBehavior(false, 3, 4, true);
        expectStrategyBehavior(false, 4, 4, false);
        expectStrategyBehavior(false, 5, 4, false);
        expectStrategyBehavior(false, 6, 4, false);
        expectStrategyBehavior(false, 7, 4, false);
        expectStrategyBehavior(false, 8, 4, false);
    });

});