import {DIRECTION} from './const'
import Hammer from 'hammerjs'
// todo 做成手势库
export default {
  inserted(el, binding) {
    const {swipe, left, right, up, down} = binding.modifiers
    const hammer = new Hammer(el)

    swipe && hammer.on('swipe', ev => {
      if (!binding.value) return
      ev.direction = DIRECTION[ev.direction]
      if (!left && !right && !up && !down) {
        binding.value(ev)
        return
      }

      up && ev.direction === DIRECTION[8] && binding.value(ev)
      left && ev.direction === DIRECTION[2] && binding.value(ev)
      right && ev.direction === DIRECTION[4] && binding.value(ev)
      down && ev.direction === DIRECTION[16] && binding.value(ev)
    })
  },
}