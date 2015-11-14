var GOL = (function (GOL) {
    
    GOL.Cell = function(isAlive)
    {
        this.isAliveBoolean = isAlive;
    };
    
    GOL.Cell.prototype.isAlive = function()
    {
        return this.isAliveBoolean;
    };
  
    return GOL;
} (GOL || {}));
