<template>
  <ion-page main class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <hello-world />
    </ion-content>
  </ion-page>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {
    console.log("onCreated");
    // const menuCtrl = document.querySelector("ion-menu-controller");
    // menuCtrl?.enable(true);
  }
};
</script>
