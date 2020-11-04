<template>
  <div class="workingtimecomponent">
    <h2>Affichage du temps de travail</h2>
    <b-table striped hover :items="workingTimes">
      <template #cell(departure)="data">
        <b class="text-info">{{ data.value | timeFormat }}</b>
      </template>

      <template #cell(arrival)="data">
        <b class="text-info">{{ data.value | timeFormat }}</b>
      </template>

    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { WorkingTime } from '@/models/worktime.model';
import moment from 'moment';


@Component({
  filters: {
    timeFormat(date: Date) {
      moment.locale('fr'); 
      return moment(date.toString()).format('LLLL');
    }
  }
})
export default class WorkingTimesComponent extends Vue {
  private workingTimes: WorkingTime[] = [ 
    
    { departure: new Date(2020, 10, 24, 8, 30, 0), arrival:  new Date(2020, 10, 24, 17, 30, 0) },
    { departure: new Date(2020, 10, 25, 8, 30, 0), arrival: new Date(2020, 10, 25, 17, 30, 0) },
    { departure: new Date(2020, 10, 26, 8, 30, 0), arrival: new Date(2020, 10, 26, 17, 30, 0) },
    { departure: new Date(2020, 10, 27, 8, 30, 0), arrival: new Date(2020, 10, 27, 17, 30, 0)}
  ]
}
</script>

<style scoped lang="scss">
</style>