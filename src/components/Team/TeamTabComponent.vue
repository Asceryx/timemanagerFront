<template>
  <div>
      <b-card no-body>
        <b-tabs card>
            <b-tab v-for="(tab, index) in tabs" :key="index" :title="tab.value.name" :active="index==0">
                <p><team-table-component :users="tab.value.members"/></p>
                <template #title>
                  <div v-show = "tab.edit == false">
                    <label>{{ tab.value.name }}<b-button v-on:click="newTab(tab)" size="is-small" variant="link"><b-icon icon="pencil-square"></b-icon></b-button></label>
                  </div>
                  <input 
                  v-show = "tab.edit == true" 
                  v-model = "tab.value.name"
                  @blur= "tab.edit=false; globalEditTab=false"
                  @keyup.enter = "tab.edit=false; globalEditTab=false"
                  >
                </template>        
                <b-button block variant="danger" class="team-delete" @click="closeTab(index)">Delete teams</b-button>
            </b-tab>

            <template #tabs-end>
                <b-nav-item role="presentation" @click.prevent="addTeam" href="#"><p class="h2 mb-2"><b-icon icon="plus"></b-icon></p></b-nav-item>
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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Team } from '@/models/team.model';
import TeamTableComponent from './TeamTableComponent.vue';

export interface Tab {
  edit: boolean;
  value: Team;
}

@Component({
  components: {
    TeamTableComponent,
  }
})
export default class TeamTabComponent extends Vue {

  @Prop()
  private teams: Team[];

  private globalEditTab = false;

  private tabs: Tab[] = [];

  @Watch("teams")
  public updateTeam() {
    this.teamsToTab();
  }

  public newTab(tab: Tab): void {
    tab.edit=true && !this.globalEditTab;
  } 

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

  public teamsToTab() {
    this.tabs = [];
    for (const t in this.teams) {
      this.tabs.push({edit: false, value: this.teams[t]})
    }
  }

  public created() {
    console.log(this.teams)
    this.teamsToTab();
    console.log(this.tabs)
  } 
}    
</script>


<style scoped lang="scss">
.team-delete {
    padding: 0.5em;
}
.btn:focus, .btn:active:focus, .btn.active:focus{
    outline:none;
    box-shadow:none;
}

</style>