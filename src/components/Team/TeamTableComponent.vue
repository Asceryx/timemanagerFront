<template>
  <div>
    <b-table striped hover :items="users" :fields="field">
        <template #cell(actions)>
            <b-button variant="danger" size="sm" class="mr-1">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                Remove from team
            </b-button>
        </template>
    </b-table>
    <b-button block variant="primary" class="team-add-user">Add member</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { User } from '@/models/users.model';

@Component
export default class TeamTabComponent extends Vue {
    @Prop()
    private users: User[];

    private field = [
        {
            key: 'information.username',
            label: 'Username',
            sortable: true
        },

        {
            key: 'information.email',
            label: 'Email',
            sortable: true
        },
        { key: 'actions', label: 'Actions' }
    ]

}

</script>

<style scoped lang="scss">
</style>