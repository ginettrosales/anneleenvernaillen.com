<script setup lang="ts">
import { menuItems } from '@/lists/menu'
</script>

<template>
  <ul class="block lg:flex border-l-dark-900 border-l-2 pl-4">
    <li v-for="item, index in menuItems" :key="index" class="relative group">
      <router-link
        :to="item.url"
        class="text-gray uppercase group-hover:text-black lg:inline-flex px-7 lg:px-1 flex mx-3"
      >
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
ul li a.router-link-active {
  color: var(--text-black);
  font-weight: 500;
}
</style>
