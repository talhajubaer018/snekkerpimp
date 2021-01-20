<template>
  <div class="card" style="border: 0; background-color: #f7f8f9; padding-top: 2rem">
    <div class="row footer_container" style="padding-left: 2rem">
      <div class="col-12 offset-md-1 col-md-6">
        <div class="card-header row" style="padding:0; color: #b9b9ba; background-color: transparent; border: 0; width: 100%; display: flex; justify-content: space-between">
          <div>About Us</div>
          <div>Support</div>
          <div>Shop</div>
          <div>Contact</div>
          <div>Payment Options</div>
        </div>
        <div class="row mt-2">
          <div class="col-4 col-md-4" style="padding:0; text-align: left">
            <div>Our Company</div>
            <div>Our History</div>
            <div>Contact</div>
            <div>Jobs</div>
            <div>Journal</div>
            <div>Store Locations</div>
          </div>
          <div class="col-4 col-md-4" style="text-align: left">
            <div>FAQs</div>
            <div>Order Tracking</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Returns & Refunds</div>
            <div>Support</div>
          </div>
          <div class="col-4 col-md-4" style="text-align: left">
            <div>Women</div>
            <div>Men</div>
            <div>Accessories</div>
            <div>Tops</div>
            <div>Jeans</div>
            <div>Shirt</div>
          </div>
        </div>
        <div class="row mt-4 mb-4" style="text-align: left">
          <div class="col-4 col-md-4" style='padding: 0'>Terms & Conditions</div>
          <div class="col-4 col-md-4">Privacy & Cookie Policy</div>
          <div class="col-4 col-md-4">Help Center</div>
        </div>
      </div>
      <div class="col-12 offset-md-1 col-md-3" style="text-align: left">
        <div class="row">
          <div class='col-5 col-md-12' style="color: #b9b9ba;">Follow Us</div>
          <div class="col-7 col-md-12 mb-3">
            <font-awesome-icon class="mr-2" :icon="['fab', 'facebook-f']"/>
            <font-awesome-icon :icon="['fab', 'instagram']"/>
          </div>
          <div class='col-5 col-md-12' style="color: #b9b9ba;">Payment Options</div>
          <div class="col-7 col-md-12">
            <font-awesome-icon class="mr-2" :icon="['fab', 'cc-paypal']" size="2x"/>
            <font-awesome-icon class="mr-2" :icon="['fab', 'cc-visa']" size="2x"/>
            <font-awesome-icon class="mr-2" :icon="['fab', 'cc-mastercard']" size="2x"/>
            <font-awesome-icon class="mr-2" :icon="['fab', 'cc-amex']" size="2x"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media only screen and (max-width: 480px){
  .footer_container {
    font-size: 0.9em;
    line-height: 1.7;
  }
}
</style>
