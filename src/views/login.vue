<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Header msg="Free Delivery on all orders over $60" />
        <Navbar />
        <div v-show="login">
          <div class="row mt-5">
            <div class="col-md-6 mx-auto text-left">
              <div class="inline-block mr-5"><h2>Login</h2></div>
              <div @click="login = !login" class="inline-block">
                <h5 class="inline-block mr-2" style="text-decoration: underline;" type="button">Create Account</h5>
                <font-awesome-icon class="inline-block" :icon="['fas', 'long-arrow-alt-right']"/>
              </div>
            </div>
          </div>
          <div class="row mt-4 mb-5">
            <div class="col-md-6 mx-auto">
              <input type="email" class="contact-input form-control" placeholder="Email address*">
              <input type="password" class="contact-input mt-4 form-control" placeholder="Password*">
              <div class='mt-4'>
                <input type="checkbox" class="pull-left mt-1 mr-2">
                <label for="" class='pull-left'>Remember Me</label>
                <h6 class="pull-right" style="text-decoration: underline; font-weight: bold" type="button">Lost Password</h6>
                <button type="button" class="clear-both pull-left mt-4 btn btn-dark" style="border-radius: 20px">Login</button>
              </div>
            </div>
          </div>
        </div>
        <div  v-show="!login">
          <div class="row mt-5">
            <div class="col-md-6 mx-auto text-left">
              <div class="inline-block mr-5"><h2>Create Account</h2></div>
              <div @click="login = !login" class="inline-block">
                <h5 class="inline-block mr-2" style="text-decoration: underline;" type="button">Login</h5>
                <font-awesome-icon class="inline-block" :icon="['fas', 'long-arrow-alt-right']"/>
              </div>
            </div>
          </div>
          <div class="row mt-4 mb-5">
            <div class="col-md-6 mx-auto">
              <input type="email" class="contact-input form-control" placeholder="Email address*">
              <input type="password" class="contact-input mt-4 form-control" placeholder="Password*">
              <div class="text-left mt-4">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </div>
              <div class='mt-4'>
                <button type="button" class="clear-both pull-left mt-4 btn btn-dark" style="border-radius: 20px">Register</button>
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
      login: true,
      register: false
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
