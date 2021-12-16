<template>
  <div class="login">
    <Navigation />
    <!--
    <div class="form_container">
      <Form>
        <label for="username"><i class="fa fa-user" aria-hidden="true"></i>Username </label>
        <input type="text" v-model="username" />
      </Form>
      <Form>
        <label for="password"><i class="fa fa-key" aria-hidden="true"></i> Password</label>
        <input type="password" v-model="password" />
      </Form>
      <button class="btn btn-primary btn-block" @click="loginHandler">Login</button>
    </div>-->

    <div class="container">
      <div class="row bg-dark text-white">
        <div class="col-md-3"></div>
        <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1 class="fw-bold mb-4">User Login</h1>
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
          <button class="btn btn-primary mt-2" @click="loginHandler">login</button>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import { mapActions } from "vuex";
export default {
  name: "login",
  components: { Navigation },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginHandler() {
      if (this.username === "admin" && this.password === "admin123") {
        this.login();
        this.$router.push({ path: "/logindashboard" });
        console.log(this.username, this.password);
      }
      return;
    },
  },
};
</script>
<style scoped>
.form_container {
  width: 50rem;
  background: grey;
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 6px 5px 3px -1px rgba(64, 61, 61, 0.75);
  -webkit-box-shadow: 6px 5px 3px -1px rgba(64, 61, 61, 0.75);
  -moz-box-shadow: 6px 5px 3px -1px rgba(64, 61, 61, 0.75);
}
.login .container {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login .row {
  height: 50vh;
  width: 80%;
}
.login_elements {
  width: 100%;
}
</style>
