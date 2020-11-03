<template>
  <div class="chartmanager">
    <donut-chart
      id="donut"
      :data="dataValue"
      resize="true"
      labels='[ "Hours of works" ]'
      grid="true"
      grid-text-weight="bold"
    >
    </donut-chart>
  </div>
</template>

<script lang="ts">
  import { DonutChart } from "vue-morris";
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
      DonutChart,
    },
  })
  export default class ChartDonutComponent extends Vue {
    private dataValue = [
      { label: "2020-10-12", value: 12 },
      { label: "2020-10-14", value: 15 },
      { label: "2020-10-16", value: 23 },
    ];
  }
</script>
