game.Player = me.Sprite.extend({

    init : function () {
        var image = me.loader.getImage("player");
        this._super(me.Sprite, "init", [
            me.game.viewport.width / 2 - image.width / 2,
            me.game.viewport.height - image.height - 20,
            {
                image: image,
            }
        ]);
        this.vel = 450;
        this.maxX = me.game.viewport.width - this.width;
        this.maxY = me.game.viewport.height - this.height;

        this.body = new me.Body(this);
    },

    update : function (time) {
        this._super(me.Sprite, "update", [time]);

        if (me.input.isKeyPressed("left")) {
            this.pos.x -= this.vel * time / 1000;
        }

        if (me.input.isKeyPressed("right")) {
            this.pos.x += this.vel * time / 1000;
        }

        if (me.input.isKeyPressed("up")) {
            this.pos.y -= this.vel * time / 1000;
        }

        if (me.input.isKeyPressed("down")) {
            this.pos.y += this.vel * time / 1000;
        }

        if (me.input.isKeyPressed("shoot")) {
            me.game.world.addChild(me.pool.pull("laser", this.pos.x - game.Laser.width, this.pos.y - game.Laser.height))
        }

        this.pos.x = me.Math.clamp(this.pos.x, 0, this.maxX);
        this.pos.y = me.Math.clamp(this.pos.y, 0, this.maxY);


        return true;
    },

});
