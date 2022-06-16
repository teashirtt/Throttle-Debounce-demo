<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">首页</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="Debounce">防抖</a>
          <a class="nav-link active" href="Throttle">节流</a>
          <a class="nav-link active" href="AboutMe">AboutMe</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
.container-fluid {
  margin: 10px 10px;
  padding-left: 30px;
  border: ridge;
  border-radius: 10px;
}

.navbar-brand {
  font-size: 25px;
}

.nav-link {
  font-size: 20px;
}
</style>