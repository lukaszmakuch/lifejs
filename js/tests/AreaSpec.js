"use strict";
define(["Area", "Cell", "Coordinates"], function (Area, Cell, Coordinates) {
    describe("the area where the whole action takes place", function () {

        it("holds cells in specified palces", function () {
            var area = new Area(10, 20);
            var cell = new Cell(true);
            var coordinates = new Coordinates(3, 4);
            area.addCell(cell, coordinates);
            expect(area.getCellWithCoordinates(coordinates) === cell).toBeTruthy();
        });
        
        it("allow to get all cells", function () {
            var area = new Area(10, 20);
            var cell1 = new Cell("cell1");
            var cell2 = new Cell("cell2");
            area.addCell(cell1, new Coordinates(3, 4));
            area.addCell(cell2, new Coordinates(1, 2));
            expect(area.getAllCells()).toEqual(jasmine.arrayContaining([cell1, cell2]));
        });

        it("allows to get coordinates of previously added cell", function () {
            var area = new Area(10, 20);
            var cell = new Cell(true);
            area.addCell(cell, new Coordinates(3, 4));
            var cellCoordinates = area.getCoordinatesOf(cell);
            expect(cellCoordinates.x).toBe(3);
            expect(cellCoordinates.y).toBe(4);
        });

        it("allows to get all neighbors of a cell", function () {
            var area = new Area(10, 20);

            var mainCell = new Cell(true);
            var neighborCell1 = new Cell("n1");
            var neighborCell2 = new Cell("n2");
            var neighborCell3 = new Cell("n3");
            var neighborCell4 = new Cell("n4");
            var neighborCell5 = new Cell("n5");
            var neighborCell6 = new Cell("n6");
            var neighborCell7 = new Cell("n7");
            var neighborCell8 = new Cell("n8");
            var notNeighbor = new Cell("nn");

            area.addCell(mainCell, new Coordinates(5, 5));
            area.addCell(neighborCell1, new Coordinates(4, 4));
            area.addCell(neighborCell2, new Coordinates(5, 4));
            area.addCell(neighborCell3, new Coordinates(6, 4));
            area.addCell(neighborCell4, new Coordinates(4, 5));
            area.addCell(neighborCell5, new Coordinates(6, 5));
            area.addCell(neighborCell6, new Coordinates(4, 6));
            area.addCell(neighborCell7, new Coordinates(5, 6));
            area.addCell(neighborCell8, new Coordinates(6, 6));
            area.addCell(notNeighbor, new Coordinates(6, 7));

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
});