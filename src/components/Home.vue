<template>
  <div class="homepage">
    <Navigation />
    <div class="home_background"></div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  name: "homepage",
  components: { Navigation },
};
</script>

<style scoped>
.home_background {
  background-image: url("https://images3.alphacoders.com/853/thumb-1920-85305.jpg");
  height: calc(100vh - 60px);
  width: 100%;
  background-size: cover;

  background-repeat: no-repeat;
}
</style>
