<template>
  <div class="home">
    <NavBar />
    <TabsNav>
      防抖
    </TabsNav>
    <div class="card">
      <div class="card-body">
        <h2>防抖</h2>
        <p>&nbsp;</p>
        <h4>理解防抖</h4>
        <ul>
          <li>
            <p>
              举个栗子：在MOBA游戏中点击回城，人物会出现准备回城的动画（比如头上出个传送门），这个时候如果立刻不断点击回城，那么每次点击都会取消上一次的动画和倒计时过程并生成最新的，直到某次一定时间内都没有再次触发就会正常回城
            </p>
          </li>
          <li>
            <p>这就是防抖的一个最经典的例子</p>
            <ul>
              <li>当事件触发时，相应的函数不会被立即触发，而是<strong>会被推迟执行</strong></li>
              <li>只有当<strong>等待一段时间后也没有再次触发该事件</strong>，那么才会<strong>真正执行响应函数</strong></li>
              <li>简而言之，以“最后”的操作执行为准</li>
            </ul>
          </li>
        </ul>
        <h4>防抖的应用</h4>
        <blockquote>
          <p>奥义在于，对于某类会高频触发的事件我们可以不断进行响应，但是这样没有必要——我们只需要关注最后一次即可</p>
          <p>这样能够大幅降低回调的执行频率，节省计算资源</p>
        </blockquote>
        <ul>
          <li>
            <p>输入框频繁输入内容，搜索或者提交信息（发送ajax请求的时机）</p>
          </li>
          <li>
            <p>调整浏览器窗口大小和缩放</p>
          </li>
          <li>
            <p>编辑器实现自动保存功能</p>
            <p>​</p>
          </li>
        </ul>
        <h4>核心代码</h4>
        <ul>
          <li>500ms为自定义时间间隔</li>
        </ul>
        <img src="../assets/DbCode.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar'
import TabsNav from '../components/Tabs/TabsNav'


</script>

<style scoped>
.card{
  margin: 20px auto;
  width: 80%;
}
</style>