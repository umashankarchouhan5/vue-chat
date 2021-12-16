<template>
  <div class="receive_message mt-2 d-flex justify-content-end me-2">
    <div class="rounded-pill p-2 receive_message_child">
      {{ message.receiveMessage }}
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
.receive_message_child {
  position: relative;
  background-color: #2c0703;
}
.receive_message_child::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  background-color: #2c0703;
  bottom: -2px;
  left: 10px;
  transform: rotate(45deg);
}
</style>
