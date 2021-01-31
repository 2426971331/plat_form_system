<template>
  <div class="detailcontent">
    <div class="detailContent" v-for="(item,index) in detailArr" :key="index">
      <div class="detailOne">
        <img :src=item.img />
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.times }}</p>
        </div>
      </div>
      <div class="detailTwo">
        <img src="@/res/img/hot.png" />
        <span>{{ item.depict }}</span>
      </div>
      <div class="detailThree">
        <div>
          <img :src= item.likeImg />
          <span>{{ item.like1 }}</span>
        </div>
        <div>
          <img :src= item.commentImg />
          <span>{{ item.comment1 }}</span>
        </div>
      </div>
      <div class="detailFour">
        <div v-for="(el,index1) in item.content1" :key="index1">
          <p>{{el.cont}}</p>
        </div>
        <img src="@/res/img/content1.png" alt="">
        <div v-for="(el,index1) in item.content2" :key="index1">
          <p>{{el.cont}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailcontent",
  components: {},
  data() {
    return {
      detailArr:[
        {
          img: require("@/res/img/tatal.png"),
          title: "诗悦游戏-闪妹",
          times: "2021-01-27 22:20:12",
          depict: "闪妹调研室 | 这里准备了9999份礼包，只占用你一分钟！",
          content1:[{cont:"亲爱的冒险者们"},{cont:"上一期的调研中"},{cont:"冒险者们给闪妹提的建议反馈"},
                    {cont:"闪妹已经拿小本本记了起来"},{cont:"并安排在后续社区版本中优化"},{cont:"非常感谢大家的建议！"},
          ],
          content2:[{cont1:"2021年"},{cont1:"你想参与什么活动？"},{cont1:"做出你的选择吧~"}],
          like1: 33,
          likeImg:require("@/res/img/like.png"),
          commentImg:require("@/res/img/comment.png"),
          comment1: 62,
          contentImg: require("@/res/img/content1.png"),
        },
      ]
      
    };
  },
  methods:{
    
  }
};
</script>

<style>
.detailTop{
  width: 320px;
  margin-left: 20px;
}
.detailOne {
  display: flex;
  margin: 15px 0px 10px;
  font-size: 12px;
}
.detailOne img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.detailTwo {
  width: 290px;
  display: flex;
  font-size: 12px;
  margin-left: 20px;
}
.detailTwo span {
  overflow: hidden;
  white-space:normal;
}
.detailTwo img {
  width: 13px;
  height: 13px;
  margin-right: 5px;
}
.detailThree {
  font-size: 12px;
  color: #b1b1b1;
  width: 77px;
  display: flex;
  justify-content: space-around;
  margin: 10px 0px 20px 215px;
}
.detailThree img {
  width: 12px;
  height: 12px;
  margin-right: 2px;
}
.detailFour{
  text-align: center;
  font-size: 13px;
  margin-right: 20px;
}
.detailFour img{
  width: 110px;
  height: 100px;
}
.detailFour p{
  margin: 8px 0px;
}
</style>
