//      List of Links for Nav Bar

const navBarList = {
    'Homepage' : 'index.html',
    'Assignments' : 'assignments.html',
    'Contact' : 'contact.html',
    'Homework 3' : 'hw3.html',
    'Handy JoeB (external Site!)' : 'http://handyjoeb.com/',
    'Surf Journal (external App!)' : '../surfJournal/index.html',
};

//      For loop to iterate through each item in the above object
for (const property in navBarList){

    //  select the navbar placeholder & create a list element and anchor to append
    let navBar = document.getElementById("navBarPlaceholder");
    let listItem = document.createElement("li");
    let anchor = document.createElement("a");

    //  set anchor link and inner HTML
    anchor.setAttribute("href", navBarList[property]);
    anchor.innerHTML = property;
    
    //  regex to open external sites in a new tab
    let pattern = /external/;
    if (pattern.test(anchor.innerHTML) == true){
        anchor.setAttribute("target", "_blank");
    }

    //  append anchor to list element and list element to navBarPlaceholder
    listItem.appendChild(anchor);
    navBar.appendChild(listItem);
}
