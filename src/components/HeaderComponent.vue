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
  <header class="w-full flex items-center py-12">
    <div class="container">
      <div class="flex justify-between relative">
        <div class="max-w-full">
          <router-link to="/">
            <img src="@/assets/avembleem-temp.png" class="lg:pr-[68px] max-w-none">
          </router-link>
        </div>
        <div class="max-w-full">
          <router-link to="/">
            <div class="pt-[42px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="246" height="25" viewBox="0 0 246 25">
                <text
                  id="Anneleen_Vernaillen" data-name="Anneleen Vernaillen"
                  transform="translate(0 20)" fill="#222" font-size="21"
                  font-family="HelveticaNeue-Medium, Helvetica Neue" font-weight="500"
                >
                  <tspan x="0" y="0">ANNELEEN VERNAILLEN</tspan>
                </text>
              </svg>
            </div>
            <h4>
              VISUAL ARTIST
            </h4>
          </router-link>
        </div>
        <div class="flex px-4 justify-end items-center w-full">
          <button
            id="navbarToggler"
            class="block absolute right-0 top-2 cursor-pointer translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
            :class="navbarTogglerClass" @click="toggleNavbar"
          >
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
          </button>

          <nav
            id="navbarCollapse" ref="navbarCollapse"
            class="flex justify-end py-5 lg:py-0 lg:px-4 xl:px-6 lg:max-w-full lg:block lg:static"
            :class="navbarCollapseClass"
          >
            <menu-component />
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
