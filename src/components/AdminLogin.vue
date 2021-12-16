<template>
  <div class="admin_login">
    <Navigation />
    <div class="container">
      <div class="row bg-dark text-white">
        <div class="col-md-3"></div>
        <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1 class="fw-bold mb-4">Admin Login</h1>
          <div class="login_elements">
            <label for="username" class="form-label"
              ><i class="fa fa-user" aria-hidden="true"></i>username</label
            >
            <input type="text" class="form-control" v-model="username" />
          </div>
          <div class="login_elements">
            <label for="password" class="form-label"
              ><i class="fa fa-key" aria-hidden="true"></i>Password</label
            >
            <input type="password" class="form-control" v-model="password" />
          </div>
          <button class="btn btn-primary mt-2" @click="adminLoginHandler">login</button>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navigation from "./Navigation.vue";
export default {
  name: "admin_login",
  components: { Navigation },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["adminLogin"]),
    adminLoginHandler() {
      if (this.username === "admin" && this.password === "admin") {
        this.adminLogin();
        this.$router.push({ path: "/admindashboard" });
        console.log("adminloginsuccessful");
      }
    },
  },
};
</script>

<style scoped>
.admin_login .container {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.admin_login .row {
  height: 50vh;
  width: 80%;
}
.login_elements {
  width: 100%;
}
</style>
