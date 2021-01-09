<template>
  <div class="home">
    <Header msg="Free Delivery on all orders over $60" />
    <Navbar />
      <div class="card" style="border: 0">
        <div class="card-header row" style="padding-left: 0; text-align: left; background-color: transparent; border: 0;">
          <div class="offset-md-1 col-md-8 mt-2"><h2>Cart</h2></div>
        </div>
        <div class="row">
          <div class="offset-md-4 col-md-8">
            <div class='pull-left mr-1'><strong>PREVIEW CART</strong></div>
            <div class='pull-left mr-1'>
              <font-awesome-icon type="button" :icon="['fas', 'chevron-right']"/>
            </div>
            <div class='pull-left mr-1'><strong>REVIEW ADDRESS</strong></div>
            <div class='pull-left mr-1'>
              <font-awesome-icon type="button" :icon="['fas', 'chevron-right']"/>
            </div>
            <div class='pull-left mr-1'><strong>REVIEW CART</strong></div>
            <div class='pull-left mr-1'>
              <font-awesome-icon type="button" :icon="['fas', 'chevron-right']"/>
            </div>
            <div class='pull-left mr-1'><strong>PAYMENT</strong></div>
            <div class='pull-left mr-1'>
              <font-awesome-icon type="button" :icon="['fas', 'chevron-right']"/>
            </div>
            <div class='pull-left mr-1'><strong>TRACKING</strong></div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="offset-md-1 col-md-6">
            <table class="table table-borderless">
              <thead>
                <tr style="border-bottom: 1px solid darkgray">
                  <th scope="col" colspan="4">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody style="border-bottom: 1px solid darkgray">
                <tr>
                  <th scope="row">
                    <img type="button" src="../assets/men-category.jpg" style="width: 100px" />
                  </th>
                  <td>Grove X Bag</td>
                  <td>Black</td>
                  <td>XL</td>
                  <td>#79.00</td>
                  <td>-1+</td>
                  <td>$79.00</td>
                </tr>
                <tr>
                  <th scope="row">
                    <img type="button" src="../assets/men-category.jpg" style="width: 100px" />
                  </th>
                  <td>Grove X Bag</td>
                  <td>Black</td>
                  <td>XL</td>
                  <td>#79.00</td>
                  <td>-1+</td>
                  <td>$79.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-5">
            <div class="row mt-3">
              <div class="offset-md-1 col-md-4 text-left"><strong>Subtotal</strong></div>
              <div class="col-md-5 text-right"><strong>$79.00</strong></div>
            </div>
            <div class="row mt-3">
              <div class="offset-md-1 col-md-4 text-left"><strong>Shipping</strong></div>
              <div class="col-md-5 text-right">
                <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                  <strong>Flat Rate $5.00</strong>
                </label>
              </div>
            </div>
            <div class="row mt-3">
              <div class="offset-md-1 col-md-9" style="padding-left: 0">
                <div class="input-group mb-3">
                  <input type="text" class="form-control coupon-input" placeholder="Coupon Code">
                  <div class="coupon-arrow">
                    <font-awesome-icon type="button" :icon="['fas', 'long-arrow-alt-right']"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="offset-md-1 col-md-4 text-left"><strong>Discount</strong></div>
              <div class="col-md-5 text-right"><strong>$10.00</strong></div>
            </div>
            <div class="row">
              <div class="offset-md-1 col-md-4 text-left"><strong>Total</strong></div>
              <div class="col-md-5 text-right"><strong>$69.00</strong></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-12 text-center">
          <button style="border-radius: 25px;" type="button" class="btn btn-dark mr-2">Buy Later</button>
          <button style="border-radius: 25px;" type="button" class="btn btn-dark">Proceed to Checkout</button>
        </div>

      </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'single-product',
  components: {
    Navbar,
    Header,
    Footer
  },
  data () {
    return {
      description: true,
      specifications: false
    }
  },
  methods: {
    description_clicked () {
      var descrip = document.getElementById('descrip')
      var specs = document.getElementById('specs')
      if (this.description) {
        this.description = false
        this.specifications = true
        descrip.style.color = 'black'
        specs.style.color = 'darkgray'
      } else if (this.specifications) {
        this.description = true
        this.specifications = false
        descrip.style.color = 'darkgray'
        specs.style.color = 'black'
      }
    },
    specifications_clicked () {
      var descrip = document.getElementById('descrip')
      var specs = document.getElementById('specs')
      if (this.description) {
        this.description = false
        this.specifications = true
        descrip.style.color = 'black'
        specs.style.color = 'darkgray'
      } else if (this.specifications) {
        this.description = true
        this.specifications = false
        descrip.style.color = 'darkgray'
        specs.style.color = 'black'
      }
    }
  }
}
</script>
<style scoped>
.slider_img {
  content: url("../assets/slider01.jpg");
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
.image_width_100 {
  width: 100%;
}

.navbar {
  top: 0;
  transform: translateY(0);
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.coupon-input {
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  padding-left: 0;
  margin-left: 0.75rem;
}
.coupon-arrow {
  position: absolute;
  right: -5px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
</style>
