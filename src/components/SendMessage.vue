<template>
  <div class="send_message mt-2 d-flex ms-2">
    <div class="bg-success send_message_child rounded-pill p-2">
      {{ message.sendMessage }}
    </div>
  </div>
</template>
<script>
export default {
  name: "send_message",

  props: ["message"],
};
</script>
<style scoped>
.send_message_child {
  position: relative;
}
.send_message_child::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  background-color: #198754;
  bottom: 0;
  right: 10px;
  transform: rotate(45deg);
}
</style>
