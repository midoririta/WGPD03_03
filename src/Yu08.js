var Yu08Layer = cc.Layer.extend({
    bg:null,
    dx:10,
    man:null,
    manFrame: new Array(4),
    isRight: true,
    action: 0,
    ctor:function () {
        this._super();

        this.bg = new cc.Sprite(res.bg_png);
        this.bg.x = this.bg.width /2;
        this.bg.y = cc.winSize.height /2;
        this.addChild(this.bg);

        var frameCache = cc.spriteFrameCache;
        frameCache.addSpriteFrames(res.man_plist, res.man_png);
        var img37 = frameCache.getSpriteFrame("image37.png");
        var img38 = frameCache.getSpriteFrame("image38.png");
        var img39 = frameCache.getSpriteFrame("image39.png");
        var img40 = frameCache.getSpriteFrame("image40.png");
        this.manFrame = [img37,img38,img39,img40];

        this.man = new cc.Sprite(this.manFrame[this.action]);
        this.man.x = cc.winSize.width / 2;
        this.man.y = cc.winSize.height / 2 + 44;
        this.addChild(this.man);
        this.man.runAction(cc.flipX(this.isRight));


        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode,event) {
                var target = event.getCurrentTarget();
                switch(keyCode){
                    case 39:    // right
                        target.man.runAction(cc.flipX(true));
                        target.goForward();
                        break;
                    case 37:    // left
                        target.man.runAction(cc.flipX(false));
                        target.goBack();
                        break;
                }
            },
            onKeyReleased: function (keyCode,event) {
            }
        }, this);



        return true;
    },

    goForward: function () {
        if (this.bg.x + this.bg.width/2 - this.dx>= cc.winSize.width){
            this.bg.x -= this.dx;

            this.action = this.action == 3?0:this.action+1;
            this.man.setSpriteFrame(this.manFrame[this.action]);
        }else {

            if (this.man.x + this.dx >= cc.winSize.width){
                cc.log("get");
            }
            this.action = this.action == 3?0:this.action+1;
            this.man.setSpriteFrame(this.manFrame[this.action]);
        }
    },

    goBack: function () {
        if (this.bg.x - this.bg.width/2 + this.dx <= 0){
            this.bg.x += this.dx;

            this.action = this.action == 3?0:this.action+1;
            this.man.setSpriteFrame(this.manFrame[this.action]);
        }
    }
});

var Yu08Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu08Layer();
        this.addChild(layer);
    }
});