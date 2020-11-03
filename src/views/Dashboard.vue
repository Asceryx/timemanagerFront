<template>
  <div class="dashboard">
    <h1>This is an Dashboard page</h1>

    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item to="/dashboard/workingtimes" exact exact-active-class="active">
            Workingtimes
          </b-nav-item>

          <b-nav-item to="/dashboard/chart" exact exact-active-class="active"> 
            Chart
          </b-nav-item>
          
        </b-nav>
      </b-card-header>
      
      <b-card-body class="text-center">
        <router-view/>
      </b-card-body>
    </b-card>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import ChartComponent from "@/components/Dashboard/ChartComponent.vue";
  import WorkingTimesComponent from "@/components/Dashboard/WorkingTimesComponent.vue";

  @Component({
    components: {
      ChartComponent,
      WorkingTimesComponent
    },
  })
  export default class Dashboard extends Vue {}
</script>
