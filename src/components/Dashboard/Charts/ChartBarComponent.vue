<template>
  <div class="chartmanager">
    <bar-chart
      id="bar"
      :data="dataValue"
      xkey="date"
      ykeys='[ "value" ]'
      resize="true"
      labels='[ "Hours of works" ]'
      bar-colors='[ "#FF6384" ]'
      grid="true"
      grid-text-weight="bold"
    >
    </bar-chart>
  </div>
</template>

<script lang="ts">
  import { BarChart } from "vue-morris";
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
      BarChart,
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
