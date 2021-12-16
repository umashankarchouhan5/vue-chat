<template>
  <div class="ChatScreen" id="cha">
    <NavigationChat />
    <div class="row chat_body">
      <div class="col-sm-6 col-md-4 col-12 bg-light">
        <Contacts />
      </div>
      <div class="col-sm-6 col-md-4 bg-white message overflow-y-scroll d-none d-sm-block">
        <Message />
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from "./Contacts.vue";
import NavigationChat from "./NavigationChat.vue";
import Message from "./Message.vue";

export default {
  name: "ChatScreen",

  components: {
    Contacts,
    NavigationChat,
    Message,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  watch: {},

  methods: {},
  mounted() {
    console.log(this.screenWidth);
  },
};
</script>

<style>
body {
  overflow: hidden;
}

.chat_body {
  height: 100vh;
}
.message {
  position: relative;
  height: 95vh;
}
@media (max-width: 600px) {
  .message {
    position: relative;
    height: 100vh;
  }
}
</style>
