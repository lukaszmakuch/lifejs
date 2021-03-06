define("Cell", function () {
    var Cell = function(isAlive)
    {
        this.isAliveBoolean = isAlive;
    };
    
    Cell.prototype.isAlive = function()
    {
        return this.isAliveBoolean;
    };
    
    Cell.prototype.toggle = function() {
        this.isAliveBoolean = !this.isAliveBoolean;
    };
    
    Cell.prototype.kill = function() {
        this.isAliveBoolean = false;
    };
  
    return Cell;
});
