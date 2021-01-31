<template>
  <div id="add">
      <div class="addTo" @click="add()">
          <img src="@/res/img/add.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  components: {
    
  },
  methods:{
    add(){
      this.$router.push({path:"Publish"});
    }
  }
};
</script>

<style>
.addTo{
    width: 37px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #33BFFF;
    border-radius: 50%;
    position: fixed;
    bottom: 70px;
    right: 10px;
}
.addTo img{
    width: 17px;
    height: 17px;
}
</style>
