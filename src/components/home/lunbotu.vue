<template>
  <div class="lunbotu">
    <div class="triangle"></div>
    <div class="block">
      <el-carousel height="120px">
        <el-carousel-item v-for="(item, index) in lunbotuArr" :key="index">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img height="120px" :src=item.imgs alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="productFour">
      <div>
        <img src="@/res/img/hero.png" alt="" />
        <p>英雄介绍</p>
      </div>
      <div>
        <img src="@/res/img/works.png" alt="" />
        <p>同人作品</p>
      </div>
      <div>
        <img src="@/res/img/post.png" alt="" />
        <p>官方公告</p>
      </div>
      <div>
        <img src="@/res/img/game.png" alt="" />
        <p>玩法攻略</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // Lunbotu
  },
  data() {
    return {
      lunbotuArr: [
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
.lunbotu {
  background-color: #fff;
  padding-top: 5px;
  position: relative;
}
.triangle {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom: 5px solid #fff;
  position: absolute;
  top: -10px;
  left: 24px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.productFour {
  display: flex;
  justify-content: space-around;
  padding: 10px 0px 20px;
}
.productFour img {
  width: 47px;
  height: 47px;
}
.productFour p {
  font-size: 12px;
}
</style>
