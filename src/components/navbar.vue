<template>
  <div class="navbar row" style="">
    <div class='col-12'>
      <div class="row">
        <div class="navigation_container offset-2 col-4" style="text-align: left">
          <router-link to="/brands" style="padding: 1.5rem;">Brands</router-link>
          <router-link to="/category" style="padding: 1.5rem">Category</router-link>
          <router-link to="/collections" style="padding: 1.5rem">Collections</router-link>
          <router-link to="/accessories" style="padding: 1.5rem">Accessories</router-link>
        </div>
        <div class="col-2">KONA</div>
        <div class="col-3" style="padding: 0; width: 100%; display: flex; justify-content: space-around">
          <div>Login</div>
          <div>
            <font-awesome-icon :icon="['fas', 'search']"/>
          </div>
          <div>
            <font-awesome-icon :icon="['far', 'heart']"/>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'shopping-bag']"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
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
.navigation_container a {
  color: black;
}
.navbar {
  top: 0;
  transform: translateY(150%);
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-evenly
}
</style>
