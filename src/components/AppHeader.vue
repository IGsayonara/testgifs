<template lang="pug">
  .header
    v-container
      v-row
        v-col.logo-wrap(
          cols="3"
          sm="3"
        )
          v-img(
            src="@/assets/logo.png"
            max-height="50px"
            :contain="true"
          )
        v-col.search-wrap(
          cols="9"
          sm="9"
          offset-lg="3"
          lg="6"
        )
          v-text-field(
            label="Search for gifs"
            append-icon="mdi-magnify"
            rounded
            filled
            v-debounce:1000ms="searchMethod"
            @input="loadingStatusChanging(true)"
            v-model="searchValue"
          )
    .content-preloader(v-if="getIsLoading")
      v-img.mb-3(
        src="@/assets/preloader.gif"
        max-width="300px"
      )

</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "AppHeader",
  data() {
    return {
      searchValue: "",
    }
  },
  computed: {
    ...mapGetters(['getIsLoading'])
  },
  created() {
    this.init()
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight - 20

      if (bottomOfWindow && !this.getIsLoading) {
        this.pagination(this.searchValue)
      }
    }
  },
  methods: {
    ...mapActions(['pagination', 'search', 'init', 'loadingStatusChanging']),
    searchMethod() {
      window.scrollTo({top: 0})
      if (this.searchValue) {
        this.search(this.searchValue)
      } else {
        this.init()
      }
    }

  }
}
</script>

<style scoped lang="sass">
.header
  height: 80px
  width: 100%
  position: fixed
  top: 0
  left: 0
  z-index: 2
  background-color: white
  border-bottom: 1px solid rgba(0, 0, 0, 0.2)

.content-preloader
  width: 100%
  height: calc(100vh - 80px)
  position: fixed
  top: 80px
  left: 0
  background-color: white
  opacity: 0.95
  display: flex
  justify-content: center
  align-items: center
</style>