define(['Evolution', 'AreaFactory', 'Coordinates', "mediator-js"], function(Evolution, AreaFactory, Coordinates, Mediator) {
    var areaF;
    var mediator;
    
    beforeEach(function () {
        areaF = new AreaFactory();
        mediator = new Mediator();
        spyOn(mediator, "publish");
    });
    
    describe("Evoliton process of some area", function () {

        it("changes with time", function () {
            jasmine.clock().install();
            var areaEvolutionStrategy = jasmine.createSpyObj(
                'AreaEvolutionStrategy', 
                ['replaceCellsOfAreaWithNewGeneration']
            );

            var area = {};

            var evolution = new Evolution(areaEvolutionStrategy, 100, mediator);

            evolution.addSubject(area);
            evolution.start();

            //first call
            expect(mediator.publish).not.toHaveBeenCalled();
            expect(areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration.calls.count()).toEqual(0);
            jasmine.clock().tick(101);
            expect(areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration.calls.count()).toEqual(1);
            expect(mediator.publish).toHaveBeenCalledWith("area.cells.new_generation", area);
            expect(areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration).toHaveBeenCalledWith(area);

            //secondcall
            jasmine.clock().tick(101);
            expect(areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration.calls.count()).toEqual(2);

            //stop
            evolution.stop();

            //no call
            jasmine.clock().tick(101);
            expect(areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration.calls.count()).toEqual(2);

            //start
            evolution.start();

            //another call
            jasmine.clock().tick(101);
            expect(areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration.calls.count()).toEqual(3);
        });
        
        it("allows to kill all cells", function () {
            var area = areaF.createArea(10, 10);
            var cell = area.getCellWithCoordinates(new Coordinates(5, 5));
            cell.toggle();
            var evolution = new Evolution({}, 0, mediator);
            evolution.addSubject(area);
            evolution.killAllCells();
            expect(mediator.publish).toHaveBeenCalledWith("area.cells.new_generation", area);
            expect(cell.isAlive()).toBeFalsy();
        });

    });

});

