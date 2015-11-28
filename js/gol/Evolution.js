define("Evolution", function () {
    var Evolution = function(areaEvolutionStrategy, cycleTimeMiliseconds, mediator)
    {
        this.subjects = [];
        this.areaEvolutionStrategy = areaEvolutionStrategy;
        this.cycleTimeMiliseconds = cycleTimeMiliseconds;
        this.timeIntervalHandler;
        this.mediator = mediator;
    };
    
    Evolution.prototype.addSubject = function(area)
    {
        this.subjects.push(area);
    };
    
    Evolution.prototype.start = function()
    {
        this.timeIntervalHandler = setInterval((function () {
            this.subjects.forEach((function (area) {
                this.areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration(area);
                this.mediator.publish("area.cells.new_generation", area);
            }).bind(this));
        }).bind(this), this.cycleTimeMiliseconds);
    };
    
    Evolution.prototype.stop = function()
    {
        clearInterval(this.timeIntervalHandler);
    };
    
    Evolution.prototype.killAllCells = function() {
        this.subjects.forEach((function (area) {
            area.getAllCells().forEach(function (cell) {
                cell.kill();
            });
            this.mediator.publish("area.cells.new_generation", area);
        }).bind(this));
    };
  
    return Evolution;
});
    