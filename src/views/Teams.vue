<template>
  <div class="team">
    <h1>This is an Team page</h1>
    <team-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TeamComponent from '@/components/Team/TeamComponent.vue';

@Component({
  components: {
    TeamComponent,
  }
})
export default class Teams extends Vue {}

</script>