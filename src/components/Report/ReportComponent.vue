<template>
  <div class="reportcomponent">
    <h2>Affichage du report de temps</h2>
    <clocking-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClockingComponent from "./ClockingComponent.vue";

@Component({
    components: {
      ClockingComponent,
    },
  })
export default class ReportComponent extends Vue {

}
</script>

<style scoped lang="scss">
</style>