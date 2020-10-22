<template>
  <div class="accountcomponent">
    {{ information.username }}
    {{ information.email }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Information } from '@/models/account.model';
import { User } from '@/models/users.model';

@Component
export default class AccountComponent extends Vue {
    @Prop() readonly user: User;

    private information: Information;

    
    public viewAccount(): any {};
    public editAccount(information: Information) : void {};
    public deleteAccount(): void {};


    // CRUD function (Webservices consomation)
    public get(): any {};
    public put(information: Information): void {};
    public post(information: Information ): void {};
    public delete(): void {};
}
</script>

<style scoped lang="scss">
</style>