<script>
import Icon from '../Icon'
import CreatePost from '../Post/create-post.vue'
import FilterPost from '../Post/filter-post.vue'
import Post from '../Post/post.vue'

export default {
  name: 'feed',
  components: {
    Icon,
    CreatePost,
    FilterPost,
    Post,
  },
}
</script>

<template lang="pug">
.content
  create-post
  filter-post
  div(v-for="index in 5" :key="index")
    post
</template>

<style lang="scss" scoped>
.content {
  flex: 1;
}
</style>
