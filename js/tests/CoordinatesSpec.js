describe("coordiantes of something", function () {
    it("holds x and y values", function () {
        coordinates = new GOL.Coordinates(12, 21);
        expect(coordinates.x).toBe(12);
        expect(coordinates.y).toBe(21);
    });
});