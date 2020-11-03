<template>
  <div class="chartmanager">
    <line-chart
      id="line"
      :data="dataValue"
      xkey="date"
      resize="true"
      ykeys='["value"]'
      labels='["Hours of works"]'
      line-colors='["#576277"]'
      hide-hover="auto"
      xLabels="day"
    >
    </line-chart>
  </div>
</template>

<script lang="ts">
  import { LineChart } from "vue-morris";
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
      LineChart,
    },
  })
  export default class CharBarComponent extends Vue {
    private dataValue = [
      { date: "2020-10-12", value: 12 },
      { date: "2020-10-14", value: 15 },
      { date: "2020-10-16", value: 23 },
    ];
  }
</script>
