"use strict";

//Create the menu for all pages
document.addEventListener('DOMContentLoaded', function (e) {
  var menuList = Object.create(menu);
  var element = document.getElementById("navigation");

  for (var i = 0; i < menuList.length; i++) {
    var title = document.getElementById("title");
    var paragraph = document.createElement("li");
    var newlink = document.createElement('a');
    var text = document.createTextNode(menuList[i].name);

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
}); //Using nested object array for easier handle the changes in the future

var menu = [{
  name: "HOME",
  url: "index.html",
  index_tab: "1"
}, {
  name: "ABOUT ME",
  url: "about_me.html",
  index_tab: "2"
}, {
  name: "PORTFOLIO",
  url: "portfolio.html",
  index_tab: "3"
}, {
  name: "EDUCATION",
  url: "education.html",
  index_tab: "4"
}, {
  name: "CONTACT ME",
  url: "contact_me.html",
  index_tab: "5"
}];