Vue.createApp({
    computed: {
        navbarClasses(){
            return{
                'navbar-light':!this.useDarkNavBar,
                'bg-light':!this.useDarkNavBar,
                'navbar-dark':this.useDarkNavBar,
                'bg-dark':this.useDarkNavBar
            }
        }
    },
    data(){
        return {
            activePage: 0,
            useDarkNavBar: false,
            pages:[
                {
                    tab: {text:"Home", url:"index.html"},
                    title: "Home Page",
                    content: "Name: Lau Kin Lun\nDegree: Computer Science"
                },
                {
                    tab: {text:"About", url:"index.html"},
                    title: "About Page",
                    content: "This page is made with vue.js"
                },
                {
                    tab: {text:"Blog", url:"index.html"},
                    title: "Blog Page",
                    content: "Path"
                }
            ],
            dropdowns:[
                {text:"Html exercise", pages:[
                    {text:"Flexbox basics", url:"notes/flexbox.html"}
                ]},
                {text:"Study Notes", pages:[
                    {text:"Biology keyword list", url:"https://hkustconnect-my.sharepoint.com/:w:/g/personal/kllauar_connect_ust_hk/EXlW0R9OOr9Cmt271k78Fa0Bhe4zSPyah7mZi8q2ZCKjUA?e=elZ3C4"}
                ]}
            ]
        }
    }
}).mount("body");

document.getElementById("dark-mode-toggle").onchange = ()=>{
    console.log(document.getElementById("dark-mode-toggle").value);
};
