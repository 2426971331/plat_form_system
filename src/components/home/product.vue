<template>
  <div class="productBox">
    <div class="productOne">
      <div class="search">
        <img src="@/res/img/search.png" alt="" />
        <input type="text" placeholder="搜索关键词" />
      </div>
      <div class="sign">
        <img src="@/res/img/signin.gif" alt="" />
        <span>签到有礼</span>
      </div>
    </div>

    <div class="productTwo">
      <img src="@/res/img/tatal.png" class="total" />

      <div class="productItem">
        <p>闪烁之光</p>
        <div class="itemThree">
          <div v-for="(item,index) in pro" :key="index">
            <img :src="item.img" />
            <span>{{ item.word }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      pro: [
        { img: require("@/res/img/liwuhe.png"), word: "礼包" },
        { img: require("@/res/img/love.png"), word: "关注" },
        { img: require("@/res/img/download.png"), word: "下载游戏" },
      ],
    };
  },
  
};
</script>

<style scoped>
.productBox {
  background-color: #40adff;
  padding: 0px 15px;
}
.productOne {
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 0px;
}
.search img {
  width: 11px;
  height: 11px;
}
.sign img {
  width: 17px;
  height: 17px;
}
.search {
  position: relative;
}
.search input {
  width: 160px;
  height: 23px;
  font-size: 5px;
  border: none;
  border-radius: 50px;
  padding-left: 30px;
}
.search img {
  position: absolute;
  left: 10px;
  top: 8px;
}
.sign {
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
.sign span {
  margin: 0px 6px;
}

.productTwo .total {
  width: 46px;
  height: 46px;
  border: 1px solid #fff;
  border-radius: 5px;
  border: none;
}

.productTwo {
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 15px;
}
.productTwo img {
  margin-right: 10px;
}
.itemThree {
  width: 250px;
  display: flex;
  justify-content: space-around;
  margin-top: 3px;
}
.itemThree div {
  padding: 0px 8px;
  height: 22px;
  border: 1px solid #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
}
.itemThree span {
  font-size: 12px;
}
.itemThree img{
  width: 13px;
  height: 13px;
}

</style>
