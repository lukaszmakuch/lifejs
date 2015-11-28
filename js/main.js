requirejs.config({
    baseUrl: 'js/gol',
    paths: {
        "mediator-js": '../../node_modules/mediator-js/mediator.min'
    }
});

require([
    "Area",
    "AreaEvolutionStrategy",
    "AreaFactory",
    "AreaView",
    "CellEvolutionStrategy",
    "Evolution",
    "mediator-js",
    "Coordinates"
], function (
    Area,
    AreaEvolutionStrategy,
    AreaFactory,
    AreaView,
    CellEvolutionStrategy,
    Evolution,
    Mediator,
    Coordinates
) {
    var areaF = new AreaFactory();
    var area = areaF.createArea(50, 20);
    var mediator = new Mediator();
    var areaEvolutionStrategy = new AreaEvolutionStrategy(new CellEvolutionStrategy(), mediator);
    var evolution = new Evolution(areaEvolutionStrategy, 250);
    evolution.addSubject(area);
    var view = new AreaView(
        document.getElementById("gol-view").getContext("2d"),
        area,
        mediator
    );
    document.getElementById("gol-evolution-start").onclick = function () {
        evolution.start();
    };
    document.getElementById("gol-evolution-stop").onclick = function () {
        evolution.stop();
    };
    mediator.subscribe("area.cell.clicked", function (cell) {
        cell.toggle();
    });
});