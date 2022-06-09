<template>
    <ul class="nav nav-tabs tabs">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" @click="func">
                <slot></slot>
            </a>
        </li>
        <li class="nav-item ex">
            <a class="nav-link active">实例</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "TabsNavEx",
    methods: {
        func: function () {
            if (window.location.pathname === "/DebounceExample") this.$router.push('/Debounce');
            if (window.location.pathname === "/ThrottleExample") this.$router.push('/Throttle');
        }
    }
}
</script>

<style scoped>
.tabs {
    margin: 7px 80px;
}

.ex {
    margin-left: 30px;
}
</style>