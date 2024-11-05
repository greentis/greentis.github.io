<script setup lang="ts">
// defineEmits
// defineProps
// withDefaults
type page = {
  tab: {text:string, url:string},
  title: string,
  content: string[]
}
type blogProps = {
  pages: page[]
}
const props = withDefaults(defineProps<
  blogProps
>(), {pages:()=>
  {
    return [
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
  ]}
})
</script>

<template>
  <div id="content" class="container">
    <h1>{{props.pages[2].title}}</h1>
            
    <p v-for="line in props.pages[2].content">{{line}}</p>
  </div>
</template>

<style scoped>
</style>
