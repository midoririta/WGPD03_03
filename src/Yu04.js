
var Yu04Layer = cc.Layer.extend({
    isDrag: false,
    sprite:null,
    ctor:function () {
        this._super();

        return true;
    },

});

var Yu04Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu04Layer();
        this.addChild(layer);
    }
});

