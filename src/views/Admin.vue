<template>
  <div class="admin">
    <h1>This is an Admin page</h1>
    <admin-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdminComponent from '@/components/Admin/AdminComponent.vue';

@Component({
  components: {
    AdminComponent,
  }
})
export default class Admin extends Vue {

}
</script>