<script>
import { mapActions } from 'vuex'

import HelloWorld from '@/components/hello-world.vue'
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'
import Feed from '@/components/Feed'
import Message from '@/components/Message'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LeftSidebar,
    RightSidebar,
    Feed,
    Message,
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
}
</script>

<template lang="pug">
main
  .container
    LeftSidebar
    Feed
    RightSidebar
    Message
</template>

<style lang="scss" scoped>
.container {
  width: 1140px;
  margin: 0 auto;
}

main {
  .container {
    display: flex;
  }
}
</style>
