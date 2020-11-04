<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab
          v-for="(tab, index) in tabs"
          :key="index"
          :title="tab.value.name"
          :active="index == 0"
        >
          <p><team-table-component :users="tab.value.members" /></p>
          <template #title>
            <div v-show="tab.edit == false">
              <label
                >{{ tab.value.name
                }}<b-button
                  v-on:click="newTab(tab)"
                  size="is-small"
                  variant="link"
                  ><b-icon icon="pencil-square"></b-icon></b-button
              ></label>
            </div>
            <input
              v-show="tab.edit == true"
              v-model="tab.value.name"
              @blur="
                tab.edit = false;
                globalEditTab = false;
                editTeams = tabToTeam();
                onValidate();
              "
              @keyup.enter="
                tab.edit = false;
                globalEditTab = false;
                editTeams = tabToTeam();
                onValidate();
              "
            />
          </template>
          <b-button
            block
            variant="danger"
            class="team-delete"
            @click="removeTeam(index)"
            >Delete teams</b-button
          >
        </b-tab>

        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="addTeam" href="#"
            ><p class="h2 mb-2"><b-icon icon="plus"></b-icon></p
          ></b-nav-item>
        </template>

        <template #empty>
          <div class="text-center text-muted">
            There are no teams<br />
            Create a new team by using the <b>+</b> button above.
          </div>
        </template>

        <b-modal id="modal" title="Add a user">
          <p class="my-4">Select a user</p>
          <b-form-select
            v-model="modalSelected"
            :options="users"
            text-field="information.username"
          >
          </b-form-select>
        </b-modal>
      </b-tabs>
    </b-card>
  </div>
</template>

<script lang="ts">
  import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
  import { Team } from "@/models/team.model";
  import TeamTableComponent from "./TeamTableComponent.vue";

  export interface Tab {
    edit: boolean;
    value: Team;
  }

  @Component({
    components: {
      TeamTableComponent,
    },
  })
  export default class TeamTabComponent extends Vue {
    @Prop()
    private readonly teams: Team[];

    private globalEditTab = false;

    private tabs: Tab[] = [];

    private editTeams: Team[];

    private modalSelected = "";

    @Watch("teams")
    public updateTeam() {
      this.teamsToTab();
    }

    public newTab(tab: Tab): void {
      tab.edit = true && !this.globalEditTab;
    }

    @Emit()
    onValidate() {
      return this.editTeams;
    }

    public addTeam(): void {
      this.tabs.push({
        edit: false,
        value: {
          name: "New Teams",
          members: [],
        },
      });
      this.editTeams = this.tabToTeam();
      this.onValidate();
    }

    public removeTeam(index: number): void {
      for (let i = 0; i < this.tabs.length; i++) {
        if (i === index) {
          this.tabs.splice(i, 1);
        }
      }
      this.editTeams = this.tabToTeam();
      this.onValidate();
    }

    public teamsToTab() {
      this.tabs = [];
      for (const t in this.teams) {
        this.tabs.push({ edit: false, value: this.teams[t] });
      }
    }

    public tabToTeam(): Team[] {
      const newTeam: Team[] = [];
      for (const t in this.tabs) {
        newTeam.push(this.tabs[t].value);
      }
      return newTeam;
    }



    public created() {
      this.teamsToTab();
    }
  }
</script>

<style scoped lang="scss">
  .team-delete {
    padding: 0.5em;
  }
  .btn:focus,
  .btn:active:focus,
  .btn.active:focus {
    outline: none;
    box-shadow: none;
  }
</style>
