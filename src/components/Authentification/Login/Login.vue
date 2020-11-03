<template>
  <div class="login">
    <div v-if="!loading">
      <b-form @submit="handleLogin">
        <div class="form-data">
          <login-form
            @on-input="setUsername"
            v-bind:value="user.username"
            id="input-username"
            label="Votre nom d'utilisateur :"
            placeholder="Entrez votre nom d'utilisateur"
            type="text"
            :required="true"
          />

          <login-form
            @on-input="setToken"
            v-bind:value="user.hash"
            id="input-token"
            label="Entrez le token fourni par l'admin"
            placeholder="token"
            type="text"
            :required="true"
          />
        </div>

        <div class="form-sending">
          <b-button type="submit" variant="primary">
            Envoyer
          </b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { AuthRequest, AuthState } from "@/models/auth.model";
  import LoginForm from "./LoginForm.vue";
  import { namespace } from "vuex-class";

  const auth = namespace("Auth");

  @Component({
    components: {
      LoginForm,
    },
  })
  export default class Login extends Vue {
    private user: AuthRequest = { username: "", hash: "", email: "" };

    private loading = false;

    private message = "";

    @auth.State
    public authState: AuthState;

    @auth.Action('updateToken')
    public updateToken: (newToken: string) => void;

    get loggedIn() {
      return this.authState.status.loggedIn;
    }

    created() {
      if (this.loggedIn) {
        this.$router.push("/account");
      }
    }

    public handleLogin() {
      this.loading = true;
      if (this.user.username && this.user.hash) {
        this.authState.status.loggedIn = true
      }
    }

    // setter of email
    public setToken(value: string) {
      localStorage.setItem('token', value);
    }

    // getter of email
    public getToken() {
      return this.user.hash;
    }

    // setter of username
    public setUsername(value: string) {
      this.user.username = value;
    }

    // getter of username
    public getUsername() {
      return this.user.username;
    }
  }
</script>

<style scoped>
  .form-data {
    width: 25%;
    margin: 0 auto;
  }

  .form-sending {
    width: 25%;
    margin: 0 auto;
  }
</style>
