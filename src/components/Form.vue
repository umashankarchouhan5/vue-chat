<template>
  <div class="form_">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: "form_",
};
</script>

<style scoped>
.form_ {
  max-width: 500px;
  display: flex;

  align-items: center;
  margin-bottom: 5px;
}
.form_ > input {
  width: 400px;
  padding: 10px;
  font-weight: 700;
  outline: none;
  border: 1px solid grey;
}
.form_ > label {
  font-weight: 900;
  width: 200px;

  margin-bottom: 5px;
}
.form_ > input:focus {
  border: 1px solid rgb(169, 169, 231);

  background: wheat;
  outline: none;
}

@media (max-width: 600px) {
  .form_ {
    max-width: 300px;
    display: flex;

    align-items: center;
    margin-bottom: 5px;
  }
  .form_ > input {
    width: 250px;
    padding: 10px;
    font-weight: 700;
    outline: none;
    border: 1px solid grey;
  }
  .form_ > label {
    font-weight: 700;

    margin-bottom: 5px;
  }
}
</style>
