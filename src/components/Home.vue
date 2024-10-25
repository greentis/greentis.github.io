<script setup lang="ts">
// defineEmits
// defineProps
// withDefaults
const props = withDefaults(defineProps<{
  pages?: any
}>(), {pages:[
    {
        tab: {text:"Home", url:"index.html"},
        title: "Home Page",
        content: ["Name: Lau Kin Lun",
        "Degree: Computer Science"]
    },
    {
        tab: {text:"About", url:"index.html"},
        title: "About Page",
        content: ["This page is made with vue.js"
    ]
    },
    {
        tab: {text:"Blog", url:"index.html"},
        title: "Blog Page",
        content: ["Nothing Here Yet!"
    ]
    }
]})
</script>

<template>
  <div id="content" class="container">
    <h1>{{pages[0].title}}</h1>
            
    <p v-for="line in pages[0].content">{{line}}</p>
  </div>
</template>

<style scoped>
</style>
