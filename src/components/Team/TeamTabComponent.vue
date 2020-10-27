<template>
  <div>
      <b-card no-body>
        <b-tabs card>
            <b-tab v-for="(tab, index) in tabs" :key="index" :title="tab.value.name" :active="index==0">
                <p><team-table-component :users="tab.value.members"/></p>

                <template #title>
                  <div v-show = "tab.edit == false">
                    <label>{{ tab.value.name }} <b-button v-on:click="tab.edit=true && !globalEditTab; globalEditTab=true" variant="link"><b-icon icon="pencil-square"></b-icon></b-button></label>
                  </div>
                  <input v-show = "tab.edit == true" v-model = "tab.value.name"
                  v-on:blur= "tab.edit=false; globalEditTab=false"
                  @keyup.enter = "tab.edit=false; globalEditTab=false">
                </template>
        
                <b-button block variant="danger" class="team-delete" @click="closeTab(index)">Delete teams</b-button>
            </b-tab>

            

            <template #tabs-end>
                <b-nav-item role="presentation" @click.prevent="addTeam" href="#"><b>+</b></b-nav-item>
            </template>

            <template #empty>
          <div class="text-center text-muted">
            There are no teams<br>
            Create a new team by using the <b>+</b> button above.
          </div>
        </template>
        </b-tabs>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Team } from '@/models/team.model';
import TeamTableComponent from './TeamTableComponent.vue';

@Component({
  components: {
    TeamTableComponent,
  }
})
export default class TeamTabComponent extends Vue {
    private teams: Team[] = [
        {
            id: 1,
            name: "Team 1",
            members: [
                { id: 1, role: "user", information: { username: "Dickerson", email: "Dickerson@email.com" } },
                { id: 2, role: "user", information: { username: "Larsen", email: "Larsen@email.com" } },
                { id: 3, role: "user", information: { username: "Geneva", email: "Geneva@email.com" } },
            ]
        },
        {
            id: 2,
            name: "Team 2",
            members: [
                { id: 1, role: "user", information: { username: "Dickerson", email: "Dickerson@email.com" } },
                { id: 12, role: "user", information: { username: "Jami", email: "Jami@email.com" } },
                { id: 11, role: "user", information: { username: "Carney", email: "Carney@email.com" } },
            ]
        }
    ];

    private globalEditTab = false;
    private tabs: any[] = [];

    public addTeam(): void {
        this.tabs.push({
          edit: false,
          value: 
          {
            name: "New Teams",
            members: []
          }
        })
    }

    public removeTeam(index: number): void {
        for (let i = 0; i < this.teams.length; i++) {
          if (i === index) {
            this.teams.splice(i, 1)
          }
        }
    }

    public created() {
      console.log(this.teams)
      for (const t in this.teams) {
        this.tabs.push({edit: false, value: this.teams[t]})
      }
      console.log(this.tabs)
    } 
}    
</script>


<style scoped lang="scss">
.team-delete {
    padding: 0.5em;
}
</style>