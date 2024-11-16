<script setup lang="ts">
// defineEmits
// defineProps
// withDefaults
type page = {
  tab: {text:string, url:string},
  title: string,
  content: string[]
}
type homeProps = {
  pages: page[]
}
const props = withDefaults(defineProps<
  homeProps
>(), {pages:()=>
  {
    return [
    {
        tab: {text:"Home", url:"index.html"},
        title: "Home Page",
        content: ["Name: Lau Kin Lun",
        "Degree: Computer Science",
        "Organization: Hong Kong University of Science and Technology",
        "Graduation Year: 2026"]
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
    <h1>{{pages[0].title}}</h1>
            
    <p v-for="line in pages[0].content">{{line}}</p>
    <p>Email: <a href="kllauar@connect.ust.hk">kllauar@connect.ust.hk</a></p>


  </div>
</template>

<style scoped>
</style>
