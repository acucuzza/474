var Enemy = Character.extend({
  init: function() {
  this.type = Math.floor(Math.random() * 2) + 1;
    switch(this.type) {
      case 1:
          this.image = "..images/Goomba.png";
          break;
      case 2:
         this.image = "..images/Koopa.png";
         break;
      default:
         return true;
    }
    setImage(this.image, this.x, this.y);
  },
  setImage: function(image, x, y){
    this.view.css({
			backgroundImage : image ? c2u(image) : 'none',
			backgroundPosition : '-' + (x || 0) + 'px -' + (y || 0) + 'px',
		});
  }
})