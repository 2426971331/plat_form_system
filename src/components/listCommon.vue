<template>
  <div id="listComon">
    <div
      class="listConten"
      @click="jumps()"
      v-for="(item, index) in contentArr"
      :key="index"
    >
      <div class="contentOne">
        <img :src="item.img" />
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.times }}</p>
        </div>
      </div>
      <div class="contentTwo">
        <img src="@/res/img/hot.png" />
        <span>{{ item.depict }}</span>
      </div>
      <div class="contentThree">
        <p>{{ item.content1 }}</p>
        <div v-for="(el, index) in item.contentImg" :key="index">
          <img :src="el.cont1" />
          <img :src="el.cont2" />
        </div>
      </div>
      <div class="contentFour">
        <div>
          <img :src="item.likeImg" />
          <span>{{ item.like1 }}</span>
        </div>
        <div>
          <img :src="item.commentImg" />
          <span>{{ item.comment1 }}</span>
        </div>
      </div>
      <div class="listLine" style="margin: 0"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listComon",
  components: {},
  data() {
    return {
      contentArr: [
        {
          img: require("@/res/img/tatal.png"),
          title: "诗悦游戏-闪妹",
          times: "2021-01-27",
          depict: "闪妹调研室 | 这里准备了9999份礼包，只占用你一分钟！",
          content1:
            "亲爱的冒险者们上一期的调研中冒险者们给闪妹提的建议反馈闪妹已经拿小本本记了起来并安排在后续社区版本中优化非常感谢大家的建议！2021年你想参与什么活动？想要什么奖励？做出你的选择吧~填完下方问卷，闪妹",
          like1: 33,
          comment1: 62,
          contentImg: [
            { cont1: require("@/res/img/content1.png"),cont2: require("@/res/img/content2.png")},
          ],
          likeImg: require("@/res/img/like.png"),
          commentImg: require("@/res/img/comment.png"),
        },
        {
          img: require("@/res/img/tatal.png"),
          title: "佛系玩家",
          times: "2021-01-15",
          depict: "萌新必看——常见的阵容搭配及英雄符文天赋搭配",
          content1:
            "写给萌新们的一贴——常见的阵容搭配及英雄符文天赋搭配 因为有些朋友们不懂的如何选择和搭配，符文和天赋对个人实力来说也是很重要的一部分， 虽然有大神搭配供浏览，但是大神搭配上的每个人",
          like1: 41,
          comment1: 147,
          contentImg: "",
          likeImg: require("@/res/img/like.png"),
          commentImg: require("@/res/img/comment.png"),
        },
        {
          img: require("@/res/img/tatal.png"),
          title: "诗悦游戏-闪妹",
          times: "01-28",
          depict: "春节版本爆料① | 5星英雄任玩！星之塔玩法抢先看！",
          content1: "",
          like1: 41,
          comment1: 147,
          contentImg: [
            { cont1: require("@/res/img/post.png"),cont2: require("@/res/img/content2.png")},
          ],
          likeImg: require("@/res/img/like.png"),
          commentImg: require("@/res/img/comment.png"),
        },
        {
          img: require("@/res/img/tatal.png"),
          title: "诗悦游戏-闪妹",
          times: "01-28",
          depict: "春节版本爆料① | 5星英雄任玩！星之塔玩法抢先看！",
          content1:
            "继新春英雄爆料后，又有新玩法线索露出看来这次春节，要玩一场大的了！“情报小能手”本闪妹马上出击(ง˃̀ꄃ˂́)۶经过一番软磨硬泡终于从策划锅锅手上拿到第一手版本资讯接下来就由闪妹给大家介绍春节版本爆料",
          like1: 93,
          comment1: 111,
          contentImg: "",
          likeImg: require("@/res/img/like.png"),
          commentImg: require("@/res/img/comment.png"),
        },
      ],
    };
  },
  methods: {
    jumps() {
      this.$router.push({ path: "detail" });
    },
  },
};
</script>

<style>
.listConten {
  font-size: 13px;
  color: #333;
  margin-left: 15px;
}

.contentOne {
  display: flex;
  margin: 15px 0px 10px;
}
.contentOne img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.contentTwo {
  width: 290px;
  display: flex;
}
.contentTwo span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
}
.contentTwo img {
  width: 13px;
  height: 13px;
  margin-right: 5px;
}

.contentThree img {
  width: 100px;
  height: 100px;
}
.contentThree p {
  width: 280px;
  font-size: 12px;
  color: #666666;
  margin: 12px 0px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.contentFour {
  font-size: 12px;
  color: #b1b1b1;
  width: 77px;
  display: flex;
  justify-content: space-around;
  margin: 10px 0px 20px 215px;
}
.contentFour img {
  width: 12px;
  height: 12px;
  margin-right: 2px;
}
.listLine {
  margin: 0px 13px;
  width: 290px;
  border-bottom: 1px solid #ccc;
}
</style>
