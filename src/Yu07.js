var Yu07Layer = cc.Layer.extend({
    sprite:null,
    isShoot: false,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2
        });
        this.addChild(this.sprite);



        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                target.isShoot = true;
            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isShoot = false;

            }
        },this);

        this.scheduleUpdate();

        
        return true;
    },
    update: function () {
        if(this.isShoot){
            cc.log('shooting...');
        }
    }


});

var Yu07Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu07Layer();
        this.addChild(layer);
    }
});