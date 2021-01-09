<template>
  <div class="card" style="border: 0; background-color: #f7f8f9; padding-top: 2rem">
    <div class="row" style="padding-left: 2rem">
      <div class="offset-2 col-md-6">
        <div class="card-header row" style="color: #b9b9ba; background-color: transparent; border: 0; width: 100%; display: flex; justify-content: space-between">
          <div>About Us</div>
          <div>Support</div>
          <div>Shop</div>
          <div>Contact</div>
          <div>Payment Options</div>
        </div>
        <div class="row mt-2">
          <div class="col-md-4" style="text-align: left">
            <div>Our Company</div>
            <div>Our History</div>
            <div>Contact</div>
            <div>Jobs</div>
            <div>Journal</div>
            <div>Store Locations</div>
          </div>
          <div class="col-md-4" style="text-align: left">
            <div>FAQs</div>
            <div>Order Tracking</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Returns & Refunds</div>
            <div>Support</div>
          </div>
          <div class="col-md-4" style="text-align: left">
            <div>Women</div>
            <div>Men</div>
            <div>Accessories</div>
            <div>Tops</div>
            <div>Jeans</div>
            <div>Shirt</div>
          </div>
        </div>
        <div class="row mt-4" style="text-align: left">
          <div class="col-md-4">Terms & Conditions</div>
          <div class="col-md-4">Privacy & Cookie Policy</div>
          <div class="col-md-4">Help Center</div>
        </div>
      </div>
      <div class="offset-1 col-md-3 mt-3" style="text-align: left">
        <div style="color: #b9b9ba;">Follow Us</div>
        <div class="mt-2 mb-3">
          <font-awesome-icon class="mr-2" :icon="['fab', 'facebook-f']"/>
          <font-awesome-icon :icon="['fab', 'instagram']"/>
        </div>
        <div style="color: #b9b9ba;">Payment Options</div>
        <div class="mt-2">
          <font-awesome-icon class="mr-2" :icon="['fab', 'cc-paypal']" size="2x"/>
          <font-awesome-icon class="mr-2" :icon="['fab', 'cc-visa']" size="2x"/>
          <font-awesome-icon class="mr-2" :icon="['fab', 'cc-mastercard']" size="2x"/>
          <font-awesome-icon class="mr-2" :icon="['fab', 'cc-amex']" size="2x"/>
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
</style>
