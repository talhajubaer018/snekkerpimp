<template>
  <div class="home">
    <div>
      <div class="slider_img"></div>
      <Navbar/>
      <div class="" style="z-index: 100; position: absolute; bottom: 0; width: 100%; transform: translateY(-250%);">
        <div style="float: left; transform: translateX(100%)">
          <div style="float: left"><font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" size="2x"/></div>
          <div class="ml-3" style="float: left"><font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" size="2x"/></div>
        </div>
        <div style="float: right; transform: translateX(-100%);"><font-awesome-icon :icon="['fas', 'arrow-circle-right']" size="2x"/></div>
        <div style="float: right; transform: translateX(-50%); margin-top:5px">Shop Now</div>
      </div>
    </div>
    <div class="card mt-3" style="border: 0">
      <div class="card-header row" style="background-color: transparent; border: 0">
        <img class="category_image col-4" src="../assets/men-category.jpg"/>
        <img class="category_image col-4" src="../assets/women-category.jpg"/>
        <img class="category_image col-4" src="../assets/accessory-category.jpg"/>
      </div>
    </div>
    <div class="card mt-3" style="border: 0">
      <div class="card-header row" style="background-color: transparent; border: 0">
        <img class="category_image col-6" src="../assets/kona-thumb.jpg"/>
        <img class="category_image col-6" src="../assets/kona-thumb-2.jpg"/>
      </div>
    </div>
    <div class="card mt-3" style="border: 0">
      <div class="card-header row" style="background-color: transparent; border: 0">
        <img class="category_image col-12" src="../assets/coats-jackets.jpg"/>
      </div>
    </div>
    <div class="card mt-3" style="border: 0">
      <div class="card-title">New Arrivals</div>
      <div class="card-header row" style="background-color: transparent; border: 0">
        <img class="category_image col-3" src="../assets/kona-thumb.jpg"/>
        <img class="category_image col-3" src="../assets/kona-thumb-2.jpg"/>
        <img class="category_image col-3" src="../assets/kona-thumb.jpg"/>
        <img class="category_image col-3" src="../assets/kona-thumb-2.jpg"/>
      </div>
    </div>
    <div class="card mt-3" style="border: 0">
      <div class="card-title">Sign Up</div>
      <div class="row">
        <div class="input-group mb-3 offset-5 col-3">
          <input type="text" class="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-dark" type="button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3" style="border: 0">
      <div class="card-header row" style="background-color: transparent; border: 0">
        <img class="featured_image col-2" src="../assets/kona-thumb.jpg"/>
        <img class="featured_image col-2" src="../assets/kona-thumb-2.jpg"/>
        <img class="featured_image col-2" src="../assets/kona-thumb.jpg"/>
        <img class="featured_image col-2" src="../assets/kona-thumb-2.jpg"/>
        <img class="featured_image col-2" src="../assets/kona-thumb.jpg"/>
        <img class="featured_image col-2" src="../assets/kona-thumb-2.jpg"/>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
<style scoped>
.slider_img {
  content: url('../assets/slider01.jpg');
  z-index: 1;
  position: relative;
}
.navbar {
  z-index: 100;
}
.category_name {
position: absolute;
}
.featured_image {
  padding: 0;
}
</style>
