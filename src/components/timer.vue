<template>
  <div>
        <div class="centre">
          <h1>Game Ready</h1>
          <p>00:43</p>
          <h1 class="round">R 1(3)</h1>
        </div>
        <div class="center-penalty">
          <div class="gam">Press Spacebar to Start/Stop.</div>
          <div class="center-time">
            <div class="centre-btn">
              <button>+</button>
              <button>-</button>
            </div>
            <div class="time">{{ time }}</div>
            <!-- <div class="time">02:00</div> -->
            <div class="centre-btn">
              <button>+</button>
              <button>-</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "timer",
    data: function () {
        return {
            time: 121000,
            round: 3,
            overtime: 60000,
        }
    },
    methods: {
        // timerCount() {
        //     this.time[1]++
        //     time[0] = Math.floor((time[2]/100) / 60)
        //     time[1] = Math.floor((time[2]/100) - (time[0] * 60))
        //     time[2] = Math.floor(time[2] - (time[1] * 100) - (time[0] * 6000))
        // },
    //   timeFormat: function(duration) {
    //     return '0' + time[0] + ':' + time[1];
    //   },
      // runTimer: function (time) {
      //     setInterval(() => {
      //         this.time[1]++
      //           time[0] = Math.floor((time[2]/100) / 60)
      //           time[1] = Math.floor((time[2]/100) - (time[0] * 60))
      //           time[2] = Math.floor(time[2] - (time[1] * 100) - (time[0] * 6000))
      //     }, 1000);
      // }
    }
}
</script>

<style lang="scss" scoped>
    .centre {
    justify-content: stretch;
    margin-top: 30px;
    margin-bottom: 20px;
    padding-bottom: 35px;
    p {
      font-size: 60px;
      margin-top: 20px;
    }
    .round {
      font-size: 8em;
    }
  }
  .center-penalty {
    margin-top: 112px;
    font-size: 2em;
    border: 2px solid gray;
    .center-time {
      display: flex;
      height: 100px;
      background-color: yellow;
      font-size: 3em;
      div {
        flex: 1 3 1;
      }
      .centre-btn {
        display: flex;
        flex-direction: column;
        button {
          height: 50%;
          border-radius: 50px;
          width: 80px;
          margin: 10px;
        }
      }
    }
  }
</style>