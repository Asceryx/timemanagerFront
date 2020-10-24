<template>
  <div class="reportcomponent">
    <h2>Affichage du report de temps</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { WorkingTime } from '@/models/worktime.model';

@Component
export default class ReportComponent extends Vue {
  private workingTime: WorkingTime;

  public getWorkingTime(): any {return}
  public setWorkingTime(workingTime: WorkingTime): void {return}

   // CR function (Webservices consomation)
  public get(): any {return}
  public getAll(): any {return}
  public post(workingTime: WorkingTime ): void {return}
  

}
</script>

<style scoped lang="scss">
</style>