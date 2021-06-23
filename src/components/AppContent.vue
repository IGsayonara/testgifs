<template lang="pug">
  .content
    v-container
      v-row(v-if="getGifs.length")
        v-col(
          v-for="item in getGifs"
          :key="item.id"
          cols="6"
          sm="4"
          md="3"
        )
          AppGif(
            :url="item.images.original.url"
          )
      v-row(
        v-else
        justify="center"
      )
        v-col(
          cols="12"
          sm="6"
        )
          v-img(

            src="@/assets/404.gif"
            :contain="true"
          )

</template>

<script>

import { mapGetters } from 'vuex'
import AppGif from "@/components/AppGif";

export default {
  name: "AppContent",
  components: {AppGif},
  computed: {
    ...mapGetters(['getGifs'])
  },

}

</script>

<style scoped lang="sass">
.v-image
  background-color: black
.content
  padding-top: 80px
</style>