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

       <ion-item>
        <ion-label>on-input-vue test</ion-label>
        <ion-input-vue type="text" id="theOne" v-model="user.custom" required=true maxlength="2"> </ion-input-vue>
       </ion-item>

      </ion-list>
      <ion-button @click="$router.push('/about/help')">Help</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      user: { custom: "" }
    };
  }
}
</script>
<style scoped>
ion-input#theOne :invalid {
  background-color:  red !important;
  }

</style>
