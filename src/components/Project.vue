<template>
  <div
    class="card flex-shrink-0 mx-10 my-10 p-10 bg-white rounded-3xl w-1/4 h-2/5"
  >
    <h1 class="font-raleway font-medium text-center m-4">{{ title }}</h1>
    <p class="font-lato text-center">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    description: String,
    status: Boolean,
    logo: Image,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
