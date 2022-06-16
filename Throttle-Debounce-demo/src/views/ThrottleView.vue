<template>
  <div class="home">
    <NavBar />
    <TabsNav>
      节流
    </TabsNav>
    <div class="card">
      <div class="card-body">
        <h2>节流</h2>
        <p>&nbsp;</p>
        <h4>理解节流</h4>
        <ul>
          <li>
            <p>举个栗子：在射击游戏中，我们可以通过增加快速点击鼠标的速度来提升射速，但当单点速度快到一定限度时，射速会保持稳定的频率不再增加</p>
          </li>
          <li>
            <p>这就是节流的一个最经典的例子</p>
            <ul>
              <li>不断触发某事件时,只在<strong>单位时间</strong>内触发一次</li>
              <li>节流会<strong>稀释触发的频率</strong></li>
              <li>节流是有选择性的执行事件</li>
            </ul>
          </li>
        </ul>
        <h4>节流的应用</h4>
        <ul>
          <li>监听计算鼠标和滚动条的位置（这里使用防抖是不合理的，在视觉上会造成卡顿）</li>
          <li>鼠标高频触发事件</li>
          <li>输入框搜索实现间接性联想</li>
        </ul>
        <h4>核心代码</h4>
        <img src="../assets/ThCode.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar'
import TabsNav from '../components/Tabs/TabsNav'

</script>

<style scoped>
.card {
  margin: 20px auto;
  width: 80%;
}
</style>