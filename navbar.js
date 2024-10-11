Vue.createApp({
    data(){
        return {
            pages:[
                {text:"Home", url:"index.html"},
                {text:"About", url:"index.html"},
                {text:"Blog", url:"index.html"},
            ],
            dropdowns:[
                {text:"Html exercise", pages:[
                    {text:"Flexbox basics", url:"notes/flexbox.html"}
                ]},
                {text:"Study Notes", pages:[
                    {text:"Biology keyword list", url:"https://hkustconnect-my.sharepoint.com/:w:/g/personal/kllauar_connect_ust_hk/EXlW0R9OOr9Cmt271k78Fa0B3o_0kYQLswVonzWDQj7WHg?e=b5WVGf"}
                ]}
            ]
        }
    }
}).mount("#navbarNav");