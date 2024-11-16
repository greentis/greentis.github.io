<script setup lang="ts">
// defineEmits
// defineProps
// withDefaults
const props = defineProps<{
}>()
</script>

<template>
  <div id="content" class="container">
    <h1>About me</h1>
    <ul>
      <li>Interest: Sport (Swimming, cycling, running, gym), Photography, Piano</li>
      <li>Programming (C++, Python, Java, Javascript, Typescript, Kotlin, VBA)</li>
      <li>Web/software development appertise</li>
    </ul>

    <h1>About this page</h1>
    <p>
        <strong>This page is made with Vue and Typescript</strong>
    </p>
    <ul>
      <li>The <strong><i>Blog</i></strong> tag contains some description to my personal projects</li>
      <li>The <strong><i>Html exercise</i></strong> tag contains some html+css exercise</li>
      <li>The <strong><i>Study notes</i></strong> tag contains some microsoft office skill application</li>

    </ul>
    <p>Try me with different aspect Ratio!</p>

  </div>
</template>

<style scoped>
</style>
