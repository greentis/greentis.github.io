<script setup lang="ts">
import {ref} from 'vue';
import Block from './Block.vue'

const links = ref([
  {text:"Express practies", info:"", url:"index.html"},
  {text:"About", url:"index.html"},
  {text:"Blog", url:"index.html"}
])

// defineEmits
// defineProps
// withDefaults
type page = {
  tab: {text:string, url:string},
  title: string,
  content: string[]
}
type blogProps = {
  pages?: page[]
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
    <Block title="HKUST Examination management system" color="orange">
      This repo is currently in development and is private
      <img alt="snapshot" src="./assets/comp3111.png" width="100%" height="100%"/>
    </Block>
    <Block title="Forest Hunter" date="2024-9-11"  color="red">
      This game is made with javascript and three.js.
      Simple game algorithms such as A* pathfinding, perlin noise map generation
      and AI state machine is applied.
      <p>The game UI is made with vue.js</p>
      <img alt="snapshot" src="./assets/foresthunter.png" width="100%" height="100%"/>
    </Block>
    
    <Block title="Image Processing with Kuwahara Kernal" color="green">
      Kuwahara Kernal is a image processing algorithm that 
      smooths the image by averaging the pixel values in the
      neighbourhood. It is a non-linear filter that is used to
      reduce noise in the image.
      The project extended this algorithm to adapt to different shapes 
    </Block>
    <Block title="Raytracer" color="blue">
      Raytracer is a computer graphics project that practises raytracing
      using C++ and openGL. Mathmatical constructions are used for ray intersection.
      Phong Shading model concepts are applied there.
      <img alt="snapshot" src="./assets/raytracer.png" width="100%" height="100%"/>
    </Block>
  </div>
</template>

<style scoped>
div{
  overflow-y: scroll;
  height: calc(80vh);
}
</style>
