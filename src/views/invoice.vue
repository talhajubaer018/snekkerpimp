<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Header msg="Free Delivery on all orders over $60" />
        <Navbar />
        <div>
          <div class="row mt-5">
            <div class="col-md-10 mx-auto text-left">
              <div class="mr-5"><h2><strong>Order received</strong></h2></div>
              <div>Thank you. Your order has been received.</div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-10 mx-auto text-left">
              <div style="display:flex; justify-content: space-between">
                <div class="col-md-3 inline-block status-box">
                  <div>Order Number</div>
                  <div><strong>2660</strong></div>
                </div>
                <div class="col-md-3 inline-block status-box">
                  <div>Date</div>
                  <div><strong>February 1, 2021</strong></div>
                </div>
                <div class="col-md-2 inline-block status-box">
                  <div>Total</div>
                  <div><strong>$44.00</strong></div>
                </div>
                <div class="col-md-3 inline-block status-box">
                  <div>Payment method</div>
                  <div><strong>Cash on delivery</strong></div>
                </div>
              </div>
              <div class="text-left mt-3">Pay with cash upon delivery.</div>
              <div class="mt-5 mb-5">
                <div><h2>Order Details</h2></div>
                <div class="col-md-12 mt-4" style="display:flex;">
                  <div class="col-md-2">
                    <img class="" style="width: 100px" src="../assets/men-category.jpg"/>
                  </div>
                  <div class="col-md-3 mt-3">Longsleeve Shirt</div>
                  <div class="col-md-2 mt-3">x1</div>
                  <div class="col-md-3 mt-3">$39.00</div>
                </div>
                <div class="col-md-12 mt-3">
                  <div class='col-6 col-md-5 pull-left'>Subtotal:</div>
                  <div class='col-6 col-md-5 pull-right amount-right'>$39.00</div>
                </div>
                <div class="col-md-12 mt-3 clear-both">
                  <div class='col-6 col-md-5 pull-left mt-2'>Shipping:</div>
                  <div class='col-6 col-md-5 pull-right amount-right mt-2'>$5.00 via Flat rate</div>
                </div>
                <div class="col-md-12 mt-3 clear-both">
                  <div class='col-6 col-md-5 pull-left mt-2'>Payment method:</div>
                  <div class='col-6 col-md-5 pull-right amount-right mt-2'>Cash on delivery</div>
                </div>
                <div class="col-md-12 mt-3 clear-both">
                  <div class='col-6 col-md-5 pull-left mt-2'><strong>Total:</strong></div>
                  <div class='col-6 col-md-5 pull-right amount-right mt-2'><strong>$44.00</strong></div>
                </div>
              </div>

            </div>
          </div>

        </div>
        <Footer />
      </div>
    </div>
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
    }
  },
  methods: {
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
.contact-input {
  border: 0;
  border-bottom: 1px solid grey;
  border-radius: 0;
  padding: 1.5rem;
  padding-left: 0;
}
.status-box {
  padding: 1rem;
  border: 1px solid grey
}
@media only screen and (max-width: 480px){
  .amount-right {
    text-align: right;
    padding: 0;
  }
}
</style>
