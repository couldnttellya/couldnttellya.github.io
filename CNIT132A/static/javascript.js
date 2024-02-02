//      List of Links for Nav Bar
const navBarList = {
    'Homepage' : 'index.html',
    'Assignments' : 'assignments.html',
    'Contact' : 'contact.html',
    'Handy JoeB' : 'http://handyjoeb.com/',
    'Surf Journal' : '../surfJournal/index.html',
};

for (const property in navBarList){
    let navBar = document.getElementById("navBarPlaceholder");
    let listItem = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.setAttribute("href", navBarList[property]);
    anchor.innerHTML = property;
    listItem.appendChild(anchor);
    navBar.appendChild(listItem);
}