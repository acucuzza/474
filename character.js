//WIP
var Character = Base.extend({
  init: function(width, height, xpos, ypos){
    this.direction = directions.left;
    this.dead = false;
    this.setVelocity(0, 0);
    this.setSize(width,height);
    this.setPosition(xpos,ypos);
    this.flying = false;
  },
  updatePosition: function() {
    var x = this.x + vx;
		var y = this.y + vy;
      //need to figure out how to move the guy
  },
	setVelocity: function(vx, vy) {
		this.vx = vx;
		this.vy = vy;
		if(vx < 0)
			this.direction = directions.left;
    else if(vx > 0)
			this.direction = directions.right;
	},
  getVelocity: function() {
		return { vx : this.vx, vy : this.vy };
	},
  die: function() {
		this.dead = true;
	},
  newlife: function() {
    this.dead = false;
  },
  setSize: function(width, height) {
		this.view.css({
			width: width,
			height: height
		});
		this._super(width, height);
	},
  setPosition: function(x, y) {
		this.view.css({
			left: x,
			bottom: y,
		});
		this._super(x, y);
	},
  setDirection: function(direction){
    this.direction = direction;
  }
});