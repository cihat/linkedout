<script>
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'
import Feed from '@/components/Feed'
import Message from '@/components/Message'

export default {
  name: 'feed',
  components: {
    LeftSidebar,
    RightSidebar,
    Feed,
    Message,
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
