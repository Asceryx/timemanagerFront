<template>
  <div class="teamcomponent">
    <h2>Gestion de l'équipe</h2>
    <b-overlay :show="loading" rounded="sm">
        <team-tab-component v-bind:teams="teams" @on-validate="setTeams"/>
    </b-overlay>

    <b-button block variant="success" class="team-validate">Validate</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Select a user</p>
      <b-form-select
        v-model="modalSelected"
        :options="users"
        text-field="information.username"
      >
      </b-form-select>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TeamTabComponent from './TeamTabComponent.vue';
import { Team } from '@/models/team.model';
import TeamService from "./utils/team-services";
import { User } from '@/models/users.model';


@Component({
  components: {
    TeamTabComponent,
  }
})
export default class TeamComponent extends Vue {
  
  private teams: Team[] = [];

  private users: User[];

  private loading = true;

  private modalSelected = '';

  public setTeams(teams: Team[]): void {
    this.teams = teams
  }

  public getAllUser() {
    this.users = [ {id: 1, role: "1", information: { username: 'Toto', email: 'Toto'} } ]
  }

  public postTeam() {
    TeamService.post(this.teams[0])
  }
  
  created(): void {
    TeamService.getAll().then(data => {
      this.teams = data;
    }).finally(() => {
        this.loading = false;
    });

    this.getAllUser()
  }
}
</script>

<style scoped lang="scss">
</style>