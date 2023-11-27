import { Button } from 'vant'

export default {
  name: 'app-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    [Button.name]: Button
  }
}
