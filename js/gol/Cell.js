define("Cell", function () {
    var Cell = function(isAlive)
    {
        this.isAliveBoolean = isAlive;
    };
    
    Cell.prototype.isAlive = function()
    {
        return this.isAliveBoolean;
    };
  
    return Cell;
});
