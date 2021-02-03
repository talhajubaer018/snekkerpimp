<template>
  <div class="navbar row" style="">
    <div class='col-12 col-md-12' style="padding-left: 0">
      <div class="row">
        <div class="navigation_container col-12 col-md-4 mt-3 mb-2" style="text-align: left">
          <router-link to="/brands" style="padding: 0.5rem; padding-left: 0.5rem">Brands</router-link>
          <router-link to="/category" style="padding: 0.5rem">Category</router-link>
          <router-link to="/collections" style="padding: 0.5rem">Collections</router-link>
          <router-link to="/accessories" style="padding: 0.5rem">Accessories</router-link>
        </div>
        <div id="mobile_nav" class="col-12 col-md-4 mt-2 mb-2">
          <router-link to="/brands" style="padding: 0.5rem; padding-left: 0.5rem">Brands</router-link>
          <router-link to="/category" style="padding: 0.5rem">Category</router-link>
          <router-link to="/collections" style="padding: 0.5rem">Collections</router-link>
          <router-link to="/accessories" style="padding: 0.5rem">Accessories</router-link>
        </div>
        <div class="col-12 col-md-4 text-center">
          <div @click="navigation_toggle_function" class="navigation-bars">
            <font-awesome-icon class="navigation-bars" :icon="['fas', 'bars']"/>
          </div>
          <router-link to="/">
            <div class="logo mx-auto"></div>
          </router-link>
        </div>
        <div class="col-12 col-md-4 text-right mt-3 navbar-login" style="">
          <div>
            <router-link style="color: black" to="/login">Login</router-link>
          </div>
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
      search_clicked: false,
      navigation_toggle: false
    }
  },
  methods: {
    search_click_function () {
      this.search_clicked = true
    },
    navigation_toggle_function () {
      this.navigation_toggle = !this.navigation_toggle
      if (this.navigation_toggle) {
        document.getElementById('mobile_nav').style.opacity = '1'
        document.getElementById('mobile_nav').style.transition = '500ms'
      } else {
        document.getElementById('mobile_nav').style.opacity = '0'
        document.getElementById('mobile_nav').style.transition = '500ms'
      }
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
#mobile_nav a {
  color: black;
}
.navbar {
  top: 0;
  transform: translateY(100%);
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 0;
}
.logo {
  content: url("../assets/sneaker-pimp.png")
}
.navbar-login {
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between
}
.navigation-bars {
  display: none;
}
@media only screen and (min-width: 481px){
  #mobile_nav {
    display: none;
  }
}
@media only screen and (max-width: 480px){
  #mobile_nav {
    opacity: 0;
    display: flex;
    justify-content: space-between;
  }
  .navigation_container {
    display: none;
  }
  .navbar-login {
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: calc(1.5rem + 10px) !important;
  }
  .navbar {
    padding-top: 1rem;
    padding: 0;
    margin: 0;
  }
  .navigation-bars {
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
  }
}
</style>
