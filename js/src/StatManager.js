define(function() {
	var StatManager = Class.extend({
		init:function() {
			this.reset(0);
		},
		reset: function(startlvl) {
						
			this.tetraminos = {
				L: 0,
				I: 0,
				T: 0,
				S: 0,
				Z: 0,
				J: 0,
				O: 0,
				tot: 0,
			}
			this._firstlvl = false;
			this.startlvl = startlvl || 0;
			this.lvl = this.startlvl;
			
			this.lines = 0;
			this.score = 0;
		},
		incTetramino: function(id) {
			this.tetraminos[id] += 1;
			this.tetraminos.tot += 1;
		},
		addScore: function(cleared) {
			var p = [0, 40, 100, 300, 1200][cleared];
			this.score +=(this.lvl + 1) * p;
		},
		checkLvlUp: function() {
			lvlUpMP3 = new Audio("lvlup.mp3");
			if(this._firstlvl) {
				if(this.lines >= (this.lvl * 10) + 1) {
					this.lvl++;
					lvlUpMP3.play();
				}
			} 
			else {
				if(this.lines >= this.startlvl + 1) {
					this._firstlvl = true;
					this.lvl++;
					lvlUpMP3.play();
				}
			}
		}
	});
	return StatManager;
});
