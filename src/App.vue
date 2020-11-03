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
      <div class="pb-5">
        <div class="grid place-items-center md:flex">
          <Project
            :img="projects.osap.img"
            :title="projects.osap.title"
            :description="projects.osap.description"
            :bottomtxt="projects.osap.bottomtxt"
            :link="projects.osap.link"
          />
          <Project
            :img="projects.pwa.img"
            :title="projects.pwa.title"
            :description="projects.pwa.description"
            :bottomtxt="projects.pwa.bottomtxt"
            :link="projects.pwa.link"
          />
          <Project
            :img="projects.jamea.img"
            :title="projects.jamea.title"
            :description="projects.jamea.description"
            :bottomtxt="projects.jamea.bottomtxt"
          />
        </div>
      </div>
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
      <form name="emails" class="mb-10" netlify>
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
//import VueCarousel from "@chenfengyuan/vue-carousel";
import Project from "./components/Project";

export default {
  name: "App",
  components: {
    //VueCarousel,
    Project,
  },
  data() {
    return {
      projects: {
        osap: {
          title: "OSAP for Muslims",
          description:
            "An informational site for students and parents to educate themselves on how best to avoid interest",
          img: "o4mLogo.png",
          bottomtxt: "osapformuslims.ca",
          link: "https://osapformuslims.ca/",
        },
        pwa: {
          title: "Masjid Website",
          description:
            "A web app made for small - medium sized masajid/musallah who don’t yet have a website or app",
          img: "pwaLogo.png",
          bottomtxt: "Demo",
          link: "https://masjid-pwa.web.app/",
        },
        jamea: {
          title: "Jamea",
          description:
            "A school admin software featuring attendance, markbook and more.",
          img: "jameaLogo.png",
          bottomtxt: "Coming Soon",
          link: "",
        },
      },
    };
  },
};
</script>

<style>
</style>
