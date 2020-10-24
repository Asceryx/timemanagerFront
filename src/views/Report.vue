<template>
  <div class="report">
    <h1>This is an Report page</h1>
    <report-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ReportComponent from '@/components/Report/ReportComponent.vue';

@Component({
  components: {
    ReportComponent,
  }
})
export default class Report extends Vue {}

</script>