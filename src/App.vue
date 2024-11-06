<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Blog from './components/Blog.vue'


import FlexBox from './notes/FlexBox.vue'
import Animation from './notes/Animation.vue'

import {ref, type Ref} from 'vue';
const tabs = {Home,About,Blog,FlexBox,Animation}
const mainTabs = {Home,About,Blog}
export type mainTab = keyof typeof mainTabs; 
let activePage= ref("Home")
const dropdowns = ref([
                {text:"Html exercise", pages:[
                    {text:"Flexbox", tab:"FlexBox"},
                    {text:"Animation", tab:"Animation"}
                ]},
                {text:"Study Notes", pages:[
                    {text:"Excel Clock", url:"https://docs.google.com/spreadsheets/d/1lJ_0JLMESIgia7gz2Dnk26chOPg_oRuHrVBz6jnHQlQ/edit?usp=sharing"},
                    {text:"HCI project", url:"https://hkustconnect-my.sharepoint.com/:p:/g/personal/kllauar_connect_ust_hk/EfiqgDOZCI1PomgdO6IU_xcB5tHjywW4jrp075YCK7VPSg?e=2wcnqT"},
                    {text:"Biology keyword list", url:"https://hkustconnect-my.sharepoint.com/:w:/g/personal/kllauar_connect_ust_hk/EXlW0R9OOr9Cmt271k78Fa0Bhe4zSPyah7mZi8q2ZCKjUA?e=elZ3C4"}
                ]}
            ])
</script>

<style scoped>
.contentHub{
  position: absolute;
  left:8%;
  width:84%;
  transition: 0.3s;
}
</style>

<template>
    <NavBar
      :active-page="activePage"
      :pages="Object.keys(mainTabs) as unknown as mainTab[]"
      :dropdowns="dropdowns"
      :nav-link-click="(tab: string) => {activePage = tab;console.log(activePage)}"
      ></NavBar>

    <div class="contentHub">
      <component :is="tabs[activePage as keyof typeof mainTabs]">
      </component>
    </div>
</template>
