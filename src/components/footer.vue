<template>
  <div class="card mt-3" style="border: 0; background-color: lightgrey">
    <div class="row">
      <div class="offset-2 col-6">
        <div class="card-header" style="background-color: transparent; border: 0; width: 100%; display: flex; justify-content: space-between">
        <div>About Us</div>
        <div>Support</div>
        <div>Shop</div>
        <div>Contact</div>
        <div>Payment Options</div>
      </div>
      </div>
      <div class="col-4 mt-3">
        <div>Follow Us</div>
        <div class="mt-2 mb-3">
          <font-awesome-icon class="mr-2" :icon="['fab', 'facebook-f']" />
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </div>
        <div>Payment Options</div>
        <div class="mt-2">
          <font-awesome-icon class="mr-2" :icon="['fab', 'cc-paypal']" size="2x"/>
          <font-awesome-icon class="mr-2" :icon="['fab', 'cc-visa']" size="2x"/>
          <font-awesome-icon class="mr-2" :icon="['fab', 'cc-mastercard']" size="2x"/>
          <font-awesome-icon class="mr-2" :icon="['fab', 'cc-amex']" size="2x"/>
        </div>
      </div>
    </div>
    <div class="text-left mt-2">
      <div class="mr-4" style="float: left">Privacy and Cookie Policy</div>
      <div>Help Center</div>
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
