<template>
  <RouterView :key="route.fullPath" />
</template>

<script>
import { RouterView, useRoute } from 'vue-router'

export default {
  components: {
    RouterView
  },

  setup() {
    const route = useRoute()

    return {
      route
    }
  }
}
</script>
