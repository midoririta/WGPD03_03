
var Yu05Layer = cc.Layer.extend({
    sprite: null,
    spriteRect: false,
    isDrag: false,
    ctor:function () {
        this._super();
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: cc.winSize.width/2,
            y: cc.winSize.height/2
        });
        this.addChild(this.sprite);
        for (var v in this.sprite){
            cc.log(v);
        }

        this.spriteRect = cc.rect(
            this.sprite.x - this.sprite.width/2,
            this.sprite.y - this.sprite.height/2,
            this.sprite.width,
            this.sprite.height
        )

        this.setupMouse();

        return true;
    },
    setupMouse: function(){
        cc.eventManager.addListener({
            dx:0,
            dy:0,
            event: cc.EventListener.MOUSE,

            onMouseDown: function (e) {

                var target = e.getCurrentTarget();


                var x = e.getLocationX(); var y = e.getLocationY();
                var p = new cc.Point(x,y);
                if(cc.rectContainsPoint(target.spriteRect,p)){
                    this.dx = x-target.sprite.x;
                    this.dy = y-target.sprite.y;
                    target.isDrag = true;
                }

            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isDrag = false;
                //cc.log("Up");
                target.spriteRect = cc.rect(
                    target.sprite.x - target.sprite.width/2,
                    target.sprite.y - target.sprite.height/2,
                    target.sprite.width,
                    target.sprite.height
                )
            },
            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if(target.isDrag){
                    var x = e.getLocationX(); var y = e.getLocationY();
                    target.sprite.x = x - this.dx;
                    target.sprite.y = y - this.dy;
                }






                // cc.log("move");
            },
            onMouseScroll: function (e) {
                //cc.log("scroll");
            }
        },this);
    }
});

var Yu05Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu05Layer();
        this.addChild(layer);
    }
});

