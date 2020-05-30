<template>
  <ion-app>
    <ion-split-pane content-id="main">
      <Menu />
      <ion-vue-router id="main"></ion-vue-router>
    </ion-split-pane>
  </ion-app>
</template>

<script>
import Menu from "./components/Menu";
export default {
  name: "App",
  components: {
    Menu
  },
  computed: {},
  methods: {}
};
</script>
<style scoped>
.menu-label {
  padding-left: 0.5em !important;
}
.boldLabel {
  font-weight: bold;
}
</style>

