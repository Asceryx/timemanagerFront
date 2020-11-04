<template>
<div>
    <p><span>From {{ dataValue.period.departure | timeFormat }} to {{ dataValue.period.arrival | timeFormat }}</span></p>
    <p><span>Work time average : {{ dataValue.average }}</span></p>
</div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import moment from 'moment';

  @Component({
  filters: {
    timeFormat(date: Date) {
      moment.locale('fr'); 
      return moment(date.toString()).format('LLLL');
    }
  }
})
  export default class ChartStatComponent extends Vue {
    private dataValue =
    { period : { departure: new Date(2020,10,12, 0, 0, 0 ), arrival: new Date(2020, 10, 14, 0, 0, 0) }, value: 12} 
  }
</script>
