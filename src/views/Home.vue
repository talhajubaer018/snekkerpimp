<template>
  <div class="home container">
    <div class="row">
      <div class='col-12'>
        <Header msg="Free Delivery on all orders over $60"/>
        <div class="row">
          <Navbar/>
          <div class="col-12 carousel slide slider_img_wrapper" style="padding: 0" id="carouselExampleIndicators" data-ride="carousel">
            <div class="carousel-inner slider_img">
              <div class="carousel-item active">
                <img class="" src="../assets/slider01.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="" src="../assets/slider01.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="" src="../assets/slider01.jpg" alt="Third slide">
              </div>
            </div>
            <div class="slider_img"></div>

            <div class="" style="z-index: 100; position: absolute; bottom: 0; width: 100%; transform: translateY(-50%);">
              <div style="float: left; transform: translateX(100%)">
                <div style="float: left; color: black" class="" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" size="2x"/>
                </div>
                <div style="float: left; color: black" class="ml-3 " href="#carouselExampleIndicators" role="button" data-slide="next">
                  <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" size="2x"/>
                </div>
              </div>
              <div style="float: right; transform: translateX(-100%);"><font-awesome-icon :icon="['fas', 'arrow-circle-right']" size="2x"/></div>
              <div style="float: right; transform: translateX(-50%); margin-top:5px">Shop Now</div>
            </div>
          </div>
        </div>
        <div class="card mt-3" style="border: 0">
          <div class="card-header row" style="background-color: transparent; border: 0">
            <div class="col-12 col-md-4">
              <div style="position: absolute; padding: 2rem; font-size: 2em">Men</div>
              <img class="image_width_100" src="../assets/men-category.jpg"/>
            </div>
            <div class="col-12 col-md-4">
              <div style="position: absolute; padding: 2rem; font-size: 2em">Women</div>
              <img class="image_width_100" src="../assets/women-category.jpg"/>
            </div>
            <div class="col-12 col-md-4">
              <div style="position: absolute; padding: 2rem; font-size: 2em">Accessory</div>
              <img class="image_width_100" src="../assets/accessory-category.jpg"/>
            </div>
          </div>
        </div>
        <div class="card mt-3" style="border: 0">
          <div class="card-header row" style="background-color: transparent; border: 0">
            <div class="col-6 col-md-6">
              <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 2em; color: white">
                <div>Men</div>
                <div>Discover More</div>
              </div>
              <img class="image_width_100" src="../assets/kona-thumb.jpg"/>
            </div>
            <div class="col-6 col-md-6">
              <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 2em; color: white">
                <div>Women</div>
                <div>Discover More</div>
              </div>
              <img class="image_width_100" src="../assets/kona-thumb-2.jpg"/>
            </div>
          </div>
        </div>
        <div class="card mt-3" style="border: 0">
          <div class="card-header row" style="background-color: transparent; border: 0">
            <div class="col-md-12">
              <div class="coats_jackets_container" style="">
                <div>Coats and Jackets</div>
                <div>
                  <button type="button" class="btn btn-light" style="border-radius: 20px">
                    Shop Now
                    <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/>
                  </button>
                </div>
              </div>
              <img class="image_width_100" src="../assets/coats-jackets.jpg"/>
            </div>
          </div>
        </div>
        <div class="card mt-3" style="border: 0">
          <div class="card-title">New Arrivals</div>
          <div class="card-header row mb-2" style="background-color: transparent; border: 0">
            <div class="col-6 col-md-3">
              <div>
                <img class="image_width_100" src="../assets/kona-thumb.jpg"/>
              </div>
              <div style="text-align: left">
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkred"/>
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkblue"/>
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkgreen"/>
                </div>
                <div style="clear: left">
                  <div>Julia Coat</div>
                  <div>$249.00</div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div>
                <img class="image_width_100" src="../assets/kona-thumb-2.jpg"/>
              </div>
              <div style="text-align: left">
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkred"/>
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkblue"/>
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkgreen"/>
                </div>
                <div style="clear: left">
                  <div>Julia Coat</div>
                  <div>$249.00</div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div>
                <img class="image_width_100" src="../assets/kona-thumb.jpg"/>
              </div>
              <div style="text-align: left">
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkred"/>
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkblue"/>
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkgreen"/>
                </div>
                <div style="clear: left">
                  <div>Julia Coat</div>
                  <div>$249.00</div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div>
                <img class="image_width_100" src="../assets/kona-thumb-2.jpg"/>
              </div>
              <div style="text-align: left">
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkred"/>
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkblue"/>
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon :icon="['fas', 'circle']" color="darkgreen"/>
                </div>
                <div style="clear: left">
                  <div>Julia Coat</div>
                  <div>$249.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-4" style="border: 0">
          <div class="card-title" style="color: darkgray">Sign Up</div>
          <div class="row">
            <div class="input-group mb-3 col-12 offset-md-5 col-md-3">
              <input type="text" class="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-dark" type="button" style="border-radius: 20px; border-bottom-left-radius: 0; border-top-left-radius: 0">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-3" style="border: 0">
          <div class="card-header row" style="background-color: transparent; border: 0; padding-bottom: 0">
            <img class="featured_image col-2 col-md-2" src="../assets/kona-thumb.jpg"/>
            <img class="featured_image col-2 col-md-2" src="../assets/kona-thumb-2.jpg"/>
            <img class="featured_image col-2 col-md-2" src="../assets/kona-thumb.jpg"/>
            <img class="featured_image col-2 col-md-2" src="../assets/kona-thumb-2.jpg"/>
            <img class="featured_image col-2 col-md-2" src="../assets/kona-thumb.jpg"/>
            <img class="featured_image col-2 col-md-2" src="../assets/kona-thumb-2.jpg"/>
          </div>
        </div>
        <Footer/>
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
  name: 'Home',
  components: {
    Navbar,
    Header,
    Footer
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
  transform: translateY(50%);
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-evenly
}
.coats_jackets_container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  color: white
}

@media only screen and (max-width: 480px){
  .carousel {
   min-height: 350px;
  }
  .coats_jackets_container {
    font-size: 2rem;
  }
}
</style>
