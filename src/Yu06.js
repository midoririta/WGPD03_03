
var Yu06Layer = cc.Layer.extend({
    sprite1: null,
    sprite2: null,
    isTouch1: false,
    ctor:function () {
        this._super();

        this.sprite2 = new cc.Sprite(res.HelloWorld_png);
        this.sprite2.attr({
            x: cc.winSize.width*1/ 2 +40,
            y: cc.winSize.height/2 -20
        });
        this.addChild(this.sprite2);

        this.sprite1 = new cc.Sprite(res.HelloWorld_png);
        this.sprite1.attr({
            x: cc.winSize.width*1/2 -40,
            y: cc.winSize.height/2 +20
        });
        this.addChild(this.sprite1);


        this.setupMouse1(this);
        this.setupMouse2(this);


        return true;
    },
    setupMouse1: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,

            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                var targetRect = cc.rect(
                    target.x - target.width/2,
                    target.y - target.height/2,
                    target.width,
                    target.height
                );
                var point = new cc.Point(e.getLocationX(), e.getLocationY());
                if(cc.rectContainsPoint(targetRect,point)){
                    cc.log("touch1");
                    layer.isToch1 = true;


                }
            },
            onMouseUp: function () {
                layer.isTouch1 = false;
            },
        },layer.sprite1);
    },
    setupMouse2: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,

            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                var targetRect = cc.rect(
                    target.x - target.width/2,
                    target.y - target.height/2,
                    target.width,
                    target.height
                );
                var point = new cc.Point(e.getLocationX(), e.getLocationY());
                if(cc.rectContainsPoint(targetRect,point) && !layer.isToch1){
                    cc.log("touch2");

                }
            },
        },layer.sprite2);
    }
});

var Yu06Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu06Layer();
        this.addChild(layer);
    }
});

