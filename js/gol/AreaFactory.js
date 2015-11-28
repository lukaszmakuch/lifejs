define("AreaFactory", ["Area", "Coordinates", "Cell"], function (Area, Coordinates, Cell) {
    var AreaFactory = function () {};
    
    AreaFactory.prototype.createArea = function (width, height) {
        var area = new Area(width, height);
        for (iy = 0; iy < height; iy++) {
            for (ix = 0; ix < width; ix++) {
                area.addCell(new Cell(false), new Coordinates(ix, iy));
            }
        }
        return area;
    };
    
    return AreaFactory;
});

