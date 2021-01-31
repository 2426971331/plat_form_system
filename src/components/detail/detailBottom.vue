<template>
  <div id="detailBottom">
    <div class="detailBottom">
      <div class="bottomleft" @click="comment(reply)">
        <input type="text" name="" />
        <div class="bottomC">
          <img src="@/res/img/comment.png" alt="" />
          <span>说点什么~</span>
        </div>
      </div>
      <div class="bottomRight">
        <img src="@/res/img/like.png" />
        <span>40</span>
      </div>
    </div>
    <Comment :reply="reply"></Comment>
  </div>
</template>

<script>
import Comment from "@/views/comment.vue";
export default {
  name: "detailBottom",
  components: {
    Comment,
  },
  data() {
    return {
      reply: "display:none",
    };
  },
  methods: {
    comment() {
      this.reply = "display:block";
      console.log(this.reply,"回复");
    },
  },
};
</script>

<style>
.detailBottom {
  width: 100%;
  padding: 10px 0px;
  background-color: #fff;
  border-top: 1px solid #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
}
.bottomC {
  color: #999999;
  font-size: 12px;
  position: fixed;
  bottom: 15px;
  left: 30px;
  display: flex;
  align-items: center;
}
.bottomC img {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
.bottomleft input {
  width: 205px;
  height: 27px;
  border-radius: 5px;
  border: 1px solid #f6f6f6;
  background-color: #f6f6f6;
}
.bottomRight {
  font-size: 12px;
  color: #b1b1b1;
}
.bottomRight img {
  width: 12px;
  height: 12px;
  margin-right: 2px;
}
</style>
