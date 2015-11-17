describe("Evoliton process of some area", function () {
    
    it("changes with time", function () {
        jasmine.clock().install();
        
        var areaEvolutionStrategy = jasmine.createSpyObj(
            'GOL.AreaEvolutionStrategy', 
            ['replaceCellsOfAreaWithNewGeneration']
        );

        var area = {};
        
        var evolution = new GOL.Evolution(areaEvolutionStrategy, 100);
        
        evolution.addSubject(area);
        evolution.start();
        
        //first call
        expect(areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration.calls.count()).toEqual(0);
        jasmine.clock().tick(101);
        expect(areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration.calls.count()).toEqual(1);
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
    
});

