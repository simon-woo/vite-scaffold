import { computed, reactive } from 'vue'

import { useStore } from 'vuex'

export default {
  name: 'home',
  setup() {
    const state = reactive({})
    const store = useStore()

    store.dispatch('home/SET_USER_INFO', { userInfo: { token: 123 } })

    const data = computed(() => store.state.home.userInfo)

    return {
      state,
      data
    }
  }
}
