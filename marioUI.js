var marioUI = function() {
  var self = this;
  this.running = false;
  this.initialize = function() {
    this.game = new marioGame()
    $('#game').show();
    $('#background').show();
    
    this.newGame = function(){
      
    }
    
    $('#mario').show();
  }
}