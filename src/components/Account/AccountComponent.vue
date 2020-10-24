<template>
  <div class="accountcomponent">
    <h2>Affichage du compte</h2>
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

    
    public viewAccount(): any {return}
    public editAccount(information: Information): void {return}
    public deleteAccount(): void {return}


    // CRUD function (Webservices consomation)
    public get(): any {return}
    public put(information: Information): void {return}
    public post(information: Information ): void {return}
    public delete(): void {return}
}
</script>

<style scoped lang="scss">
</style>