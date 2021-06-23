<template lang="pug">
  .gif-wrap
    v-img(
      v-if="!isHovered"
      :src="preview"
      width="100%"
      aspect-ratio="1"
      :contain="true"
      @mouseover="isHovered = true"
    )
    v-img(
      v-else
      :src="url"
      width="100%"
      aspect-ratio="1"
      :contain="true"
    )

</template>

<script>
export default {
  name: "AppGif",
  data(){
    return{
      isHovered: false
    }
  },
  props: ['url', 'preview']
}
</script>

<style lang="sass" scoped>
.v-image
  background-color: black
</style>