<template>
  <div id="myContent">
    <div class="contentTop">
      <div class="grade">
        <p></p>
        <span>社区等级</span>
      </div>
      <div class="gradeContent" v-for="(item, index) in gradeArr" :key="index">
        <img :src="item.titleImg" alt="" />
        <div style="font-size: 13px; color: #fff">
          <p>{{ item.name }}</p>
          <p>{{ item.grade }}</p>
        </div>
      </div>
    </div>
    <div class="contentBottom">
      <ul>
        <li v-for="(el, index) in BottomArr" :key="index">
          <img :src="el.BottomImg" alt="" />
          <span>{{ el.text }}</span>
          <img src="@/res/img/left.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "myContent",
  components: {},
  data() {
    return {
      gradeArr: [
        {
          titleImg: require("@/res/img/tatal.png"),
          name: "闪烁之光",
          grade: "Lv.1",
        },
      ],
      BottomArr: [
        {
          BottomImg: require("@/res/img/gradeImg/giftBox.png"),
          text: "我的礼包",
        },
        {
          BottomImg: require("@/res/img/gradeImg/collect.png"),
          text: "我的收藏",
        },
        { BottomImg: require("@/res/img/gradeImg/say.png"), text: "我的评论" },
        {
          BottomImg: require("@/res/img/gradeImg/SignIn.png"),
          text: "每日签到",
        },
        {
          BottomImg: require("@/res/img/gradeImg/medal.png"),
          text: "勋章领取",
        },
        {
          BottomImg: require("@/res/img/gradeImg/phone.png"),
          text: "绑定手机号",
        },
        { BottomImg: require("@/res/img/gradeImg/set.png"), text: "设置" },
      ],
    };
  },
};
</script>

<style>
.contentTop {
  margin-top: 85px;
  background-color: #fff;
  padding: 15px 0px 15px 15px;
}
.grade {
  display: flex;
  align-items: center;
}
.grade p {
  width: 3px;
  height: 15px;
  background-color: #55c9ff;
  margin-right: 10px;
}
.grade span {
  color: #333;
  font-size: 14px;
  font-weight: 600;
}
.gradeContent {
  width: 144px;
  background-color: #66cdff;
  /* background-image: url(../res/img/myContent.png); */
  padding: 10px 10px;
  border-radius: 5px;
  margin: 15px 0;
  display: flex;
  align-items: center;
}
.gradeContent img {
  width: 44px;
  height: 44px;
  margin-right: 15px;
}
.contentBottom {
  margin-top: 8px;
  background-color: #fff;
  color: #666;
  font-size: 12px;
}
.contentBottom li {
  display: flex;
}
.contentBottom li img {
  width: 16px;
  height: 16px;
  margin: 20px 10px 20px 15px;
}
.contentBottom li span {
  margin: 20px 160px 20px 10px;
}
</style>
