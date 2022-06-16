<template>
  <div>
    <button type="button" class="btn btn-warning bn" @click="throttle">Point</button>

    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked
        @click="func(250)">
      <label class="btn btn-outline-success" for="btnradio1">250ms</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" @click="func(500)">
      <label class="btn btn-outline-success" for="btnradio2">500ms</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" @click="func(1000)">
      <label class="btn btn-outline-success" for="btnradio3">1000ms</label>
    </div>

    <div class="line"></div>
    <div class="cards">
      <div class="card w-35">
        <div class="card-body">
          <h5 class="card-title">实际触发次数：{{ val1 }}</h5>
        </div>
      </div>
      <br><br><br>
      <div class="card w-35">
        <div class="card-body">
          <h5 class="card-title">节流后触发次数：{{ val2 }}</h5>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
let val1 = ref(0);
let val2 = ref(0);
let time = ref(250);
let flag = true;

const throttle = () => {
  val1.value++;
  if (flag) {
    setTimeout(() => {
      val2.value++;
      flag = true;
    }, time.value)
  }
  flag = false;
}

const func = (interval) => {
  if (val1.value || val2.value) {
    val1.value = val2.value = 0;
  }
  time.value = interval;
}
</script>

<style scoped>
.bn {
  width: 130px;
  height: 130px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 100px;
  position: absolute;
  left: 14%;
  top: 43%;
}

.line {
  width: 2px;
  height: 450px;
  background: -webkit-linear-gradient(top, #fff -4%, #240808 50%, #fff 100%);
  position: absolute;
  left: 36%;
  top: 24%;
}

.cards {
  position: absolute;
  left: 46%;
  top: 34%;
}

.card-body {
  padding-top: 20px;
  width: 600px;
}

.btn-group {
  margin: 6px 80px;
}
</style>



