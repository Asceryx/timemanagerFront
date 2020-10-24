<template>
  <div class="teamcomponent">
    <h2>Affichage de l'équipe</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Manager, User } from '@/models/users.model';
import { WorkingTime } from '@/models/worktime.model';
import { Team } from '@/models/team.model';

@Component
export default class TeamComponent extends Vue {
  @Prop() private AuthUser: Manager;

  public getTeams() : Team[]|any {}
  public setTeams(teams: Team[]) : void {};

  public addTeam(team: Team): void {};
  public removeTeam(team: Team): void {};

  public addUserToTeam(user: User, Team: Team) : void {};
  public removeUserFromTeam(user: User, Team: Team) : void {};

  // CRUD function
  public get(): Team | any {};
  public getAll() : Team[] | any {};
  public put(team: Team): void {};
  public post(team: Team): void {};
  public delete(team: Team): void {}; 

}
</script>

<style scoped lang="scss">
</style>