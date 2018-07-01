
var Yu04Layer = cc.Layer.extend({
    drawing: null,
    isDrawing: false,
    ctor:function () {
        this._super();
        this.drawing = new cc.DrawNode();
        // this.drawing.drawSegment(cc.p(0,0), cc.p(200,300),
        //     2, cc.color(255,0,0));
        this.addChild(this.drawing);
        this.setupMouse();

        return true;
    },
    setupMouse: function(){
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            lastX: -1,
            lastY: -1,
            onMouseDown: function (e) {

                var target = e.getCurrentTarget();

                target.isDrawing = true;
                this.lastX = e.getLocationX();
                this.lastY = e.getLocationY();


            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isDrawing = false;
                //cc.log("Up");
            },
            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if(!target.isDrawing) return;

                    var x = e.getLocationX();
                    var y = e.getLocationY();
                    target.drawing.drawSegment(cc.p(this.lastX,this.lastY), cc.p(x,y),
                        2, cc.color(255,0,0));
                    this.lastX = x; this.lastY = y;


                // cc.log("move");
            },
            onMouseScroll: function (e) {
                //cc.log("scroll");
            }
        },this);
    }
});

var Yu04Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu04Layer();
        this.addChild(layer);
    }
});

