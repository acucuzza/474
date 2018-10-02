var keyboard = {
  bind : function() {
    // Uses jquery to call our handler function when a key is pressed.
    $(document).on('keydown', function(event) {
      return keyboard.keyhandler(event, true);
    });
    $(document).on('keyup', function() {
      return keyoard.keyhandler(event, false);
    });
  },
  // Handler to say what to do when a key is pressed or released.
  keyhandler : function(event, state) {
    switch(event.keyCode) {
      case 37:
          keyboard.left = state;
          break;
      case 38:
         keyboard.up = state;
         break;
      case 39:
         keyboard.right = state;
         break;
      case 40:
         keys.down = state;
         break;
      default:
         return true;
    }
  },
  // Reset function, seems like this will be needed during transitions.
  resetKeys : function() {
    keyboard.left = false;
    keyboard.up = false;
    keyboard.right = false;
    keyboard.down = false;
  },
  // Listing out the keys we will be using.
  left : false,
  up : false,
  right : false,
  down : false,
};