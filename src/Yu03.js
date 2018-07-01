
var Yu03Layer = cc.Layer.extend({
    isDrag: false,
    sprite:null,
    ctor:function () {
        this._super();
        this.setupMouse();
        //
        return true;
    },

    setupMouse: function () {

        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {

                var target = e.getCurrentTarget();

                target.isDrag = true;



            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isDrag = false;
                //cc.log("Up");
            },
            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if(target.isDrag){
                    var x = e.getLocationX();
                    var y = e.getLocationY();
                    cc.log("x: "+ x + "y: " + y);
                }
                // cc.log("move");
            },
            onMouseScroll: function (e) {
                //cc.log("scroll");
            }
        },this);
    }
});

var Yu03Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu03Layer();
        this.addChild(layer);
    }
});

