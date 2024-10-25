<script setup lang="ts">
    import {ref} from 'vue';
    interface navContent{
        activePage:any,
        pages:any,
        dropdowns:any,
        navLinkClick:(x:any)=>void
    }
    defineProps<navContent>()/* 
    defineEmits<{
        navLinkClick: (index:number)=> void
    }> */
    function changeTheme(){
        console.log(theme.value = (theme.value == "light" ? "dark" : "light"));
        return theme;
    }
    let theme = ref("light")
</script>

<style scoped>

</style>

<template>
    
    <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-sm']"
    >
    <!-- 2.1.1 Company Icon -->
        <img src="https://thegreenstudy.com/wp-content/uploads/2019/01/avocadocartoon.jpg?w=612"
        class="d-inline-block align-top"
        alt="my face"
        height="40px"
        width="30px"
        >

        <div class="container">
        <!-- 2.1.2 Company brand -->
            <label class="navbar-brand mb-0 h1">Curtis</label>
            <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation expand"
            >

        <!-- 2.1.3 Navigation Collapse Menu -->
            <span class="navbar-toggler-icon"></span>
            Menu</button>

        <!-- 2.1.4 Navigation items -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Make the alignment from left to right -->
                <ul  class="navbar-nav">
                    <li  v-for="(value, key) in pages" class="nav-item">
                        <a href="#"
                        class="nav-link"
                        :class="{active:key as unknown as string == activePage}"
                        @click.prevent="navLinkClick(key as unknown as string)">{{key}}</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li v-for="dropdown in dropdowns" class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropDown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{dropdown.text}}</a>
                        <ul class="dropdown-menu" aria-labelledby="#navbarDropDown">
                            <li v-for="page in dropdown.pages">
                                <a v-if="page.tab" @click.prevent="navLinkClick(page.tab)" a href="#" class="dropdown-item">{{page.text}}</a>
                                <a v-else a :href="page.url" class="dropdown-item">{{page.text}}</a>
                            
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <input type="checkbox" id="dark-mode-toggle">
                        <label @click="changeTheme" for="dark-mode-toggle" id="dark-mode-toggle-checkbox">
                            <svg id="sun" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9997 21L21.0068 21.007M20.9997 16L21.0068 16.007M20.9997 11L21.0068 11.007M18.4997 13.5L18.5068 13.507M13.4997 18.5L13.5068 18.507M18.4997 18.5L18.5068 18.507M15.9997 16L16.0068 16.007M10.9997 21L11.0068 21.007M15.9997 21L16.0068 21.007M16.4491 9.5509C16.4476 9.48611 16.4524 9.42086 16.4637 9.35606C16.4906 9.20195 16.5729 9.04504 16.7374 8.73121C17.2702 7.71526 17.5366 7.20728 17.528 6.85227C17.5131 6.23804 17.0911 5.70886 16.4956 5.55764C16.1514 5.47025 15.5969 5.61692 14.4878 5.91028C14.1452 6.00089 13.9739 6.0462 13.8177 6.03811C13.5499 6.02423 13.2988 5.90333 13.1209 5.70255C13.0172 5.58546 12.9458 5.42329 12.8031 5.09895C12.341 4.04897 12.1099 3.52398 11.827 3.30937C11.3375 2.93806 10.6606 2.93806 10.1711 3.30937C9.88815 3.52398 9.65709 4.04897 9.19497 5.09895C9.05222 5.42329 8.98084 5.58546 8.87711 5.70255C8.69925 5.90333 8.44819 6.02423 8.18032 6.03811C8.0241 6.0462 7.85281 6.00089 7.51023 5.91028C6.40119 5.61692 5.84667 5.47025 5.50248 5.55764C4.90697 5.70886 4.48496 6.23804 4.47005 6.85227C4.46144 7.20728 4.72783 7.71526 5.26061 8.73121C5.42519 9.04504 5.50747 9.20195 5.53435 9.35606C5.58042 9.6203 5.51841 9.89197 5.36225 10.11C5.27118 10.2372 5.12896 10.3429 4.84451 10.5542C3.92369 11.2384 3.46327 11.5805 3.317 11.9041C3.06393 12.464 3.21454 13.1239 3.68547 13.5185C3.95766 13.7466 4.5209 13.855 5.64739 14.0719C5.99537 14.1389 6.16935 14.1724 6.30659 14.2475C6.54191 14.3762 6.71565 14.5941 6.78878 14.8521C6.83144 15.0026 6.82538 15.1797 6.81327 15.5339C6.77405 16.6804 6.75445 17.2536 6.91624 17.5697C7.09068 17.9106 7.39322 18.153 7.74217 18.2578M12.9997 11C12.9997 12.1045 12.1043 13 10.9997 13C9.89517 13 8.99974 12.1045 8.99974 11C8.99974 9.8954 9.89517 8.99997 10.9997 8.99997C12.1043 8.99997 12.9997 9.8954 12.9997 11Z" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg>
                            <svg id="moon" width="800px" height="800px" viewBox="0 0 24 24" fill=black xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 13.1448 2.95764 14.2397 3.33685 15.25H12.8489C10.1562 14.1916 8.25 11.5684 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM18.1508 15.25H20.6631C20.9324 14.5327 21.1151 13.7727 21.1985 12.9825C20.4085 13.9854 19.359 14.7751 18.1508 15.25ZM22.2375 15.2884C22.5704 14.2513 22.75 13.1461 22.75 12C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.1461 1.4296 14.2513 1.76248 15.2884C1.46468 15.3877 1.25 15.6688 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.6688 22.5353 15.3877 22.2375 15.2884ZM4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3655 2.12433C20.0384 1.29189 18.8624 1.29189 18.5353 2.12433L18.1073 3.21354L17.0227 3.6429C16.1933 3.97121 16.1933 5.14713 17.0227 5.47544L18.1073 5.90481L18.5353 6.99401C18.8624 7.82645 20.0384 7.82646 20.3655 6.99402L20.7935 5.90481L21.8781 5.47544C22.7075 5.14714 22.7075 3.97121 21.8781 3.6429L20.7935 3.21354L20.3655 2.12433ZM19.4504 2.52989L19.8651 3.58533C19.9648 3.83891 20.165 4.04027 20.4188 4.14073L21.4759 4.55917L20.4188 4.97762C20.165 5.07808 19.9648 5.27943 19.8651 5.53301L19.4504 6.58846L19.0357 5.53301C18.936 5.27943 18.7358 5.07808 18.482 4.97762L17.4249 4.55917L18.482 4.14073C18.7358 4.04027 18.936 3.83891 19.0357 3.58533L19.4504 2.52989ZM16.4981 7.94681C16.171 7.11437 14.9951 7.11437 14.668 7.94681L14.5134 8.34008L14.1222 8.49497C13.2928 8.82328 13.2928 9.9992 14.1222 10.3275L14.5134 10.4824L14.668 10.8757C14.9951 11.7081 16.171 11.7081 16.4981 10.8757L16.6527 10.4824L17.0439 10.3275C17.8733 9.9992 17.8733 8.82328 17.0439 8.49497L16.6527 8.34008L16.4981 7.94681ZM15.583 8.35237L15.7243 8.71188C15.824 8.96545 16.0242 9.16681 16.278 9.26727L16.6417 9.41124L16.278 9.55521C16.0242 9.65567 15.824 9.85703 15.7243 10.1106L15.583 10.4701L15.4418 10.1106C15.3421 9.85703 15.1419 9.65567 14.8881 9.55521L14.5244 9.41124L14.8881 9.26727C15.1419 9.16681 15.3421 8.96545 15.4418 8.71188L15.583 8.35237Z"/></svg>
                        </label>
                    </li>
                </ul>
            </div>
            
        </div>
        
        <form class="d-flex">
            <input type="text" id="search-bar" class="form-control me-2">
            <label for="search-bar"></label>
            
            <button type="submit" class="btn btn-primary">Search</button>
        </form>
    </nav>
</template>

<style scoped>
nav{
    z-index:100px;
}
</style>