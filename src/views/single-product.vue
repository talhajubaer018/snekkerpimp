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
          <div
            style="width: 75%; display: flex; justify-content: space-between"
          >
            <div>Home</div>
            <div>
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
            </div>
            <div>Men</div>
            <div>
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
            </div>
            <div>Accessories</div>
            <div>
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
            </div>
            <div>Drifter Jeans</div>
          </div>
          <div style="text-align: left">Brand</div>
          <div style="text-align: left">
            <h2>Drifter Jeans</h2>
          </div>
          <div style="text-align: left">Colorway</div>
          <div style="text-align: left">$39.00</div>
          <div style="text-align: left">
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
            <div
              class="card-header row"
              style="
                padding-left: 0;
                text-align: left;
                background-color: transparent;
                border: 0;
              "
            >
              <div class="col-3">More Colorways:</div>
              <div class="col-3">
                <img src="../assets/men-category.jpg" style="width: 100%" />
              </div>
              <div class="col-3">
                <img src="../assets/men-category.jpg" style="width: 100%" />
              </div>
              <div class="col-3">
                <img src="../assets/men-category.jpg" style="width: 100%" />
              </div>
            </div>
            <div class="row text-left">
              <div class="col-2">Size:</div>
              <div class="col-8">
                <div class="row">
                  <div class="col-2">S</div>
                  <div class="col-2">M</div>
                  <div class="col-2">L</div>
                  <div class="col-2">XL</div>
                  <div class="col-2">XXL</div>
                  <div class="col-2">XXXL</div>
                </div>
                <div>Size Guide</div>
                <div class="row">
                  <div
                    class="btn mr-4 mt-1"
                    style="background-color: lightgray; border-radius: 25px"
                  >
                    <div style="float: left; padding: 5px">
                      <font-awesome-icon
                        type="button"
                        :icon="['fas', 'minus']"
                      />
                    </div>
                    <div style="float: left; padding: 5px">1</div>
                    <div style="float: left; padding: 5px">
                      <font-awesome-icon
                        type="button"
                        :icon="['fas', 'plus']"
                      />
                    </div>
                  </div>
                  <div class="mt-3 mr-2">Add to cart</div>
                  <div class="mt-3 mr-2">
                    <font-awesome-icon
                      style="
                        background-color: black;
                        color: white;
                        border-radius: 25px;
                        padding: 5px;
                      "
                      :icon="['fas', 'long-arrow-alt-right']"
                      size="2x"
                    />
                  </div>
                  <div class="mt-3">
                    <font-awesome-icon :icon="['far', 'heart']" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-2 text-left">
            <div>SKU:</div>
            <div>Categories"</div>
            <div>Tags: jeans, men</div>
          </div>
          <div class="mt-2 text-left">
            <div style="float: left" class="mr-2">Share</div>
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
            <div
              class="card-header row mb-2"
              style="text-align: left; background-color: transparent; border: 0"
            >
              <div class="col-3" style="padding-left: 0">Description</div>
              <div class="col-3">Specifications</div>
            </div>
            <div style="clear: both">
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
          </div>
        </div>
      </div>
        <div class="card mt-3" style="border: 0">
          <div class="text-left card-header" style="border: none; background-color: transparent">Related Products</div>
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
