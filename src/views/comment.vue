<template>
  <div id="Comment" :style="reply">
    <div class="enterCont">
      <input type="text" name="" id="" placeholder="回复" />
      <div class="reply">
        <div class="cancel" @click="comment(reply)">×取消</div>
        <div class="replyButton">回复</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  components: {},
  data() {
    return {
    };
  },
  props: ["reply"],
  methods: {
    comment() {
        this.reply = "display:none";
        console.log(this.reply,"取消");
    },
  },
};
</script>

<style>
#Comment {
  position: fixed;
  top: 0;
  left: 0;
}
.enterCont input {
  width: 320px;
  height: 150px;
  border: none;
  color: #b1b1b1;
}
.reply {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f6f6f6;
  background: #fff;
}
.cancel {
  color: #b1b1b1;
  margin: 20px 15px;
}
.replyButton {
  height: 22px;
  padding: 0px 18px;
  line-height: 22px;
  color: #fff;
  background-color: #54c9ff;
  border-radius: 50px;
  margin: 20px 15px;
}
#Comment {
  height: 586px;
  background: rgba(0, 0, 0, 0.5);
}
</style>
