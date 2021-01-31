<template>
  <div id="my">
     <p class="Bar">个人信息</p>
     
     <MyTop />
     <MyContent />
     <BottomBar />
  </div>
</template>

<script>
import BottomBar from "@/views/bottomBar.vue";
import MyTop from "@/components/my/myTop.vue";
import MyContent from "@/components/my/myContent.vue";
export default {
  name: "my",
  components: {
    BottomBar,
    MyTop,
    MyContent
  },
};
</script>

<style>
#my {
  background-color: #f1f1f1;
}
</style>
