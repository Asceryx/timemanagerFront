<template>
  <div class="teamcomponent">
    <h2>Gestion de l'équipe</h2>
    <b-overlay :show="loading" rounded="sm">
        <team-tab-component v-bind:teams="teams"/>
    </b-overlay>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/models/users.model';
import TeamTabComponent from './TeamTabComponent.vue';
import { Team } from '@/models/team.model';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://demo0330246.mockable.io',
  timeout: 1000
});

@Component({
  components: {
    TeamTabComponent,
  }
})
export default class TeamComponent extends Vue {
  
  private teams: Team[] = [];

  private loading = true;

  public setTeams(): void {return}

  public addTeam(): void {return}
  public removeTeam(): void {return}

  public addUserToTeam(): void {return}
  public removeUserFromTeam(): void {return}

  

  // CRUD function
  public async getAll(): Promise<Team[]> {
    return await api.get('/team').then((response) => response.data );
  }
  public async get(user: User): Promise<Team> {
    return await api.get('/team', { params: { "user_id": user.id } }).then((response) => response.data );
  }

  public put(): void {return}
  public post(): void {return}
  public delete(): void {return} 

  created(): void {
    this.getAll().then(data => {
      this.teams = data;
    }).finally(() => {
        this.loading = false;
    });
  }
}
</script>

<style scoped lang="scss">
</style>