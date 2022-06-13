<template>
  <div class="card" id="card1">
    <div class="card-body">
      <div v-for="item in props.content.cont1" :key="item.id" class="sc1">
        {{ item.word }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const ClearOut = () => {
  let st = document.querySelectorAll('.sc1');
  for (let it of st) it.innerHTML = "";
};

const ToBottom = () => {
  let scroll = document.getElementById('card1');
  setTimeout(() => {
    scroll.scrollTop = scroll.scrollHeight;
  }, 100);
}

defineExpose({
  ClearOut,
  ToBottom
})
</script>

<style scoped>
.card {
  margin: 0 auto;
  width: 65%;
  height: 300px;
  overflow-y: auto;
}
</style>