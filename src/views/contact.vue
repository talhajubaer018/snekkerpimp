<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Header msg="Free Delivery on all orders over $60" />
        <Navbar />
        <div class="row mt-5">
          <div class="col-md-12">
            <div><h2>Get in Touch</h2></div>
            <div><h5>Contact us for further questions</h5></div>
          </div>
        </div>
        <div class="row mt-5">
          <div class='col-md-4'>
            <div>
              <div>
                <font-awesome-icon :icon="['far', 'comment']" size="2x"/>
              </div>
              <div class="mt-3 mb-3"><h3>Let's Talk</h3></div>
              <div>Phone: 123456789</div>
              <div>Fax: 123456789</div>
              <div class="mt-3"><strong>hello@sneakerpimp.com</strong></div>
            </div>
          </div>
          <div class='col-md-4'>
            <div>
              <div>
                <font-awesome-icon :icon="['fas', 'shopping-cart']" size="2x"/>
              </div>
              <div class="mt-3 mb-3"><h3>Visit our Store</h3></div>
              <div>Elizabeth Street 123</div>
              <div>50050 Sydney</div>
              <div class="mt-3"><strong>See the map</strong></div>
            </div>
          </div>
          <div class='col-md-4'>
            <div>
              <div>
                <font-awesome-icon :icon="['fas', 'users']" size="2x"/>
              </div>
              <div class="mt-3 mb-3"><h3>Start your career</h3></div>
              <div>Commodo ad sint hashtag,</div>
              <div>voluptate consequat vero veniam.</div>
              <div class="mt-3"><strong>career@sneakerpimp.com</strong></div>
            </div>
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="offset-1 col-10 offset-md-1 col-md-3 text-left"><h3>Get in contact with us by filling out our contact form.</h3></div>
          <div class="offset-1 col-10 offset-md-0 col-md-8">
            <div>
              <input type="name" class="contact-input form-control" placeholder="Name*">
              <input type="email" class="contact-input form-control" placeholder="Email*">
              <input type="subject" class="contact-input form-control" placeholder="Subject">
              <input type="message" class="contact-input form-control" placeholder="Message*">
              <button type="button" class="pull-left mt-4 btn btn-dark" style="border-radius: 20px">Send</button>
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
