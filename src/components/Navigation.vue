<template>
  <!--  <nav class="bg-dark d-flex justify-content-between" v-if="width > 800">
    <div class="d-flex">
      <a class="navbar-brand text-white my-2" href="#">NetEdge</a>

      <ul class="mr-auto d-flex flex-row navbar-links">
        <li class="nav-item active mx-3 my-2">
          <a class="nav-link text-white" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mx-3 my-2">
          <a class="nav-link text-white" href="/chat">Chat</a>
        </li>
      </ul>
    </div>

    <div class="form-inline my-2">
      <a
        class="btn btn-primary my-2 mx-3 my-sm-0"
        type="submit"
        href="/adminlogin"
        v-if="!isAdminLoggedIn"
        >AdminLogIn</a
      >
      <a class="btn btn-primary my-2 my-sm-0 mx-3" type="submit" href="/" v-else>AdminLogOut</a>

      <a class="btn btn-danger my-2 my-sm-0" type="submit" href="/login" v-if="!isLoggedIn"
        >LogIn</a
      >
      <a class="btn btn-danger my-2 my-sm-0" type="submit" href="/" v-else>LogOut</a>
    </div>
  </nav> -->

  <div>
    <b-navbar toggleable="lg" class="navigation" type="light" variant="secondary">
      <b-navbar-brand href="#">NetEdge</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="bg-secondary">
        <b-navbar-nav>
          <b-nav-item href="/" class="fw-bolder mx-3">Home</b-nav-item>
          <b-nav-item href="/chat" class="fw-bolder mx-3">Chat</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <a
              class="btn btn-info my-2 mx-3 my-sm-0"
              type="submit"
              href="/adminlogin"
              v-if="!isAdminLoggedIn"
              >Admin Login</a
            >
            <a class="btn btn-primary my-2 my-sm-0 mx-3" type="submit" href="/" v-else
              >Admin Logout</a
            >

            <a class="btn btn-primary my-2 my-sm-0" type="submit" href="/login" v-if="!isLoggedIn"
              >Login</a
            >
            <a class="btn btn-primary my-2 my-sm-0" type="submit" href="/" v-else>Logout</a>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navigation",

  computed: {
    ...mapState(["isLoggedIn", "isAdminLoggedIn"]),
  },
};
</script>

<style scoped>
nav {
  min-width: 100%;
  height: 60px;
}
.navbar-links {
  list-style-type: none;
}
.navbar-links .nav-link:hover {
  background: white;
  color: black !important;
}
.navigation {
  background: black;
  color: white;
}
</style>
