<template>
  <div class="admin_dashboard">
    <Navigation />
    <ul class="sidebar" ref="sidebar">
      <div class="bg-dark text-white text-end" @click="sidebarToogleHandler">
        <i class="fas fa-bars mr-1"></i>
      </div>
      <li class="sidebar-item">
        <a href="#" class="sidebar-item-link" @click="addUserModalHandler">Add User</a>
      </li>
      <div class="add_user_modal" v-if="showAddUserModal">
        <div class="my-2">
          <label for="username">username</label>
          <input type="text" class="form-control" v-model="username" />
        </div>
        <div class="my-2">
          <label for="userEmail">Email</label>
          <input type="email" class="form-control" v-model="email" />
        </div>

        <button class="btn btn-primary mx-3" @click="addUserHandler">Create</button>
        <button class="btn btn-danger" @click="addUserModalHandler">Close</button>
      </div>

      <li class="sidebar-item"><a href="#" class="sidebar-item-link">Delete User</a></li>
      <li class="sidebar-item"><a href="#" class="sidebar-item-link">Show Users</a></li>
    </ul>

    <!--
    <div class="row">
      <div class="col-sm-4">
        <button class="btn btn-outline-primary my-2 d-block p-3" @click="addUserModalHandler">
          AddUser
        </button>

        
        <button class="btn btn-outline-primary my-2 d-block ">DeleteUser</button>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import adminImage from "../.././public/assets/admin.png";
import { mapActions } from "vuex";
export default {
  name: "admin_dashboard",
  components: { Navigation },
  data() {
    return {
      username: "",
      email: "",
      showAddUserModal: false,
    };
  },
  methods: {
    ...mapActions(["addGroup"]),

    sidebarToogleHandler() {
      const sidebar = this.$refs.sidebar;
      if (sidebar.classList[1] === "toggle_sidebar") {
        sidebar.classList.remove("toggle_sidebar");
      } else sidebar.classList.add("toggle_sidebar");
    },

    addUserModalHandler() {
      this.showAddUserModal = !this.showAddUserModal;
    },
    addUserHandler() {
      const id = this.$store.state.countid++;
      const user = { name: this.username, imageUrl: adminImage, email: this.email, id: id };
      this.addGroup(user);
      this.username = "";
      this.email = "";
      this.showAddUserModal = !this.showAddUserModal;
      console.log(this.$store.state.contacts);
    },
  },
};
</script>

<style scoped>
.sidebar {
  margin-top: 30px;
  padding: 0;
  list-style-type: none;
  max-width: 200px;
}
.sidebar-item-link {
  display: inline-block;
  width: 200px;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  background: black;
  color: white;
  font-weight: 500;
}
.sidebar-item-link:hover {
  background: grey;
  color: white;
}

.toggle_sidebar {
  transform: translate(-90%);
}
.fa-bars {
  cursor: pointer;
}

.add_user_modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: grey;
  z-index: 15;
}
.add_user_modal input {
  width: 80%;
  margin-left: 10px;
}
</style>
