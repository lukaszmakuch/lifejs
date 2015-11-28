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
    "mediator-js"
], function (
    Area,
    AreaEvolutionStrategy,
    AreaFactory,
    AreaView,
    CellEvolutionStrategy,
    Evolution,
    Mediator
) {
    var areaF = new AreaFactory();
    var area = areaF.createArea(80, 45);
    var mediator = new Mediator();
    var areaEvolutionStrategy = new AreaEvolutionStrategy(new CellEvolutionStrategy());
    var evolution = new Evolution(areaEvolutionStrategy, 250, mediator);
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
    document.getElementById("gol-evolution-reset").onclick = function () {
        evolution.killAllCells();
    };
    mediator.subscribe("area.cell.clicked", function (cell) {
        cell.toggle();
    });
});