<script>
import Icon from '../Icon'
export default {
  name: 'filter-post',
  components: {
    Icon,
  },
}
</script>

<template lang="pug">
.filter-box
  h6 Filter post by :
  label.selectbox
    select(name='' id='')
      option(value='') Popular
      option(value='') Popular
      option(value='') Popular
    icon(icon='arrow-down' :size="16" color="#5096ec")-down-open
</template>

<style lang="scss" scoped>
.filter-box {
  margin-bottom: 14px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(#dedede, 0.8);
  border-radius: 6px;
  padding: 0 20px;
  color: #17272f;
  h6 {
    font-size: 14px;
    font-weight: normal;
  }
  .selectbox {
    position: relative;
    select {
      appearance: none;
      background: transparent;
      font-size: 14px;
      font-weight: 500;
      color: #17272f;
      padding-right: 30px;
      position: relative;
      top: -2px;
    }
    svg {
      position: absolute;
      right: 0;
      font-size: 12px;
      color: #aaa;
      pointer-events: none;
    }
  }
}
</style>
