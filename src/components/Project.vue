<template>
  <div
    class="card mx-10 my-5 p-5 bg-white rounded-3xl w-2/3 grid place-items-center shadow-lg"
  >
    <img width="50" :src="require('@/assets/' + img + '')" alt="logo" />
    <h1 class="title my-4 text-center font-medium font-raleway text-xl">
      {{ title }}
    </h1>
    <p class="mb-4 text-center font-lato text-lg">
      {{ description }}
    </p>
    <a :href="link" target="_blank" class="text-samBlue font-lato">{{
      bottomtxt
    }}</a>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    description: String,
    img: String,
    bottomtxt: String,
    link: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  height: 20rem;
}
.title {
  border-bottom: 1px solid #48beff;
  padding-bottom: 5px;
}
</style>
