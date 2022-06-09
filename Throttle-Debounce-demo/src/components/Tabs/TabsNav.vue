<template>
    <ul class="nav nav-tabs tabs">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page">
                <slot></slot>
            </a>
        </li>
        <li class="nav-item ex">
            <a class="nav-link" @click="func">实例</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "TabsNav",
    methods: {
        func: function () {
            if (window.location.pathname === "/Debounce") this.$router.push('/DebounceExample');
            if (window.location.pathname === "/Throttle") this.$router.push('/ThrottleExample');
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