function Dig(Game){
  self.handleKeyDown = function(event){
    var digPress = event.key;
    if(digPress === 'f'){alert("dig!")
    }
  }
  addEventListener('keydown', self.handleKeyDown)
}