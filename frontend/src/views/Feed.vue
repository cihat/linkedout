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
    .grid.grid-center
      .col.col-12.col-xs-12.col-md-3.col-lg-3
        LeftSidebar
      .col.col-12.col-xs-12.col-md-6.col-lg-6
        Feed
      .col.col-12.col-xs-12.col-md-3.col-lg-3
        RightSidebar
      Message
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
</style>
