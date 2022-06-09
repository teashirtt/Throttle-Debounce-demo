<template>
  <div class="card">
    <div class="card-body">
      <div v-for="item in props.content.cont2" :key="item.id" class="sc2">
        {{ item.word }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps ({
  content: {
    type: Object,
    required: true,
  },
});

const ClearOut = () => {
  let st = document.querySelectorAll('.sc2');
  for (let it of st) it.innerHTML = "";
  console.log(1);
}

defineExpose({
  ClearOut
})
</script>

<style scoped>
</style>