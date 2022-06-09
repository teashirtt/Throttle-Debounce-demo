<template>
  <div class="card">
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

defineExpose({
  ClearOut
})
</script>

<style scoped>
</style>