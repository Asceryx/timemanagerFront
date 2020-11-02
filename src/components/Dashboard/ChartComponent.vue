<template>
  <div class="chartcomponent">
    <h3>Affichage des statistique d'équipe</h3>
    <h3>Affichage du graphique</h3>
    <char-bar-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharBarComponent from "./Charts/ChartBarComponent.vue"

@Component({
  components: {
    CharBarComponent,
  },
})
export default class ChartComponent extends Vue {
}
</script>

<style scoped lang="scss">
</style>