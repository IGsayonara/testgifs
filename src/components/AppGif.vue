<template lang="pug">
  .gif-wrap
    v-img(
      v-if="!isFullShowing"
      :src="preview"
      width="100%"
      aspect-ratio="1"
      :contain="true"
      @touchstart="getFull"
      @touchend="cancel"
      @mouseover="getFull"
      @mouseout="cancel"
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
  data() {
    return {
      isFullShowing: false,
      isHover: false,
    }
  },
  props: ['url', 'preview'],
  methods: {
    getFull() {
      this.isHover = true
      setTimeout(() => {
        if (this.isHover) this.isFullShowing = true
      }, 800)
    },
    cancel() {
      this.isHover = false
    }

  }
}
</script>

<style lang="sass" scoped>
.v-image
  background-color: black
</style>