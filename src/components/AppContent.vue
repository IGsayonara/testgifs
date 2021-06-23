<template lang="pug">
  .content
    v-container
      v-row(v-if="getGifs.length")
        v-col(
          v-for="(item, index) in getGifs"
          :key="item.id + index"
          cols="6"
          sm="4"
          md="3"
        )
          AppGif(
            :url="item.images.original.url"
            :preview="item.images.preview_gif.url"
          )
      v-row(
        v-else-if="getNotFoundGif"
        justify="center"
      )
        v-col(
          cols="12"
          sm="6"
        )
          v-img(
            :src="getNotFoundGif.images.original.url"
            :contain="true"
          )

</template>

<script>

import {mapGetters} from 'vuex'
import AppGif from "@/components/AppGif";

export default {
  name: "AppContent",
  components: {AppGif},
  computed: {
    ...mapGetters(['getGifs', 'getNotFoundGif'])
  },

}

</script>

<style scoped lang="sass">
.content
  padding-top: 80px
</style>