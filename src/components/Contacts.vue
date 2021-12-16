<template>
  <div class="contacts">
    <div class="row">
      <div class="col-md-12">
        <div class="list-group">
          <Contact
            class="list-group-item"
            v-for="contact in contacts"
            :key="contact.id"
            :contact="contact"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact.vue";
import { mapState } from "vuex";

export default {
  name: "contacts",

  computed: mapState(["contacts"]),
  components: { Contact },
};
</script>
<style scoped>
.list-group-item:hover {
  transform: scale(0.99);
  cursor: pointer;
  background: grey;
}
</style>
