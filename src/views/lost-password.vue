<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Header msg="Free Delivery on all orders over $60" />
        <Navbar />
        <div>
          <div class="row mt-5">
            <div class="col-10 col-md-6 mx-auto text-left">
              <div class="inline-block mr-5"><h4><strong>Lost your password?</strong></h4></div>
            </div>
          </div>
          <div class="row mt-4 mb-5">
            <div class="col-10 col-md-6 mx-auto">
              <div class="text-left mb-4">
                Please enter your username or email address. You will receive a link to create a new password via email.
              </div>
              <input type="email" class="contact-input form-control" placeholder="Username or Email">
              <div class='mt-4'>
                <button type="button" class="clear-both pull-left mt-4 btn btn-dark" style="border-radius: 20px; width: 175px">Reset Password</button>
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
</style>
