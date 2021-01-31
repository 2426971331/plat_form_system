<template>
  <div id="detail">
    <div class="Bar" id="top">
      <img src="@/res/img/right.png" alt="" @click="back()" />
      <p>帖子详情</p>
    </div>
    <div style="height: 30px"></div>
    <DetailContent />
    <DetailBottom />
  </div>
</template>

<script>
import DetailContent from "@/components/detail/detailContent.vue";
import DetailBottom from "@/components/detail/detailBottom.vue";

export default {
  name: "detail",
  components: {
    DetailContent,
    DetailBottom,
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
</style>
