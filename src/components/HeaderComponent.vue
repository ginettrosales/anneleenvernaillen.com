<script setup lang="ts">
const navbar = reactive({
  show: false,
})
function toggleNavbar() {
  navbar.show = !navbar.show
}
const navbarTogglerClass = computed(() => {
  return navbar.show ? 'navbarTogglerActive' : ''
})
const navbarCollapseClass = computed(() => {
  return navbar.show ? '' : 'hidden'
})
</script>

<template>
  <header class="w-full flex items-center p-10">
    <div class="container-fluid w-full">
      <div class="flex justify-between relative">
        <div class="max-w-full">
          <router-link to="/">
            <img src="@/assets/avembleem-temp.png" class="h-[96px] pr-[36px] lg:pr-[42px] max-w-none">
          </router-link>
        </div>
        <div class="max-w-full">
          <router-link to="/">
            <div class="pt-[33px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="194" height="25" viewBox="0 0 194 25">
                <text
                  id="Anneleen_Vernaillen" data-name="Anneleen Vernaillen" transform="translate(0 20)" fill="#222"
                  font-size="18" font-family="'Poppins', Helvetica Neue" font-weight="500"
                >
                  <tspan x="0" y="0">ANNELEEN VERNAILLEN</tspan>
                </text>
              </svg>
            </div>
            <h4 class="leading-5">
              VISUAL ARTIST
            </h4>
          </router-link>
        </div>
        <div class="flex px-4 justify-end items-center w-full">
          <button
            id="navbarToggler"
            class="block absolute cursor-pointer translate-y-[-50%] xl:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
            :class="navbarTogglerClass" @click="toggleNavbar"
          >
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
          </button>

          <nav
            id="navbarCollapse" ref="navbarCollapse"
            class="absolute top-20 z-20 flex justify-end py-5 pr-2 bg-[#FFFEFD] shadow-lg max-w-[250px] xl:bg-transparent xl:py-0 xl:max-w-full xl:block xl:static xl:shadow-none"
            :class="navbarCollapseClass"
          >
            <menu-component />
          </nav>
          <div class="flex justify-end pt-2 pr-22 xl:pr-0 mr-[-10px]">
            <social-icons />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
button#navbarToggler:hover,
button#navbarToggler:active,
button#navbarToggler:focus {
  background: inherit;
  background-color: inherit !important;
  box-shadow: inherit !important;
}
</style>
