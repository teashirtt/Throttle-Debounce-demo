<template>
    <div class="card-body">
        <h4 class="card-title">> 节流</h4>
        <h6 class="card-subtitle mb-2 text-muted">Throttle</h6>
        <p class="card-text">如果一个函数持续的频繁的触发，那么就让其触发周期保持在n秒</p>
        <br><br><br>
        <a href="Throttle" class="card-link">详细介绍</a>
        <br><br>
        <a href="ThrottleExample" class="card-link">查看实例</a>
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
    box-shadow: 3px 3px 10px gray;
    transition: 500ms;
}
</style>