L.PM.Map = L.Class.extend({
    initialize(map) {
        this.Draw = new L.PM.Draw(map);
        this.Toolbar = new L.PM.Toolbar(map);
    },
    addControls: function(options) {
        this.Toolbar.addControls(options);
    },
    enableDraw: function(shape = 'Poly') {
        this.Draw.enable(shape);
    },
    disableDraw: function(shape = 'Poly') {
        this.Draw.disable(shape);
    }
});
