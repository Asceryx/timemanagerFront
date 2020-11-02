<template>
  <div class="workingtimecomponent">
    <h2>Affichage du temps de travail</h2>
    <chart-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChartComponent from './ChartComponent.vue';

@Component({
  components: {
    ChartComponent,
  }
})
export default class WorkingTimesComponent extends Vue {
}
</script>

<style scoped lang="scss">
</style>