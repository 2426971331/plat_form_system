<template>
  <div class="chatroom">
    <p class="Bar">社区</p>
    <div style="height: 30px"></div>
    <div class="chatroomBox">
      <div class="chatroomOne">
        <div class="chatSearch">
          <img src="@/res/img/search.png" alt="" />
          <input type="text" placeholder="搜索关键词" />
        </div>
        <div class="chatSign">
          <img src="@/res/img/signin.gif" alt="" />
          <span>签到有礼</span>
        </div>
      </div>
      <div class="chatroomLunbo" style="padding-top: 10px">
        <div class="block">
          <el-carousel height="120px">
            <el-carousel-item
              v-for="(item, index) in chatroomBoxArr"
              :key="index"
            >
              <img height="120px" :src="item.imgs" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="chatroomSelect">
      <ul>
        <li v-for="(item, index) in classify" :key="index">{{ item.cls }}</li>
      </ul>
    </div>
    <ListCommon></ListCommon>
    <Add />
    <BottomBar />
  </div>
</template>

<script>
import BottomBar from "@/views/bottomBar.vue";
import Add from "@/components/home/add.vue";
import ListCommon from "@/components/listCommon.vue";
export default {
  name: "chatroom",
  components: {
    BottomBar,
    Add,
    ListCommon,
  },
  data() {
    return {
      classify: [
        { cls: "全部" },
        { cls: "精品" },
        { cls: "官方" },
        { cls: "攻略" },
        { cls: "活动" },
        { cls: "英雄" },
        { cls: "阵容" },
        { cls: "吸欧" },
        { cls: "求助" },
        { cls: "反馈" },
      ],
      chatroomBoxArr: [
        { imgs: require("@/res/img/lunbotu1.png") },
        { imgs: require("@/res/img/lunbotu2.jpeg") },
        { imgs: require("@/res/img/lunbotu3.jpg") },
        { imgs: require("@/res/img/lunbotu4.png") },
      ],
    };
  },
};
</script>

<style>
.chatroomBox {
  background-image: url(../res/img/chatroomImg.jpg);
  padding: 0px 15px;
}
.chatroomOne {
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 0px;
}
.chatSearch img {
  width: 11px;
  height: 11px;
}
.chatSign img {
  width: 17px;
  height: 17px;
}
.chatSearch {
  position: relative;
}
.chatSearch input {
  width: 160px;
  height: 23px;
  font-size: 5px;
  border: none;
  border-radius: 50px;
  padding-left: 30px;
}
.chatSearch img {
  position: absolute;
  left: 10px;
  top: 8px;
}
.chatSign {
  width: 90px;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 50px;
  font-size: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(161, 236, 255, 0.4);
}
.chatSign span {
  margin: 0px 6px;
}
.chatroomSelect {
  font-size: 12px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  margin: 10px 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
}
.chatroomSelect ul {
  display: flex;
}
.chatroomSelect li {
  border-bottom: 1px solid #fff;
  color: #b1b1b1;
  padding: 0px 8px;
  margin-left: 5px;
  
}
</style>
