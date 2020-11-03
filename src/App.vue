<template>
  <div id="app">
    <section id="topBanner" class="grid place-items-center">
      <img
        class="lg:mt-40 lg:w-1/3 md:w-2/5 mt-24 w-2/3"
        alt="Samaha logo"
        src="./assets/samahaVertical.png"
      />
      <h1 class="lg:text-4xl md:text-3xl text-2xl mt-5 mb-32 font-pop">
        Building a Community
      </h1>
    </section>
    <section id="middleBanner" class="h-auto bg-myGray">
      <h1
        class="font-raleway font-medium lg:text-4xl md:text-3xl text-2xl text-center pt-10"
      >
        Projects
      </h1>
      <div class="mt-5"></div>
    </section>
    <section id="bottomBanner" class="grid place-items-center">
      <h1
        class="font-raleway font-medium lg:text-4xl md:text-3xl text-2xl text-center py-10"
      >
        About Us
      </h1>
      <p
        class="font-lato font-light lg:text-2xl md:text-xl text-lg text-center w-2/3"
      >
        We’re working to create a platform for muslim professionals, scholars
        and grassroots organizations to pool resources and work together in
        order to solve contemporary issues facing our muslim communities.<br /><br />We’re
        still building. If you would like to be notified when we launch please
        leave your email below.
      </p>
      <form class="mb-10" action="">
        <input
          type="email"
          placeholder="email"
          class="mb-20 mt-10 bg-myGray rounded-l-xl h-12 placeholder-black placeholder-opacity-75 pl-4 font-mont"
        />
        <button
          class="font-pop font-regular text-white rounded-r-xl bg-samBlue h-12 px-5"
        >
          submit
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
</style>
