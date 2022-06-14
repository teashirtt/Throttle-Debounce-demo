<template>
    <NavBar />
    <div class="container">
        <div class="text">关注我</div>
        <github-one theme="outline" size="44" fill="#000000" @click="fun" />
    </div>

</template>

<script setup>
import NavBar from '../components/NavBar'
import { GithubOne } from '@icon-park/vue-next';

const fun = () => {
    window.open('https://github.com/teashirtt');
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    gap: 20px;
}

.text {
    font-size: 20px;
    font-weight: bold;
}
</style>