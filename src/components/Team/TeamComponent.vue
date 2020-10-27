<template>
  <div class="teamcomponent">
    <h2>Gestion de l'équipe</h2>
    <team-tab-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/models/users.model';
import TeamTabComponent from './TeamTabComponent.vue';
import { Team } from '@/models/team.model';

@Component({
  components: {
    TeamTabComponent,
  }
})
export default class TeamComponent extends Vue {

  public getTeams(): Team[]|any {return}
  public setTeams(teams: Team[]): void {return}

  public addTeam(team: Team): void {return}
  public removeTeam(team: Team): void {return}

  public addUserToTeam(user: User, Team: Team): void {return}
  public removeUserFromTeam(user: User, Team: Team): void {return}

  // CRUD function
  public get(): Team | any {return}
  public getAll(): Team[] | any {return}
  public put(team: Team): void {return}
  public post(team: Team): void {return}
  public delete(team: Team): void {return} 

}
</script>

<style scoped lang="scss">
</style>