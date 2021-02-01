<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Header msg="Free Delivery on all orders over $60" />
        <Navbar />
        <div class="row mt-5 mb-5">
          <div class="col-md-6 mx-auto text-left">
            <div class="mb-5">
              <h2>Order Tracking</h2>
            </div>
            <div>
              To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.
            </div>
            <div class="mt-4">
              <input type="id" class="contact-input form-control" placeholder="Order ID">
              <input type="email" class="contact-input form-control" placeholder="Billing email">
              <button type="button" class="pull-left mt-4 btn btn-dark" style="border-radius: 20px; width: 100px">Track</button>
            </div>
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class='col-md-4'>
            <div>
              <div>
                <font-awesome-icon :icon="['fas', 'shopping-cart']" size="2x"/>
              </div>
              <div class="mt-4"><strong>Free International Shipping</strong></div>
              <div>On all orders over $100.00</div>
            </div>
          </div>
          <div class='col-md-4'>
            <div>
              <div>
                <font-awesome-icon :icon="['fas', 'undo-alt']" size="2x"/>
              </div>
              <div class="mt-4"><strong>45 Days Return</strong></div>
              <div>Money back guarantee</div>
            </div>
          </div>
          <div class='col-md-4'>
            <div>
              <div>
                <font-awesome-icon :icon="['fas', 'unlock-alt']" size="2x"/>
              </div>
              <div class="mt-4"><strong>Secure Checkout</strong></div>
              <div>100% secured checkout process</div>
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
</style>
