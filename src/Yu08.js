var Yu08Layer = cc.Layer.extend({
    sprite:null,
    bg: null,
    ctor:function () {
        this._super();

        this.bg = new cc.Sprite(res.bg_png);
        this.bg.x = cc.winSize.width /2;
        this.bg.y = cc.winSize.height/2;
        this.addChild(this.bg);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode,event) {
                cc.log("press"+keyCode);
            },
            onKeyReleased: function (keyCode,event) {
                cc.log("release"+keyCode);
            }
        },this);

        
        return true;
    },



});

var Yu08Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu08Layer();
        this.addChild(layer);
    }
});