describe("A cell", function () {
    it("may be alive or dead", function () {
        cell = new GOL.Cell(true);
        console.log(cell.isAlive());
        expect(cell.isAlive()).toBeTruthy();
        
        cell = new GOL.Cell(false);
        expect(cell.isAlive()).toBeFalsy();
    });
});