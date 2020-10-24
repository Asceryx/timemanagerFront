<template>
  <div class="account">
    <h1>This is an Account page</h1>
    <account-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AccountComponent from '@/components/Account/AccountComponent.vue';

@Component({
  components: {
    AccountComponent,
  }
})
export default class Account extends Vue {}

</script>