<template>
  <div class="login">
    <div v-if="!isloggedIn">
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
    <div v-else>
      <b-form @submit="handleLogout">
        <b-button type="submit" variant="danger">logout</b-button>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { AuthRequest, AuthResponse } from "@/models/auth.model";
  import LoginForm from "./LoginForm.vue";
  import UserService from "../utils/user-services";

  @Component({
    components: {
      LoginForm,
    },
  })
  export default class Login extends Vue {
    private user: AuthRequest = { username: "", hash: "", email: "" };

    private loading = false;

    private message = "";

    private isloggedIn = false;

    private userData: AuthResponse = { id: 0, role: 2};

    created() {
      const token = localStorage.getItem("token") || "";
      this.isloggedIn = token != "";
      console.log("Created")
      if (this.isloggedIn) {
         UserService.get().then((data) => {
           console.log(data)
          this.userData = data;
        }).finally(() =>
          localStorage.setItem("role", this.userData.role.toString())
        )
        
      }
    }

    public handleLogin() {
      console.log("handleLogin")
     
    }

    public handleLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    }

    // setter of email
    public setToken(value: string) {
      localStorage.setItem("token", value);
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
