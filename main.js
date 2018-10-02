var Base = Class.extend({
	init: function(x, y) {
		this.setPosition(x || 0, y || 0);
		this.clearFrames();
		this.frameCount = 0;
	},
	setPosition: function(x, y) {
		this.x = x;
		this.y = y;
	},
	getPosition: function() {
		return { x : this.x, y : this.y };
	},
	setImage: function(img, x, y) {
		this.image = {
			path : img,
			x : x,
			y : y
		};
	},
  setSize: function(width, height) {
    this.width = width;
    this.height = height;
  },
  getSize: function() {
    return {width: this.width, height: this.height};
  },
  setupFrame: function(fps, frames, id) {
    if(id) {
      if(this.frameID == id) {
        return true;
      }
      this.frameID = id;
    }
    this.currentFrame = 0;
    this.frameTick = 1;
    this.frames = frames;
    return false;
  },
	clearFrames: function(){
		this.frameID = undefined;
		this.frames = 0;
		this.currentFrame = 0;
		this.frameTick = 0;
	}
});



