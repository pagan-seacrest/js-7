"use strict";

function insertList (list, parent) {
    let ol = document.createElement("ol");
    document.getElementsByTagName("body")[0].append(ol);
    
    let liElement;

    list.map(element => {
        let li = document.createElement("li");
        li.textContent = element;
        ol.append(li);
        return liElement = li;
    });

    switch (parent) {
        case "ol": console.log(ol.parentElement);            
            break;
        case "li": console.log(liElement.parentElement);
            break;
        default: console.log(ol.parentElement);
            break;
        };
}

const list = ["Hello User", "Hello World!", "and programmer hello too",
 "hello mom and hello dad", "here the script that's greeting you"];

insertList(list);