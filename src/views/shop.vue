<template>
  <div class="home container">
    <div class="row">
      <div class='col-12'>
        <Header msg="Free Delivery on all orders over $60"/>
        <Navbar/>
        <div class="row">
          <div class='col-md-3 text-left' style="line-height: 1.7; padding: 0.75rem 1.25rem;">
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="mb-2" style="color: darkgray">Filter by Category</div>
                <div class="">
                  <!-- <div><strong>Men</strong></div> -->
                  <div class="ml-2">
                    <div v-for="category in categories" :key="category.id">
                      <a href="#">
                        <span @click="filterWith({ category: category.id})">{{ category.name }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="mb-5">
                  <div style="color: darkgray">Filter by Color</div>
                  <div>
                    <font-awesome-icon :icon="['fas', 'circle']" color="beige"/>
                    Beige
                  </div>
                  <div>
                    <font-awesome-icon :icon="['fas', 'circle']" color="black"/>
                    Black
                  </div>
                  <div>
                    <font-awesome-icon :icon="['fas', 'circle']" color="gray"/>
                    Bone
                  </div>
                  <div>
                    <font-awesome-icon :icon="['fas', 'circle']" color="brown"/>
                    Brown
                  </div>
                  <div>
                    <font-awesome-icon :icon="['fas', 'circle']" color="grey"/>
                    Grey
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-12">
                <div>
                  <div style="color: darkgray">Filter by Size</div>
                  <div style="display: flex; justify-content: space-between">
                    <div class="size-circle">L</div>
                    <div class="size-circle">M</div>
                    <div class="size-circle">S</div>
                    <div class="size-circle">XL</div>
                    <div class="size-circle">XS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-8" style="border: 0">
            <div class='card-header row' style="background-color: transparent; border: 0; padding-bottom: 0">
              <div class="text-left">
                <div class='pull-left mr-4'>
                  <h2>Shop</h2>
                </div>
                <div class='pull-left' style="padding: 0.75rem">Home</div>
                <div class='pull-left' style="padding: 0.75rem 0">
                  <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/>
                </div>
                <div class='pull-left' style="padding: 0.75rem">Shop</div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="text-left col-7 col-md-6">Showing 1-12 of 24 results</div>
              <div class="text-right col-3 col-md-6">
                <div class="dropdown">
                  <button class="btn dropdown-toggle" style="border: 1px solid gray; border-radius: 25px" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by latest
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Sort by price</a>
                    <a class="dropdown-item" href="#">Sort by size</a>
                    <a class="dropdown-item" href="#">Sort by date</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3" style="border: 0">
              <div class="card-header row mb-4" style="background-color: transparent; border: 0; padding: 0">
                <div class="col-6 col-md-3" v-for="product in products" :key="product.id">
                  <div>
                    <img class="image_width_100" :src="product.images[0]"/>
                  </div>
                  <div style="text-align: left">
                    <div style="float: left; padding: 5px; padding-left: 0">
                      <font-awesome-icon :icon="['fas', 'circle']" color="darkred"/>
                    </div>
                    <div style="float: left; padding: 5px">
                      <font-awesome-icon :icon="['fas', 'circle']" color="darkblue"/>
                    </div>
                    <div style="float: left; padding: 5px">
                      <font-awesome-icon :icon="['fas', 'circle']" color="darkgreen"/>
                    </div>
                    <div style="clear: left">
                      <div>{{ product.name }}</div>
                      <div>
                        <del v-if="product.price > product.offer_price">
                          ৳{{ product.price }}
                        </del>
                        ৳{{ product.offer_price }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
        </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import axios from 'axios'
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'Home',
  data () {
    return {
      filters: {},
      products: [],
      categories: []
    }
  },
  created () {
    this.refreshCategories()
    this.refreshProducts()
  },
  methods: {
    filterWith (filters) {
      this.products = []
      this.filters = Object.assign({}, this.filters, filters)
      this.refreshProducts()
    },
    refreshProducts () {
      axios
        .get(process.env.VUE_APP_API_BASE + '/products', {
          params: this.filters
        })
        .then(res => res.data)
        .then(res => {
          this.products = res.data
        })
    },
    refreshCategories () {
      axios
        .get(process.env.VUE_APP_API_BASE + '/categories')
        .then(res => res.data)
        .then(res => {
          this.categories = res.data
        })
    }
  },
  components: {
    Footer,
    Header,
    Navbar
  }
}
</script>
<style scoped>
.slider_img_wrapper {
  position: relative;
}
.slider_img {
  z-index: 1;
  position: relative;
  overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
.image_width_100 {
  width: 100%;
}
.navbar {
  top: 0;
  transform: translateY(0%);
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-evenly
}
.size-circle {
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
}
</style>
