<template>
  <div class="login_dashboard">
    <Navigation />
    <h1 class="text-center">you are successfully logged in</h1>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  name: "login_dashboard",
  components: { Navigation },
};
</script>

<style scoped></style>
