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
        <ion-title>About</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-list>
        <ion-item>
          <ion-label>Pepperoni</ion-label>
          <ion-checkbox slot="end" value="pepperoni" checked/>
        </ion-item>

        <ion-item>
          <ion-label>Sausage</ion-label>
          <ion-checkbox slot="end" value="sausage" disabled/>
        </ion-item>

        <ion-item>
          <ion-label>Mushrooms</ion-label>
          <ion-checkbox slot="end" value="mushrooms"/>
        </ion-item>
      </ion-list>
      <ion-button @click="$router.push('/about/help')">Help</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "about"
};
</script>
