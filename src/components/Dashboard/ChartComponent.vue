<template>
  <div class="chartcomponent">
    <h3>Affichage des statistiques</h3>
    <chart-stat-component/>
    <h3>Affichage du graphique</h3>

    <div v-if="selected === 'Bar'">
      <char-bar-component/>
    </div>

    <div v-if="selected === 'Line'">
      <char-line-component/>
    </div>

    <div v-if="selected === 'Area'">
      <chart-area-component/>
    </div>

    <div v-if="selected === 'Donut'">
      <chart-donut-component/>
    </div>

    <b-form-select v-model="selected">
      <option v-for="chart in charts" v-bind:key="chart" v-bind:value="chart">{{ chart }}</option> 
    </b-form-select>
    
    <div>
      <label for="datepicker-from">Du</label>
      <b-form-datepicker id="datepicker-from" v-model="start" class="mb-2"></b-form-datepicker>
      <p>Start: '{{ start }}'</p>
    </div>

    <div>
      <label for="datepicker-to">Du</label>
      <b-form-datepicker id="datepicker-to" v-model="end" class="mb-2"></b-form-datepicker>
      <p>End: '{{ end }}'</p>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharBarComponent from "./Charts/ChartBarComponent.vue"
import CharLineComponent from "./Charts/ChartLineComponent.vue"
import ChartAreaComponent from "./Charts/ChartAreaComponent.vue"
import ChartDonutComponent from "./Charts/ChartDonutComponent.vue"
import ChartStatComponent from "./ChartStatComponent.vue"

@Component({
  components: {
    CharBarComponent,
    CharLineComponent,
    ChartAreaComponent,
    ChartDonutComponent,
    ChartStatComponent
  },
})
export default class ChartComponent extends Vue {
  private charts: string[] =  ['Line', 'Bar', 'Area', 'Donut'];
  private selected = 'Line';
  private start = '';
  private end = '';
}
</script>

<style scoped lang="scss">


</style>