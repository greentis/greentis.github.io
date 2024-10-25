<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Blog from './components/Blog.vue'


import FlexBox from './notes/FlexBox.vue'
import Animation from './notes/Animation.vue'

import {reactive, ref} from 'vue';
const tabs = {Home,About,Blog,FlexBox,Animation}
const mainTabs = {Home,About,Blog}
let activePage = ref("FlexBox")
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

<template>
  <header> 
    <div class="wrapperDisabled">
      <NavBar
      :active-page="0"
      :pages="mainTabs"
      :dropdowns="dropdowns"
      :nav-link-click="(tab) => {activePage = tab;console.log(activePage)}"
      ></NavBar>
      
      <component :is="tabs[activePage]">
      </component>
    </div>
    
    

  </header>
</template>
