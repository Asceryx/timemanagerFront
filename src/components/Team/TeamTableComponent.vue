<template>
  <div>
    <b-table striped hover :items="listUser" :fields="field">
      <template #cell(actions)="row">
        <b-button
          variant="danger"
          size="sm"
          class="mr-1"
          @click="deleteUser(row.index)"
        >
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          Remove from team
        </b-button>
      </template>
    </b-table>
    <b-button block variant="primary" class="team-add-user" v-b-modal.modal-1>Add member</b-button>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { User } from "@/models/users.model";

  @Component
  export default class TeamTabComponent extends Vue {
    @Prop()
    private users: User[];

    private listUser: User[];

    private field = [
      {
        key: "information.username",
        label: "Username",
        sortable: true,
      },

      {
        key: "information.email",
        label: "Email",
        sortable: true,
      },
      { key: "actions", label: "Actions" },
    ];

    private deleteUser(index: number) {
      this.listUser.splice(index, 1);
    }

    created() {
      this.listUser = this.users;
    }
  }
</script>

<style scoped lang="scss"></style>
