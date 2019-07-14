<template>
  <ion-app>
    <ion-split-pane when="sm">
      <ion-menu contentId="menu-content">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-list-header>Navigate</ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item button @click="$router.push('/')">
                <ion-icon name="home"></ion-icon>
                <ion-label>
                  <span :class="[{boldLabel : isActive('/') }, 'menu-label']">Home</span>
                </ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle auto-hide="false">
              <ion-item button @click="$router.push('/about')">
                <ion-icon name="help"></ion-icon>
                <ion-label>
                  <span :class="[{boldLabel : isActive('/about') }, 'menu-label']">About</span>
                </ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
        <ion-footer style="text-align:center" padding>
          <ion-button @click="logout()">LOGOUT</ion-button>
        </ion-footer>
      </ion-menu>

      <ion-vue-router main />
    </ion-split-pane>
  </ion-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import store from "./store";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  computed: {},
methods: {
  isActive(_path) {
    return this.$route.path == _path;
  },
  async logout(){
    await store.dispatch("user/logout")
    this.$router.replace('/login');
  }
}
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

