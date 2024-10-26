<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Blog from './components/Blog.vue'


import FlexBox from './notes/FlexBox.vue'
import Animation from './notes/Animation.vue'

import {reactive, ref, type Ref} from 'vue';
const tabs = {Home,About,Blog,FlexBox,Animation}
const mainTabs = {Home,About,Blog}
let activePage:Ref= ref("Home")
const dropdowns = ref([
                {text:"Html exercise", pages:[
                    {text:"Flexbox", tab:"FlexBox"},
                    {text:"Animation", tab:"Animation"}
                ]},
                {text:"Study Notes", pages:[
                    {text:"Biology keyword list", url:"https://hkustconnect-my.sharepoint.com/:w:/g/personal/kllauar_connect_ust_hk/EXlW0R9OOr9Cmt271k78Fa0Bhe4zSPyah7mZi8q2ZCKjUA?e=elZ3C4"}
                ]}
            ])
</script>

<style scoped>
.wrapper{
  position: absolute;
  left:8%;
  width:84%;
  transition: 0.3s;
  
}
</style>

<template>
    <NavBar
      :active-page="activePage"
      :pages="mainTabs"
      :dropdowns="dropdowns"
      :nav-link-click="(tab: string) => {activePage = tab;console.log(activePage)}"
      ></NavBar>

    <div class="wrapper">
      <component :is="tabs[activePage as keyof typeof mainTabs]">
      </component>
    </div>
</template>
