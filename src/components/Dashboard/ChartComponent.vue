<template>
  <div class="chartcomponent">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ChartComponent extends Vue {
  
  @Prop()
  readonly datachart : string;


}
</script>

<style scoped lang="scss">
</style>