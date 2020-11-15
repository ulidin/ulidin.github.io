document.addEventListener('DOMContentLoaded', function(e) {

    let menuList = Object.create(menu);

    let element = document.getElementById("navigation");


    for (let i = 0; i < menuList.length; i++) {
        let title = document.getElementById("title");
        let paragraph = document.createElement("li");
        let newlink = document.createElement('a');
        let text = document.createTextNode(menuList[i].name);



        if (title.innerHTML === menuList[i].name) {
            console.log(title.innerHTML);
            newlink.setAttribute('class', 'active');
        }
        newlink.setAttribute('tabindex', menuList[i].index_tab);
        newlink.setAttribute('href', menuList[i].url);

        newlink.appendChild(text);
        paragraph.appendChild(newlink);
        element.appendChild(paragraph);



    }

})


let menu = [{
        name: "HOME",
        url: "index.html",
        index_tab: "1"
    },
    {
        name: "ABOUT ME",
        url: "about_me.html",
        index_tab: "2"
    },
    {
        name: "PORTFOLIO",
        url: "portfolio.html",
        index_tab: "3"
    },
    {
        name: "EDUCATION",
        url: "education.html",
        index_tab: "4"
    },
    {
        name: "CONTACT ME",
        url: "contact_me.html",
        index_tab: "5"
    }
];