<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.head{
  margin:0
}


.Bar {
  width: 100%;
  font-size: 15px;
  text-align: center;
  padding-bottom: 10px;
  background: #f1f1f1;
  position: fixed;
  top:0;
  left: 0;
}
ul li{
  list-style: none;
}
</style>
