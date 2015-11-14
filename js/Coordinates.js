var GOL = (function (GOL) {
    
    GOL.Coordinates = function(xPosition, yPosition)
    {
        this.x = xPosition;
        this.y = yPosition;
    };
    
    GOL.Coordinates.prototype.getHash = function()
    {
        return "x" + this.x + "y" + this.y;
    };
    
    return GOL;
} (GOL || {}));
