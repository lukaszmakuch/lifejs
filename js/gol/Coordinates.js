define("Coordinates", function () {
    var Coordinates = function(xPosition, yPosition)
    {
        this.x = xPosition;
        this.y = yPosition;
    };
    
    Coordinates.prototype.getHash = function()
    {
        return "x" + this.x + "y" + this.y;
    };
    
    return Coordinates;
});