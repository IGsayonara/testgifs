<template lang="pug">
  .content
    v-container
      v-row
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
</style>