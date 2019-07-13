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
        <ion-title>LOGIN</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <form>
        <ion-label position="stacked">Email</ion-label>
        <ion-input @ionChange="(_event)=> email = _event.detail.value" type="text"></ion-input>

        <ion-label position="stacked">Password</ion-label>
        <ion-input @ionChange="(_event)=> password = _event.detail.value" type="password"></ion-input>

        <ion-button @click="doLogin()">Login</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Login",
  methods: {
    async doLogin() {
      await this.$store.dispatch("user/login", {
        email: this.email,
        password: this.password
      });
      console.log(this.$store.state);
      this.$router.push("/");
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mounted() {
    console.log("mounted");
    const menuCtrl = document.querySelector("ion-menu-controller");
    menuCtrl.enable(false);
  }
};
</script>