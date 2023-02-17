<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "Hello World!",
    };
  },
};
</script>
<style scoped lang="scss">
p {
    color:red;

    &:hover {
        color: darken($color: #CC4444, $amount: 15%)
    }
}

</style>
