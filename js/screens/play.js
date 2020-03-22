game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {

        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);

        this.player = me.pool.pull("player");
        me.game.world.addChild(this.player, 1);

        this.enemyManager = new game.EnemyManager();
        this.enemyManager.createEnemies();
        me.game.world.addChild(this.enemyManager, 2);


        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP, "up");
        me.input.bindKey(me.input.KEY.DOWN, "down");
        me.input.bindKey(me.input.KEY.SPACE, "shoot", true);

        /*
        // reset the score
        game.data.score = 0;

        // Add our HUD to the game world, add it last so that this is on top of the rest.
        // Can also be forced by specifying a "Infinity" z value to the addChild function.
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
         */
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {

        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.UP);
        me.input.unbindKey(me.input.KEY.DOWN);
        me.input.unbindKey(me.input.KEY.SPACE);

        // remove the HUD from the game world
        // me.game.world.removeChild(this.HUD);
    },

    checkIfLoss : function (y) {
        if (y >= this.player.pos.y) {
            this.reset();
        }
    },

});
