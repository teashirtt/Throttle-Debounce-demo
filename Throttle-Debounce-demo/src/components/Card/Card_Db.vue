<template>
    <div class="card-body c">
        <h4 class="card-title">> 防抖</h4>
        <h6 class="card-subtitle mb-2 text-muted">Debounce</h6>
        <p class="card-text">触发事件后函数不会立即执行，而是在n秒之后执行</p>
        <p class="card-text">如果n秒之内又触发了事件，则会重新计算函数执行时间</p>
        <br><br>
        <a href="Debounce" class="card-link">详细介绍</a>
        <br><br>
        <a href="DebounceExample" class="card-link">查看实例</a>
    </div>
</template>


<script setup>
</script>

<style scoped>
.card-body {
    border: solid;
    border-radius: 20px;
    height: 300px;
}

.card-body:hover {
    box-shadow: 10px 10px 10px gray;
    transition: 300ms;
}
</style>