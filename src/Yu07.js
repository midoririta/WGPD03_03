var Yu07Layer = cc.Layer.extend({
    sprite:null,
    isShoot: false,
    dx: 4,
    dy: 4,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: 0,
            y: 0
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
            this.sprite.x += this.dx;
            this.sprite.y += this.dy;


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