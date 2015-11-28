define(["Cell"], function(Cell) {
    
    describe("A cell", function () {

        it("may be alive or dead", function () {
            cell = new Cell(true);
            expect(cell.isAlive()).toBeTruthy();

            cell = new Cell(false);
            expect(cell.isAlive()).toBeFalsy();
        });

    });
    
});

