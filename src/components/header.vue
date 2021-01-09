<template>
  <div class="header_top row" style="background-color: black; color: white;">
    <div class="col-md-5 mt-2">
      <font-awesome-icon class="mr-2" :icon="['fab', 'facebook-f']" />
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </div>
    <div class="col-md-3 mt-2">{{msg}}</div>
    <div class="col-md-4">
      <div class="dropdown">
        <button class="btn dropdown-toggle" style="color: white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Language
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">English</a>
          <a class="dropdown-item" href="#">French</a>
          <a class="dropdown-item" href="#">Korean</a>
        </div>
      </div>
    </div>
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
