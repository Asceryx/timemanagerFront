<template>
  <div class="workingtimecomponent">
    <h2>Affichage du temps de travail</h2>
    <chart-component/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { User } from '@/models/users.model';
import { WorkingTime } from '@/models/worktime.model';
import { Team } from '@/models/team.model';
import ChartComponent from './ChartComponent.vue';

@Component({
  components: {
    ChartComponent,
  }
})
export default class WorkingTimesComponent extends Vue {

  @Prop() 
  readonly user: User;

  private workingTime: WorkingTime[];

  public getTeamsWorkingTime(teams: Team, period: WorkingTime): WorkingTime[] {return []}
  
  public viewAverageWorkingTimesDay(teams: Team, period: WorkingTime): number {return 0}

  public viewAverageWorkingTimeHours(teams: Team, period: WorkingTime): number {return 0}
  
  public viewDailyWorkingTime(teams: Team, period: WorkingTime): number {return 0}
  
  public viewWeeklyWorkingTime(teams: Team, period: WorkingTime): number {return 0}
}
</script>

<style scoped lang="scss">
</style>