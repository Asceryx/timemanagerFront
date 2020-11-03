<template>
  <div class="chartmanager">
    <area-chart
      id="area"
      :data="dataValue"
      xkey="date"
      ykeys='[ "value" ]'
      line-colors='[ "#FF6384"]'
      grid="true"
      grid-text-weight="bold"
      resize="true"
    >
    </area-chart>
  </div>
</template>

<script lang="ts">
  import { AreaChart } from "vue-morris";
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
      AreaChart,
    },
  })
  export default class ChartAreaComponent extends Vue {
    private dataValue = [
      { date: "2020-10-12", value: 12 },
      { date: "2020-10-14", value: 15 },
      { date: "2020-10-16", value: 23 },
    ];
  }
</script>
