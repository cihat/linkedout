<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<template lang="pug">
.hello
  h1 {{ msg }}
  p Merhaba arkadaslar ben Furkan Torun. 
  img(src='https://media-exp1.licdn.com/dms/image/C4E03AQEdWqW36P9FUw/profile-displayphoto-shrink_400_400/0/1615576718166?e=1654732800&v=beta&t=gQWlDtlJcfnjk4ArocWohfesDm4lSU_V7UQaDCkMHkQ')
</template>
