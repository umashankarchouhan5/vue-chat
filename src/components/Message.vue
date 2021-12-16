<template>
  <div v-if="!check">welcome to chatBot</div>
  <div v-else class="message">
    <div class="message_header text-white">
      <a class="fw-bolder ms-1 me-1 text-white" href="/chat"><i class="fas fa-arrow-left"></i></a>

      <img :src="contact.imageUrl" :alt="contact.name" class="message_image" />
      <div class="fw-bolder">{{ contact.name }}</div>
      <div class="chat_setting" @click="chatSettingHandler"><i class="fas fa-ellipsis-v"></i></div>
      <div class="chat_setting_modal" v-if="showChatSettingModal">
        <div class="list-group">
          <div class="list-group-item show_info" @click="showInfoHandler(contact)">
            {{ "contactsSelected" in contact ? "groupInfo" : contact.name }}
          </div>
          <div v-if="showGroupInfo">
            <div v-for="item in contact.contactsSelected" :key="item" class="list-group-item">
              {{ contacts[item].name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="message_body">
      <div v-for="(message, index) in messages" :key="index" class="text-white">
        <SendMessage :message="message" />
        <ReceiveMessage :message="message" />
      </div>
    </div>
    <div class="message_footer d-flex bg-dark">
      <div class="me-2 ms-2 message_footer_input">
        <input
          type="text"
          class="form-control fw-bold"
          placeholder="type a message..."
          v-model.trim="enteredMessage"
          @keyup.enter="sendMessage"
        />
      </div>
      <div class="col-md-4 col-3">
        <div class="footer_right">
          <label class="">
            <input type="file" style="display: none" @change="fileAttachmentHandler" />
            <a><i class="fa fa-paperclip" aria-hidden="true"></i> </a>
          </label>
          <i class="fa fa-paper-plane" aria-hidden="true" @click="sendMessage"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SendMessage from "./SendMessage";
import ReceiveMessage from "./ReceiveMessage";
export default {
  name: "message",
  components: { SendMessage, ReceiveMessage },
  data() {
    return {
      enteredMessage: "",
      showChatSettingModal: false,
      showGroupInfo: false,
    };
  },

  computed: {
    ...mapState(["contact", "input", "messages", "contacts"]),
    check() {
      return !!this.contact;
    },
  },
  methods: {
    ...mapActions(["sendMessageClick"]),
    async sendMessage() {
      if (this.enteredMessage.length == 0) {
        return;
      }
      await this.sendMessageClick(this.enteredMessage);
      this.enteredMessage = "";
      const message_body = document.querySelector(".message_body");
      message_body.scrollTop = message_body.scrollHeight;
    },
    fileAttachmentHandler(e) {
      const { size, name } = e.target.files[0];
      const sizeInMb = Number(size / (1024 * 1024)).toFixed(2);
      console.log(e.target.files[0]);
      console.log(sizeInMb);
      console.log(name);
      if (sizeInMb < 11) this.sendMessageClick(name + " " + sizeInMb + "mb");
    },
    chatSettingHandler() {
      this.showChatSettingModal = !this.showChatSettingModal;
    },
    showInfoHandler(contact) {
      console.log(contact);
      if ("contactsSelected" in contact) this.showGroupInfo = !this.showGroupInfo;
    },
  },
};
</script>
<style scoped>
body {
  height: 100vh;
}
.message {
  background-image: linear-gradient(
    to right top,
    #7c0649,
    #720f55,
    #651960,
    #542169,
    #3f2870,
    #353a82,
    #254a92,
    #005a9f,
    #007ab8,
    #009ac7,
    #00b9cc,
    #09d6c9
  );
}
.message_body {
  overflow-y: scroll;
  height: 90vh;
}

.message_header {
  display: flex;
  background: grey;
  align-items: center;
  width: 100%;
  position: relative;
}
.message_image {
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  border-radius: 4rem;
  margin-right: 3rem;
}
.chat_setting {
  position: absolute;
  right: 2rem;
  cursor: pointer;
}
.chat_setting_modal {
  position: absolute;
  width: 200px;
  right: 30px;
  top: 50px;
  z-index: 5;
  cursor: pointer;
}
.chat_setting_modal .show_info:hover {
  background: black;
  color: white;
}
.message_footer {
  position: relative;
  bottom: 1em;
  background: grey;
}

.message_footer_input {
  bottom: 10px;
  position: absolute;
  width: 80%;
  overflow: hidden;
}
.footer_right {
  color: rgb(98, 179, 125);
  position: absolute;
  bottom: 1.5em;
  right: 3em;
  display: flex;
  gap: 10px;
  align-items: center;
}

.fa-paper-plane:hover {
  color: rgb(37, 233, 70);
  cursor: pointer;
}
.fa-paperclip:hover {
  color: rgb(37, 233, 70);
  cursor: pointer;
}

@media (min-width: 700px) {
  .message_footer_input {
    bottom: 50px;
    position: absolute;
    width: 60%;
    overflow: hidden;
  }
  .footer_right {
    color: rgb(98, 179, 125);
    position: absolute;

    bottom: 4em;
    right: 5em;
    display: flex;
    gap: 20px;
    align-items: center;
  }
}
@media (max-width: 340px) {
  .footer_right {
    color: rgb(98, 179, 125);
    position: absolute;
    bottom: 1.6em;
    right: 1em;
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
@media (max-height: 600px) {
  .message_footer {
    position: relative;
    bottom: 2em;
    background: grey;
  }
}
</style>
