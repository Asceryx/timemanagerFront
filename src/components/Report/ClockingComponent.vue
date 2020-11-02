<template>
  <div class="clockmanager">
    <h1>ClockManager</h1>
    <button type="button" class="btn btn-secondary btn-lg" v-on:click="clock()">
      <span v-if="running">Work period in progress</span>
      <span v-else>Start of work</span>
    </button>

    <div v-if="running">
      <div class="start"> 
        <span>Started at : {{ workingTime.departure | timeFormat }}</span>
      </div>
      <div class="stop">
        <span>Time elapsed : {{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';
import { WorkingTime } from '@/models/worktime.model';

@Component({
  filters: {
    timeFormat(date: Date) {
      moment.locale('fr'); 
      return moment(date).format('LLLL');
    }
  }
})
export default class ClockingComponent extends Vue {
    private workingTime: WorkingTime = { departure: new Date(0), arrival: new Date(0)};
    private running = false;
    private time = "00:00:00";
    private started: number;
    

    public clock() {
      moment.locale('fr'); 
      this.running = !this.running;
      if (this.running) {
        console.log("start")
        this.start()
      }
      else {
        console.log("stop")
        this.stop()
      }
    }

    public start() {
      this.workingTime.departure = new Date();
      this.started = setInterval(this.clockRunning, 10);
      localStorage.setItem('clocking', JSON.stringify(this.running));
      localStorage.setItem('starting', JSON.stringify(moment(this.workingTime.departure).format("YYYY-MM-DDTHH:mm:ss")));
    }

    public stop() {
      this.workingTime.arrival = new Date();
      clearInterval(this.started);
      localStorage.removeItem('clocking');
      localStorage.removeItem('starting');
    }


    public clockRunning() {
      const currentTime: Date = new Date();
      const elapsedTime = new Date(currentTime.getTime() - this.workingTime.departure.getTime());

      const hour = elapsedTime.getUTCHours()
      const min = elapsedTime.getUTCMinutes()
      const sec = elapsedTime.getUTCSeconds()
      
      this.time = this.zeroPrefix(hour, 2) + ":" + 
      this.zeroPrefix(min, 2) + ":" + 
      this.zeroPrefix(sec, 2)
    }

    private zeroPrefix(num, digit) {
      let zero = '';
      for(let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }


    created() {
      const saveRunning: boolean = (localStorage.getItem('clocking') === 'true'); 
      const saveStartTime: string | null =  localStorage.getItem('starting');

      if(saveStartTime !== null) {
        this.workingTime.departure = moment(saveStartTime, "YYYY-MM-DDTHH:mm:ss").toDate();
      }

      if (saveRunning === true) {
        this.started = setInterval(this.clockRunning, 10);
      }
      this.running = saveRunning;
    }
}

</script>

<style scoped lang="scss">
</style>