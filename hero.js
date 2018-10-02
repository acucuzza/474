var Hero = Character.extend({
  keyMove : function(keyboard){
    if (keyboard.up) {
      if (this.vy === 0){
      this.vy = 20;
      }
      hero.jump();
    }
    if (keyboard.left){
      if (this.vx > -20){
        this.vx -= 1;
      }
    }
    if (keyboard.right) {
      if (this.vx < 20) {
        this.vx += 1;
      }
    }
  },
  jump: function(){
    flying = true;
    if (this.vy > -20){
      this.vy = 0;
      this.flying = false;
    }
    this.vy -= 1;
  }
})