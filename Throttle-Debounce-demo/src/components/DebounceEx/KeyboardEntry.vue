<template>
    <div class="card">
        <div class="cardbody">
            <div class="row">
                <div class="col-5">
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked
                            @click="fun(250)">
                        <label class="btn btn-outline-success" for="btnradio1">250ms</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
                            @click="fun(500)">
                        <label class="btn btn-outline-success" for="btnradio2">500ms</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"
                            @click="fun(1000)">
                        <label class="btn btn-outline-success" for="btnradio3">1000ms</label>
                    </div>
                    <div class="form-floating">
                        <textarea v-model="ct" class="form-control" placeholder="Leave a comment here"
                            id="floatingTextarea" @input="func()"></textarea>
                        <label for="floatingTextarea">input</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-6 out">
                <div>模拟无防抖的请求过程</div>
                <FactOutput :content="content" ref="SonRef1" class="area" />
            </div>
            <div class="col-6 out">
                <div>模拟有防抖的请求过程</div>
                <DebouceOutput :content="content" ref="SonRef2" class="area" />
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref,reactive } from 'vue';
import FactOutput from './FactOutput';
import DebouceOutput from './DebouceOutput';

let ct = ref('');
let SonRef1 = ref('');
let SonRef2 = ref('');
let content = reactive({
    cnt1: 0,
    cnt2: 0,
    cont1: [],
    cont2: [],
})

let time = null;
let interval = 250;
const fun = (inter) => {
    interval = inter;
    SonRef1.value.ClearOut();
    SonRef2.value.ClearOut();
    let st = document.querySelector('.form-control');
    st.value = "";
}

const func = () => {
    content.cnt1++;
    content.cont1.push({
        id: content.cnt1,
        word: ct.value
    });
    if (content.cont1.length > 15) content.cont1.shift();
    if (time) {
        clearTimeout(time);
    }
    time = setTimeout(() => {
        content.cnt2++;
        content.cont2.push({
            id: content.cnt2,
            word: ct.value
        })
        if (content.cont2.length > 15) content.cont2.shift();
    }, interval)
};

</script>

<style scoped>
.card {
    margin: 5px 95px;
}

.form-control {
    margin-top: 3px;
}

</style>