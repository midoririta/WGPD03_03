
var Yu03Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();


        return true;
    }
});

var Yu03Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu03Layer();
        this.addChild(layer);
    }
});

