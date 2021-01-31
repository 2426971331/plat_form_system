<template>
  <div class="bottomBar">
    <router-link to="/home" target='_self'>
        <img src="@/res/img/home.png" alt="">
        <p>首页</p>
    </router-link >
    <router-link to="/chatroom" target='_self'>
        <img src="@/res/img/shequ.png" alt="">
        <p>社区</p>
    </router-link>
    <router-link to="/news">
        <img src="@/res/img/news.png" alt="">
        <p>消息</p>
    </router-link>
    <router-link to="/my">
        <img src="@/res/img/my.png" alt="">
        <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bottomBar",
  components: {
    
  },
};
</script>

<style>

.bottomBar{
    width: 320px;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    background: #fff no-repeat;
}
.bottomBar img{
    width: 20px;
    height: 20px;
}
</style>
