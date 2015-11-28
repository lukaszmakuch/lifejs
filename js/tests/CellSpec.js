define(["Cell"], function(Cell) {
    
    describe("A cell", function () {

        it("may be alive or dead", function () {
            var cell = new Cell(true);
            expect(cell.isAlive()).toBeTruthy();

            var cell = new Cell(false);
            expect(cell.isAlive()).toBeFalsy();
        });

        it("may be toggled", function () {
            var cell = new Cell(false);
            cell.toggle();
            expect(cell.isAlive()).toBeTruthy();
        });
    });
    
});

