<template>
  <div class="home">
    <p class="Bar">首页</p>
    <div style="height: 30px;"></div>
    <div class="one">
      <Product />
      <Lunbotu />
    </div>
    <div class="two">
       <Lists />
    </div>
    <Add />
    <BottomBar />
  </div>
</template>

<script>
import Product from "@/components/home/product.vue";
import Lunbotu from "@/components/home/lunbotu.vue";
import Lists from "@/components/home/lists.vue";
import BottomBar from "@/views/bottomBar.vue";
import Add from "@/components/home/add.vue"

export default {
  name: "home",
  components: {
    Product,
    Lunbotu,
    Lists,
    BottomBar,
    Add
  },
};
</script>

<style>
.one {
  background: #f1f1f1;
  padding-bottom: 15px;
  
}
</style>
