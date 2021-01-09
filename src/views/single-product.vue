<template>
  <div class="home">
    <Header msg="Free Delivery on all orders over $60" />
    <Navbar />
    <div>
      <div class="row mt-3" style="padding: 1.5rem">
        <div class="col-7 product_image">
          <img src="../assets/men-category.jpg" style="width: 100%" />
        </div>
        <div class="col-5">
          <div style="width: 80%; display: flex; justify-content: space-between">
            <div><strong>Home</strong></div>
            <div>
              <font-awesome-icon style="color: lightgray" :icon="['fas', 'long-arrow-alt-right']" />
            </div>
            <div><strong>Men</strong></div>
            <div>
              <font-awesome-icon style="color: lightgray" :icon="['fas', 'long-arrow-alt-right']" />
            </div>
            <div><strong>Accessories</strong></div>
            <div>
              <font-awesome-icon style="color: lightgray" :icon="['fas', 'long-arrow-alt-right']" />
            </div>
            <div><strong>Drifter Jeans</strong></div>
          </div>
          <div class="mt-2" style="text-align: left"><strong>(Brand)</strong></div>
          <div style="text-align: left">
            <h2 class="mt-2"><strong>Drifter Jeans</strong></h2>
          </div>
          <div style="text-align: left">Colorway</div>
          <div style="text-align: left"><h3>$39.00</h3></div>
          <div style="text-align: left; color: darkgray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </div>
          <div class="card" style="border: 0">
            <div class="card-header row mt-4" style="padding-left: 0; text-align: left; background-color: transparent; border: 0;">
              <div class="col-3"><strong>More Colorways:</strong></div>
              <div class="col-3">
                <img type="button" src="../assets/men-category.jpg" style="width: 100%" />
              </div>
              <div class="col-3">
                <img type="button" src="../assets/men-category.jpg" style="width: 100%" />
              </div>
              <div class="col-3">
                <img type="button" src="../assets/men-category.jpg" style="width: 100%" />
              </div>
            </div>
            <div class="row text-left mt-4">
              <div class="col-3"><strong>Size:</strong></div>
              <div class="col-8">
                <div class="row">
                  <div class="col-2">
                    <button style="border: 1px solid black" type="button" class="btn btn-light">S</button>
                  </div>
                  <div class="col-2">
                    <button style="border: 1px solid black" type="button" class="btn btn-light">M</button>
                  </div>
                  <div class="col-2">
                    <button style="border: 1px solid black" type="button" class="btn btn-light">L</button>
                  </div>
                  <div class="col-2">
                    <button style="border: 1px solid black" type="button" class="btn btn-light">XL</button>
                  </div>
                </div>
                <div class="mt-4" style="text-decoration: underline" type="button">Size Guide</div>
                <div class="row">
                  <div class="btn mr-4 mt-2" style="background-color: #f7f8f9; border-radius: 25px">
                    <div style="float: left; padding: 5px">
                      <font-awesome-icon
                        type="button"
                        :icon="['fas', 'minus']"
                      />
                    </div>
                    <div style="float: left; padding: 5px">1</div>
                    <div style="float: left; padding: 5px">
                      <font-awesome-icon type="button" :icon="['fas', 'plus']"/>
                    </div>
                  </div>
                  <div class="mt-4 mr-4"><strong>Add to cart</strong></div>
                  <div class="mt-3 mr-4" type="button">
                    <font-awesome-icon :icon="['fas', 'arrow-circle-right']" size="2x"/>
                  </div>
                  <div class="mt-4" type="button">
                    <font-awesome-icon :icon="['far', 'heart']" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-2 text-left">
            <div>
              <div style="color: darkgray" class="pull-left mr-2">SKU:</div>
              <div class="pull-left">1122</div>
            </div>
            <div class="clear-both">
              <div style="color: darkgray" class="pull-left mr-2">Categories:</div>
              <div class="pull-left">men</div>
            </div>
            <div class="clear-both">
              <div style="color: darkgray" class="pull-left mr-2">Tags:</div>
              <div class="pull-left">jeans, men</div>
            </div>
          </div>
          <div class="mt-2 text-left clear-both">
            <div style="float: left; color: darkgray" class="mr-2">Share</div>
            <font-awesome-icon
              class="mr-2 mt-1 pull-left"
              :icon="['fab', 'facebook-f']"
            />
            <font-awesome-icon
              class="mt-1 pull-left"
              :icon="['fab', 'instagram']"
            />
          </div>
        </div>
      </div>
      <div class="row" style="padding: 1.5rem">
        <div class="col-4">
          <div>
            <img src="../assets/men-category.jpg" style="width: 100%" />
          </div>
        </div>
        <div class="col-8 text-left">
          <div class="card" style="border: none">
            <div class="card-header row mb-2" style="text-align: left; background-color: transparent; border: 0">
              <div type="button" @click="description_clicked" class="col-3" id="descrip" style=" padding-left: 0"><h5>Description</h5></div>
              <div type="button" @click="specifications_clicked" class="col-3" id="specs" style="color: darkgray"><h5>Specifications</h5></div>
            </div>
            <div v-show="description" style="clear: both; color: darkgray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </div>
            <div v-show="specifications" style="clear: both; color: darkgray">
              so the leap into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </div>
          </div>
        </div>
      </div>
        <div class="card mt-3" style="border: 0">
          <div class="text-left card-header" style="border: none; background-color: transparent">
            <h4>Related Products</h4>
          </div>
          <div
            class="card-header row mb-2"
            style="background-color: transparent; border: 0"
          >
            <div class="col-3">
              <div>
                <img class="image_width_100" src="../assets/kona-thumb.jpg" />
              </div>
              <div style="text-align: left">
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkred"
                  />
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkblue"
                  />
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkgreen"
                  />
                </div>
                <div style="clear: left">
                  <div>Julia Coat</div>
                  <div>$249.00</div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div>
                <img class="image_width_100" src="../assets/kona-thumb-2.jpg" />
              </div>
              <div style="text-align: left">
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkred"
                  />
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkblue"
                  />
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkgreen"
                  />
                </div>
                <div style="clear: left">
                  <div>Julia Coat</div>
                  <div>$249.00</div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div>
                <img class="image_width_100" src="../assets/kona-thumb.jpg" />
              </div>
              <div style="text-align: left">
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkred"
                  />
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkblue"
                  />
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkgreen"
                  />
                </div>
                <div style="clear: left">
                  <div>Julia Coat</div>
                  <div>$249.00</div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div>
                <img class="image_width_100" src="../assets/kona-thumb-2.jpg" />
              </div>
              <div style="text-align: left">
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkred"
                  />
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkblue"
                  />
                </div>
                <div style="float: left; padding: 5px">
                  <font-awesome-icon
                    :icon="['fas', 'circle']"
                    color="darkgreen"
                  />
                </div>
                <div style="clear: left">
                  <div>Julia Coat</div>
                  <div>$249.00</div>
                </div>
              </div>
          </div>
        </div>
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
</style>
