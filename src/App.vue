<template>
  <div id="app">
    <div id="nav">
      <router-link to="/account">Account</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/report">Report</router-link> |
      <router-link to="/team" v-if= "affichageA">Team</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/admin" v-if= "affichageB">Admin</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import store from '@/store/index'
export default {
  name: 'user',
  data: function() {
    return{
       affichageA: store.state.Auth.authState.userResponse.userRole == "manager",
       affichageB: store.state.Auth.authState.userResponse.userRole == "admin"
      }
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
