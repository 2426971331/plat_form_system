<template>
  <div id="news">
    <p class="Bar">消息</p>
    <div style="height: 30px"></div>
    <div class="newsTop">
      <ul>
        <li>回复</li>
        <li>公告</li>
        <li>获赞</li>
        <li>通知</li>
      </ul>
    </div>
    <div class="newsContent">
      <img src="@/res/img/newsimg.png" alt="">
      <p>暂无相关数据哦~</p>
    </div>
    <BottomBar />
  </div>
</template>

<script>
import BottomBar from "@/views/bottomBar.vue";
export default {
  name: "news",
  components: {
    BottomBar,
  },
};
</script>

<style>
.newsTop{
  height: 36px;
  line-height: 36px;

}
.newsTop ul{
  font-size: 13px;
  color: #999999;
  display: flex;
  justify-content:space-around;
}
.newsContent{
  text-align: center;
  padding: 60px 0px;
  background-color:  #f1f1f1;
  height: 350px;
}
.newsContent p{
  font-size: 13px;
  color: #999999;
  margin-top: 5px;
}
.newsContent img{
  width: 85px;
  height: 85px;
}
</style>
