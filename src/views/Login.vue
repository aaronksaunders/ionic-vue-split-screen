<template>
  <div main class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" v-if="$store.user">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>LOGIN</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-content>
          <ion-label position="stacked">Email</ion-label>
          <ion-input-vue type="text" v-model="email"></ion-input-vue>
          <ion-label position="stacked">Password</ion-label>
          <ion-input-vue type="password" v-model="password"></ion-input-vue>
          <ion-button @click="doLogin()">Login</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    async doLogin() {
      let result = await this.$store.dispatch("user/login", {
        email: this.email,
        password: this.password
      });
      if (result) {
        console.log(this.$store.state);
        this.$router.push("/");
      }
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
    // const menuCtrl = document.querySelector("ion-menu-controller");
    // menuCtrl.enable(false);
  }
};
</script>