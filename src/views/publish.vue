<template>
  <div id="publish">
    <div class="Bar" id="top">
      <img src="@/res/img/right.png" alt="" @click="back()" />
      <p>发帖</p>
    </div>
    <div style="height: 30px;"></div>
   
    <div class="pubContent">
      <div class="classify bottomLine">
        <span>分类：</span>
        <ul>
          <li v-for="(item,index) in classify" :key="index">{{item.cls}}</li>
        </ul>
      </div>
      <div class="title bottomLine">
        <input type="text" name="" placeholder="请输入30字内的标题" />
      </div>
      <div class="content">
        <input type="text" placeholder="话题内容，至少5个字" />
      </div>
      <div class="addImg">
        <input
          type="file"
          name=""
          id=""
          multiple="multiple"
          style="opacity: 0"
        />
        <img src="@/res/img/addimg.png" alt="" />
        <span>添加图片</span>
      </div>
      <p class="tip">*拖动可调整排序</p>
    </div>
    <div class="pubBottom">
      <div class="clean">清空全部</div>
      <div class="pubAdd">发表</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publish",
  components: {},
  data(){
    return{
      classify:[{cls:"普通"},{cls:"攻略"},{cls:"活动"},{cls:"英雄"},{cls:"阵容"},{cls:"吸欧"},{cls:"求助"},{cls:"反馈"}],
    }
  },
  methods: {
    back() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style>

#top {
  display: flex;
  font-size: 14px;
}
#top img {
  width: 22px;
  height: 22px;
  margin: 0px 110px 0px 10px;
}
.bottomLine {
  padding: 20px 0px;
  margin: 0px 15px;
  border-bottom: 1px solid #efefef;
}
.classify {
  font-size: 12px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
}
.classify ul {
  display: flex;
}
.classify li {
  border: 1px solid #ccc;
  border-radius: 50px;
  color: #b1b1b1;
  padding: 0px 8px;
  margin-left: 5px;
}

.title input {
  font-size: 14px;
  border: none;
}
.content {
  margin: 0px 15px;
  padding: 20px 0px;
}
.content input {
  font-size: 14px;
  border: none;
  font-size: 13px;
}
.addImg {
  width: 90px;
  height: 90px;
  background-color: #e6e6e6;
  font-size: 13px;
  color: #b1b1b1;
  position: relative;
  margin: 60px 15px 10px;
}
.addImg img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 30px;
}
.addImg span {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.addImg input {
  width: 100%;
  height: 100%;
}
.tip {
  font-size: 12px;
  color: #b1b1b1;
  margin-left: 15px;
}

.pubBottom {
  width: 100%;
  font-size: 12px;
  padding: 10px 10px;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
}
.clean {
  border: 1px solid #d55353;
  color: #d55353;
  border-radius: 50px;
  padding: 2px 6px;
  margin: 0px 160px 0px 10px;
}
.pubAdd {
  border: 1px solid #fff;
  color: #fff;
  background-color: #54c9ff;
  border-radius: 50px;
  padding: 4px 18px;
}
</style>
