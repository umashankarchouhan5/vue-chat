<template>
  <div class="navigation_chat">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div>
          <a class="navbar-brand" href="/">Home</a>
          <!--create group-->
          <button
            class="btn btn-outline-success"
            type="submit"
            title="create group"
            @click="createGroupHandler"
          >
            <i class="fa fa-users" aria-hidden="true"></i>
          </button>
          <div class="create_group_modal" v-if="showCreateGroupModal">
            <button @click="createGroupHandler" class="btn btn-danger closebtn mt-1">
              <i class="fas fa-times"></i>
            </button>
            <div class="mb-2 group_name">
              <label for="groupname" class="form-label fw-bold">GroupName:</label>
              <input
                type="text"
                class="form-control"
                placeholder="enter group name.."
                v-model="groupName"
              />
            </div>
            <div class="mb-2 group_image">
              <label for="groupimage" class="form-label fw-bold">GroupImage:</label>
              <input type="file" class="form-control" @change="groupImageUpload" />
            </div>
            <div class="list-group">
              <div
                class="list-group-item"
                v-for="contact in this.$store.state.contacts"
                :key="contact.id"
              >
                <input type="checkbox" :value="contact.id" v-model="contactsSelected" />
                <Contact :contact="contact" />
              </div>
              <button
                class="btn btn-outline-dark list-group-item"
                type="submit"
                @click="createGroupSubmit"
              >
                create
              </button>
            </div>
          </div>
        </div>
        <!-- create group close-->

        <div class="" id="navbarSupportedContent">
          <form class="d-flex">
            <input
              class="me-2 form-control"
              type="search"
              placeholder="Add contact"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Contact from "./Contact.vue";
import { mapActions } from "vuex";
import image1 from "../.././public/assets/image4.jpg";
export default {
  name: "navigation_chat",
  components: { Contact },

  data() {
    return {
      showCreateGroupModal: false,
      groupName: "",
      contactsSelected: [],
    };
  },
  methods: {
    ...mapActions(["addGroup"]),
    createGroupHandler() {
      this.showCreateGroupModal = !this.showCreateGroupModal;
    },
    createGroupSubmit() {
      const id = this.$store.state.countid++;
      const contactsSelected = this.contactsSelected.map((item) => Number(item) - 1);
      console.log(contactsSelected);
      const group = {
        id: id,
        name: this.groupName,
        imageUrl: image1,
        contactsSelected: contactsSelected,
      };
      this.addGroup(group);
      this.showCreateGroupModal = false;
      console.log(group);
    },
    groupImageUpload(e) {
      console.log(e.target.files[0]);
    },
  },
};
</script>

<style scoped>
.create_group_modal {
  position: fixed;
  left: 0%;
  top: 0%;
  height: 100%;
  width: 100%;
  background: grey;
  z-index: 12;
  overflow-y: scroll;
}

.closebtn {
  position: absolute;
  right: 0;
  top: 0;
}
.group_name,
.group_image {
  width: 80%;
}
.list-group-item {
  width: 80%;
}
@media (min-width: 800px) {
  .create_group_modal {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 500px;
    background: grey;
    z-index: 12;
    overflow-y: scroll;
  }
}
</style>
