<template>
  <div class="navbar row" style="">
    <div class='col-md-12'>
      <div class="row">
        <div class="navigation_container col-md-4 mt-3" style="text-align: left">
          <router-link to="/brands" style="padding: 1.5rem;">Brands</router-link>
          <router-link to="/category" style="padding: 1.5rem">Category</router-link>
          <router-link to="/collections" style="padding: 1.5rem">Collections</router-link>
          <router-link to="/accessories" style="padding: 1.5rem">Accessories</router-link>
        </div>
        <div class="col-md-4 text-center">
          <div class="logo mx-auto"></div>
        </div>
        <div class="col-md-4 text-right mt-3" style="padding: 0; width: 100%; display: flex; justify-content: space-between">
          <div>Login</div>
          <div>
            <div @click="search_click_function" v-show="!search_clicked" type="button">
              <font-awesome-icon :icon="['fas', 'search']"/>
            </div>
            <div v-show="search_clicked">
              <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <font-awesome-icon style="position: absolute; top: 50%; transform: translateY(calc(-50% - 5px)); margin-left: 5px" :icon="['fas', 'search']"/>
            </div>
          </div>
          <div>
            <font-awesome-icon :icon="['far', 'heart']"/>
          </div>
          <div>
            <router-link to="/cart" >
              <font-awesome-icon color="black" :icon="['fas', 'shopping-bag']"/>
            </router-link>
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
  },
  data () {
    return {
      search_clicked: false
    }
  },
  methods: {
    search_click_function () {
      this.search_clicked = true
    }
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
  transform: translateY(100%);
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-evenly
}
.logo {
  content: url("../assets/sneaker-pimp.png")
}
</style>
