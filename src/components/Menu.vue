/* eslint-disable no-debugger */
<template>
  <ion-menu content-id="main" side="start" id="main-menu" v-if="currentUser">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          <h2>{{currentUser.email}}</h2>
        </ion-list-header>
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
    <ion-footer style="text-align:center" class="ion-padding">
      <ion-button @click="logout()">LOGOUT</ion-button>
    </ion-footer>
  </ion-menu>
</template>

<script>
import store from "../store";
export default {
  name: "Menu",
  components: {},
  computed: {
    currentUser() {
      return this.$store.state.user.user;
    }
  },
  methods: {
    isActive(_path) {
      return this.$route.path == _path;
    },
    async logout() {
      let menuController = document.querySelector("#main-menu");
      await menuController.close(true);
      await store.dispatch("user/logout");
      this.$router.replace("/login");
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