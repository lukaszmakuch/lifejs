"use strict";
define(["AreaFactory"], function (AreaFactory) {
    describe("factory of areas", function () {
        it("creates new area objects", function () {
            var f = new AreaFactory();
            var area = f.createArea(3, 2); 
            
            expect(area.width).toBe(3);
            expect(area.height).toBe(2);
            
            var allCells = area.getAllCells();
            expect(allCells.length).toBe(6);
            
            allCells.forEach(function (cell) {
                expect(cell.isAlive()).toBeFalsy();
            });
        });
    });
});