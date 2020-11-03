<template>
<div>
    <p><span>From {{ dataValue.from }} to {{ dataValue.to}}</span></p>
    <p><span>Work time average : {{ dataValue.average }}</span></p>
</div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class ChartStatComponent extends Vue {
    private dataValue = 
      { from: "2020-10-12", to:"2020-10-15", average: 12 };
  }
</script>
