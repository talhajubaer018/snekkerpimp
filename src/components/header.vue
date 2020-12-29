<template>
  <div class="header row" style="background-color: black; color: white; padding: 1rem">
    <div class="col-4">aasdasds</div>
    <div class="col-4">asdasdasd</div>
    <div class="col-4">asdsadasdas</div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
