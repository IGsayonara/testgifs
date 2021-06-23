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
            @input="searchMethod"
            v-model="searchValue"
          )
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "AppHeader",
  data(){
    return {
      searchValue: ""
    }
  },
  created(){
    this.pagination("cat")
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

      if (bottomOfWindow) {
        this.pagination(this.searchValue || "cat")
      }
    }
  },
  methods: {
    ...mapActions(['pagination', 'search']),
    searchMethod(){
      console.log('search')
      window.scrollTo({top: 0})
      this.search(this.searchValue || "cat")
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
</style>