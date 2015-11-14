"use strict";
describe("the area where the whole action takes place", function () {
    
    it("holds cells in specified palces", function () {
        var area = new GOL.Area(10, 20);
        var cell = new GOL.Cell(true);
        var coordinates = new GOL.Coordinates(3, 4);
        area.addCell(cell, coordinates);
        expect(area.getCellWithCoordinates(coordinates) === cell).toBeTruthy();
    });
    
    it("allow to get all cells", function () {
        var area = new GOL.Area(10, 20);
        var cell1 = new GOL.Cell("cell1");
        var cell2 = new GOL.Cell("cell2");
        area.addCell(cell1, new GOL.Coordinates(3, 4));
        area.addCell(cell2, new GOL.Coordinates(1, 2));
        expect(area.getAllCells()).toEqual(jasmine.arrayContaining([cell1, cell2]));
    });
    
    it("allows to get coordinates of previously added cell", function () {
        var area = new GOL.Area(10, 20);
        var cell = new GOL.Cell(true);
        area.addCell(cell, new GOL.Coordinates(3, 4));
        var cellCoordinates = area.getCoordinatesOf(cell);
        expect(cellCoordinates.x).toBe(3);
        expect(cellCoordinates.y).toBe(4);
    });
    
    it("allows to get all neighbors of a cell", function () {
        var area = new GOL.Area(10, 20);
        
        var mainCell = new GOL.Cell(true);
        var neighborCell1 = new GOL.Cell("n1");
        var neighborCell2 = new GOL.Cell("n2");
        var neighborCell3 = new GOL.Cell("n3");
        var neighborCell4 = new GOL.Cell("n4");
        var neighborCell5 = new GOL.Cell("n5");
        var neighborCell6 = new GOL.Cell("n6");
        var neighborCell7 = new GOL.Cell("n7");
        var neighborCell8 = new GOL.Cell("n8");
        var notNeighbor = new GOL.Cell("nn");
        
        area.addCell(mainCell, new GOL.Coordinates(5, 5));
        area.addCell(neighborCell1, new GOL.Coordinates(4, 4));
        area.addCell(neighborCell2, new GOL.Coordinates(5, 4));
        area.addCell(neighborCell3, new GOL.Coordinates(6, 4));
        area.addCell(neighborCell4, new GOL.Coordinates(4, 5));
        area.addCell(neighborCell5, new GOL.Coordinates(6, 5));
        area.addCell(neighborCell6, new GOL.Coordinates(4, 6));
        area.addCell(neighborCell7, new GOL.Coordinates(5, 6));
        area.addCell(neighborCell8, new GOL.Coordinates(6, 6));
        area.addCell(notNeighbor, new GOL.Coordinates(6, 7));
        
        expect(area.getNeighborsOf(mainCell)).toEqual(jasmine.arrayContaining([
            neighborCell1,
            neighborCell2,
            neighborCell3,
            neighborCell4,
            neighborCell5,
            neighborCell6,
            neighborCell7,
            neighborCell8
        ]));
        expect(area.getNeighborsOf(mainCell)).not.toEqual(jasmine.arrayContaining([
            notNeighbor
        ]));
    });
    
});