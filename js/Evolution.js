var GOL = (function (GOL) {
    
    GOL.Evolution = function(areaEvolutionStrategy, cycleTimeMiliseconds)
    {
        this.subjects = [];
        this.areaEvolutionStrategy = areaEvolutionStrategy;
        this.cycleTimeMiliseconds = cycleTimeMiliseconds;
        this.timeIntervalHandler;
    };
    
    GOL.Evolution.prototype.addSubject = function(area)
    {
        this.subjects.push(area);
    };
    
    GOL.Evolution.prototype.start = function()
    {
        this.timeIntervalHandler = setInterval((function () {
            this.subjects.forEach((function (area) {
                this.areaEvolutionStrategy.replaceCellsOfAreaWithNewGeneration(area);
            }).bind(this));
        }).bind(this), this.cycleTimeMiliseconds);
    };
    
    GOL.Evolution.prototype.stop = function()
    {
        clearInterval(this.timeIntervalHandler);
    };
  
    return GOL;
} (GOL || {}));
