<template lang="pug">
  v-img(
    :src="url"
    width="100%"
    aspect-ratio="1"
    :contain="true"
  )
    template(v-slot:placeholder)
      v-row.fill-height.ma-0(
        align="center"
        justify="center"
      )
        v-progress-circular(
          indeterminate
          color="white lighten-5"
        )
</template>

<script>
export default {
  name: "AppGif",
  props: ['url']
}
</script>

<style scoped>

</style>