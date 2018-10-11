var Hammer = require('hammerjs')
var DIRECTION =  require('./const')

module.exports = {
  inserted: function(el, binding) {
    var hammer = new Hammer(el)

    binding.modifiers.swipe && hammer.on('swipe', function(ev){
      if (!binding.value) return
      ev.direction = DIRECTION[ev.direction]
      if (!binding.modifiers.left && !binding.modifiers.right && !binding.modifiers.up && !binding.modifiers.down) {
        binding.value(ev)
        return
      }

      binding.modifiers.up && ev.direction === DIRECTION[8] && binding.value(ev)
      binding.modifiers.left && ev.direction === DIRECTION[2] && binding.value(ev)
      binding.modifiers.right && ev.direction === DIRECTION[4] && binding.value(ev)
      binding.modifiers.down && ev.direction === DIRECTION[16] && binding.value(ev)
    })
  },
}