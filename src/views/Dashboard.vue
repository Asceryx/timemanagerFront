<template>
  <div class="dashboard">
    <h1>This is an Dashboard page</h1>
    <working-times-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WorkingTimesComponent from '@/components/Dashboard/WorkingTimesComponent.vue';

@Component({
  components: {
    WorkingTimesComponent,
  }
})
export default class Dashboard extends Vue {}

</script>