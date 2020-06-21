<template>
  <div>
    <div id="main">
      <div>
        <div class="red main-score">
            <h1>Red Player</h1>
            <div class="scores">{{ redPlayer }}</div>
        </div>
        <div class="penalty">
          <div class="gam red">Gam-jeom: {{ redGamJeom }}</div>
          <div class="btn-sect">
            <div class="btn-inner">
              <div class="btn">
                <button @click="redPlayer--">-</button>
                <button @click="redPlayer++">+</button>
              </div>
              <div class="label">Score</div>
            </div>
            <div class="btn-inner">
              <div class="btn">
                <button @click="notRedFoul()">-</button>
                <button @click="redFoul()">+</button>
              </div>
              <div class="label">Gam-jeom</div>
            </div>
          </div>
          <div class="winning">
            <button>Winner (Woo-se-girok)</button>
            <button>Winner by K.O.</button>
          </div>
        </div>
      </div>
      <timer />
      <div>
        <div class="blue main-score">
            <h1>Red Player</h1>
            <div class="scores">{{ bluePlayer}}</div>
        </div>
        <div class="penalty">
          <div class="gam blue">Gam-jeom: {{ blueGamJeom }}</div>
          <div class="btn-sect">
            <div class="btn-inner">
              <div class="btn">
                <button @click="bluePlayer--">-</button>
                <button @click="bluePlayer++">+</button>
              </div>
              <div class="label">Score</div>
            </div>
            <div class="btn-inner">
              <div class="btn">
                <button @click="notBlueFoul()">-</button>
                <button @click="blueFoul()">+</button>
              </div>
              <div class="label">Gam-jeom</div>
            </div>
          </div>
          <div class="winning">
            <button>Winner (Woo-se-girok)</button>
            <button>Winner by K.O.</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import timer from './timer';
export default {
    name: "score",
    components: {
        timer
    },
    computed: {},
    methods: {
      redFoul() {
        this.bluePlayer++
        this.redGamJeom++
      },
      notRedFoul() {
        // if (this.bluePlayer === 0 && this.redGamJeom === 0) {
          
        // }
        this.bluePlayer--
        this.redGamJeom--
      },
      blueFoul() {
        this.redPlayer++
        this.blueGamJeom++
      },
      notBlueFoul() {
        // if (this.bluePlayer === 0 && this.redGamJeom === 0) {
        //   this.bluePlayer = 0
        //   this.redGamJeom = 0
        // }
        this.bluePlayer--
        this.redGamJeom--
      },
      // pointFormat: function(points) {
      //   if ( this.points >= 1 && this.points < 10 ) {
      //     return '0' + this.points
      //   } else ( this.points > 10 ) {
      //     return this.points
      //   }
      // }
    },
    data: function () {
      return {
        redGamJeom: 0,
        blueGamJeom: 0,
        redPlayer: 0,
        bluePlayer: 0
      }
    }
}
</script>

<style lang="scss" scoped>
.red {background-color: red;}
.blue {background-color: blue;}
ul{margin: 0;}
#main {
  display: flex;
  text-align: center;
  div {
    flex: 1;
    h1 {
      font-size: 4em;
      color: #fff;
      margin: 0;
    }
    .scores {
      font-size: 20em;
      color: #fff;
    }
  }
  .penalty {
    margin-top: 10px;
    .gam {
      font-size: 2em;
      text-align: start;
    }
    .btn-sect {
      display: flex;
      background-color: #6b6767;
      .btn-inner {
        border: 1px grey solid;
        .btn {
          display: flex;
          margin: 10px;
          button {
            width: 50%;
            height: 25px;
            border-radius: 20px;
          }
        }
        .label {
          color: white;
        }
      }
    }
    .winning {
      display: flex;
      button {
        width: 50%;
        height: 40px;
        border-radius: 20px;
      }
    }
  }
  
  
}
</style>