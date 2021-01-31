<template>
  <div class="list">
    <div class="listTop">
      <p>热门推荐</p>
      <p>关注</p>
    </div>
    <div class="listLine"></div>
    <ListCommon></ListCommon>
  </div>
</template>

<script>
import ListCommon from "@/components/listCommon.vue";
export default {
  name: "lists",
  components: {ListCommon},
};
</script>

<style>
.listTop {
  display: flex;
  justify-content: space-around;
  padding: 10px 0px 10px;
}

.listTop p {
  font-size: 12px;
  color: #33bfff;
}
.listLine {
  margin: 0px 13px;
  width: 290px;
  border-bottom: 1px solid #ccc;
}

</style>
