<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: false,
  },
})

// settings
const imageRatio: number = 420 / 1920
const minimumHeight = 320

// calculations
const calculateImageHeight = (screenWidth: number) => {
  const calculatedHeight = screenWidth * imageRatio
  return calculatedHeight <= minimumHeight ? minimumHeight : calculatedHeight
}
const image = reactive({
  height: calculateImageHeight(window.innerWidth),
})
const background = computed(() => {
  if (props.url && props.url.length > 0) {
    return {
      'height': `${image.height}px`,
      'background-image': `url(${props.url})`,
      'background-repeat': 'no-repeat',
      'background-position': 'center center',
    }
  }
  else {
    return {
      'height': `${image.height}px`,
      'background-color': '#DCD8D1',
    }
  }
})

onMounted(() => {
  window.onresize = () => {
    image.height = calculateImageHeight(window.innerWidth)
  }
})
</script>

<template>
  <div :style="background">
    <!-- img v-if="url" :src="url" class="animated animate-fade-in" -->
  </div>
</template>
