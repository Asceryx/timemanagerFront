<template>
  <div class="admincomponent">
    <h2>Liste de tous les utilisateurs:</h2>
    <b-table striped hover :items="listUser">
      <template #cell(actions)>
        <b-button variant="danger" size="sm">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          Remove user
        </b-button>
      </template>
    </b-table>
    <b-button block variant="primary" class="team-add-user" v-b-modal.modal-1>Add user</b-button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return{
          listUser:  [
          {username: "toto",email: "toto@email.com",role: "manager",actions:""},
          {username: "titi",email: "titi@email.com",role: "employee",actions:""}
          ],

          field: [
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
          {
            key: "information.userRole",
            label: "Role",
            sortable: true,
          },
          { key: "actions", label: "Actions" },
          ]
        }
    },
  
  }
</script>