<script>
import { Icomoon } from 'vue-icomoon'
import iconSet from './selection.json'

export default {
  name: 'Icon',
  components: {
    Icomoon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      props,
      iconSet,
    }
  },
}
</script>

<template>
  <icomoon :iconSet="iconSet" v-bind="props" />
</template>
