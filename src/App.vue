<template lang="pug">
  v-app
    AppHeader
    AppContent
</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppContent from "@/components/AppContent";

export default {
  name: 'App',

  components: {
    AppHeader,
    AppContent
  },


};
</script>

