define("Evolution", function () {
    var Evolution = function(areaEvolutionStrategy, cycleTimeMiliseconds)
    {
        this.subjects = [];
        this.areaEvolutionStrategy = areaEvolutionStrategy;
        this.cycleTimeMiliseconds = cycleTimeMiliseconds;
        this.timeIntervalHandler;
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
            }).bind(this));
        }).bind(this), this.cycleTimeMiliseconds);
    };
    
    Evolution.prototype.stop = function()
    {
        clearInterval(this.timeIntervalHandler);
    };
  
    return Evolution;
});
    