<template>
  <div id="myTop">
    <div class="perInfo">
      <div class="perBack"></div>
      <div class="perContent" v-for="(item, index) in perInfoArr" :key="index">
        <div class="perContentOne">
          <img :src="item.title" />
          <div class="perMsg">
            <p>{{ item.name }}</p>
            <p>ID:{{ item.Id }}</p>
          </div>
          <div class="comeBack">主页</div>
        </div>
        <p style="color:#666;font-size: 12px;margin: 10px 0px;">{{item.signature}}</p>
        <div class="perFour">
            <ul>
                <li>
                    <p>{{item.Fans}}</p>
                    <p>粉丝</p>
                </li>
                <li>
                    <p>{{item.like}}</p>
                    <p>关注</p>
                </li>
                <li>
                    <p>{{item.publish}}</p>
                    <p>发帖</p>
                </li>
                <li>
                    <p>{{item.love}}</p>
                    <p>获赞</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myTop",
  components: {},
  data() {
    return {
      perInfoArr: [
        {
          title: require("@/res/img/perTitle.png"),
          name: "MEIMEI",
          Id: 57663559,
          signature: "暂无个性签名哦~",
          Fans: 0,
          like: 0,
          publish: 1,
          love: 0,
        },
      ],
    };
  },
};
</script>

<style>
.perInfo{
  position: relative;
}
.perBack {
  height: 105px;
  margin-top: 30px;
  background-color: #24d0fe;
  /* background-image: url(../res/img/myTopBack.jpg);  */
}
.perContent {
  width: 270px;
  padding-left: 20px;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  top: 35px;
  left: 15px;
}
.perContent img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-right: 15px;
}
.perContentOne {
  display: flex;
  align-items: center;
}
.perMsg p:first-child {
  font-size: 14px;
  font-weight: 700;
}
.perMsg p:last-child {
  font-size: 13px;
  color: #999;
}
.comeBack {
  color: #fff;
  font-size: 12px;
  padding: 5px 15px;
  background-color: #81d3fa;
  border-radius: 50px 0px 0px 50px;
  margin-left: 48px;
}
.perFour ul{
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #F5F5F5;
    padding: 8px 0px;
}
.perFour li{
    text-align: center;
    margin-right: 30px;
}
.perFour li p:first-child{
    font-size: 16px;
    color: #000;
}
.perFour li p:last-child{
    font-size: 12px;
    color: #999;
}
</style>
