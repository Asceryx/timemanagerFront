<template>
  <div id="app">
    <div id="nav">
      <div v-if="isAuthenticate">
        <router-link to="/account">Account</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <router-link to="/report">Report</router-link> |
        <router-link to="/team" v-if="isManager">Team |</router-link>
        <router-link to="/login">Logout |</router-link>
      </div>
      <div v-else><router-link to="/login">Login</router-link></div>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
  import { getModule } from "vuex-module-decorators";
  import Auth from "@/store/modules/auth.module";
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class App extends Vue {
    private moduleAuth = getModule(Auth, this.$store);

    get isManager() {
      return this.moduleAuth.isManager;
    }

    get isAuthenticate() {
      const token = localStorage.getItem('token') || ''
      return token != '';
    }
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
