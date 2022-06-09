<template>
  <div class="home">
    <NavBar />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <Card_Db />
      </div>
      <div class="col-6">
        <Card_Th />
      </div>
    </div>
    <img src="../assets/test.png">
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar'
import Card_Db from '../components/Card/Card_Db'
import Card_Th from '../components/Card/Card_Th'

</script>

<style>
img {
  display: block;
  width: 600px;
  padding-top: 13px;
  margin: 0 auto;
}

.col-5 {
  width: 200px;
}
</style>