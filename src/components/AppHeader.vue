<template lang="pug">
  .header
    v-container
      v-row
        v-col.logo-wrap(
          cols="12"
          sm="3"
        )
          v-img(
            src="@/assets/logo.png"
            max-width="300px"
            max-height="50px"
            :contain="true"
          )
        v-col.search-wrap(
          cols="12"
          sm="9"
          offset-lg="3"
          lg="6"
        )
          v-text-field(
            label="Search for gifs"
            append-icon="mdi-magnify"
            rounded
            filled
            @input="search"
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

  }
}
</script>

<style scoped>

</style>