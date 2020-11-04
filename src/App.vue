<template>
  <div id="app">
    <div id="nav">
<<<<<<< HEAD
      <div v-if="isAuthenticate">
        <router-link to="/account">Account</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <router-link to="/report">Report</router-link> |
        <router-link to="/team" v-if="isManager || isAdmin">Team  </router-link> |
        <router-link to="/login">Logout |</router-link>
      </div>
      <div v-else><router-link to="/login">Login</router-link></div>
=======
      <router-link to="/account">Account</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/report">Report</router-link> |
      <router-link to="/team" v-if= "affichageA">Team</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/admin" v-if= "affichageB">Admin</router-link>
>>>>>>> e55369a (Modifications)
    </div>
    <router-view />
  </div>
</template>
<<<<<<< HEAD
<script lang="ts">
  import { getModule } from "vuex-module-decorators";
  import Auth from "@/store/modules/auth.module";
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class App extends Vue {
    private moduleAuth = getModule(Auth, this.$store);

    get isManager() {
      const role = localStorage.getItem('role') || ''
      return role == "1";
    }

    get isAdmin() {
      const role = localStorage.getItem('role') || ''
      return role == "2";
    }

    get isAuthenticate() {
      const token = localStorage.getItem('token') || ''
      return token != '';
    }
=======
<script>
import store from '@/store/index'
export default {
  name: 'user',
  data: function() {
    return{
       affichageA: store.state.Auth.authState.userResponse.userRole == "manager",
       affichageB: store.state.Auth.authState.userResponse.userRole == "admin"
      }
>>>>>>> e55369a (Modifications)
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
