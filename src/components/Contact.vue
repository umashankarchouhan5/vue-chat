<template>
  <div
    class="contact d-flex align-items-center justify-content-between mt-2"
    @click="contactClickHandler(contact)"
  >
    <div class="fw-bolder">{{ contact.name }}</div>
    <img :src="contact.imageUrl" :alt="contact.name" class="contact_image rounded-circle" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "contact",
  props: ["contact"],

  methods: {
    ...mapActions(["contactClicked"]),
    async contactClickHandler(contact) {
      await this.contactClicked(contact);
      if (window.innerWidth < 540) {
        this.$router.push({ path: "/message" });
      }
    },
  },
};
</script>
<style scoped>
.contact_image {
  height: 5rem;
  width: 5rem;
  object-fit: cover;
}
</style>
