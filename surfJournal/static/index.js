
//          Creates First Instance of Iframe W/ buoy data
function generateIFrame(buoy) {
        const iframe = document.createElement("iframe");


        iframe.src = `https://www.ndbc.noaa.gov/widgets/station_page.php?station=${buoy}`;
        iframe.style = "border: solid thin #3366ff; width:300px; height:500px";
        iframe.id = "iframe";
        
        document.getElementById("iframeArea").appendChild(iframe);
}

//          Creates Second instance of buoy data and replaces the first on change of selection from drop down menu
function replaceIframe(buoy){
    const iframe = document.getElementById("iframe");
    const newIframe = document.createElement("iframe");

    newIframe.src = `https://www.ndbc.noaa.gov/widgets/station_page.php?station=${buoy}`;
    newIframe.style = "border: solid thin #3366ff; width:300px; height:500px";
    document.getElementById("iframeArea").replaceChild(newIframe, iframe);
    newIframe.id = "iframe";

}

//          Generates the text/journal entry area
function generateEntryArea(text) {
    const journalEntry = document.createElement("textarea");
    const submitButton = document.createElement("button");
    
    journalEntry.id = "journalEntry";
    journalEntry.placeholder = "Write your journal entry here!";
    journalEntry.style = "border: solid thin #3366ff; width:200px; height:500px";

    submitButton.id = "submit";
    submitButton.style = "border: solid; width:auto; height:auto";
    submitButton.innerHTML = "Submit Entry";

    document.getElementById("journalEntryArea").appendChild(journalEntry);
    document.getElementById("journalEntryArea").appendChild(submitButton);
    submitButton.addEventListener("click", submitEntry);

}

//          On change of selection from dropdown checks for instance of iframe and creates if none, replaces if existing and 
//          generates journal entry area if none exists
function check(buoy) {
    const iframe = document.getElementById("iframe");
    const entryArea = document.getElementById("journalEntry");
    if(iframe){
        replaceIframe(buoy);
    } else {
        generateIFrame(buoy);
    }
    
    if (! entryArea){
        generateEntryArea();
    } 
}

//          Make dropdown visible on radio button selection
function dropdownVisible() {
    document.getElementById("buoyList").style.visibility = "visible";
}

function submitEntry(){
    // see how many entries exist
    var entNum = localStorage.entNum;
    console.log(`Entries: ${entNum}`);
    // initiate journal obj
    var journal;
    // check if there are undefined entries and if so set to 0, otherwise get entry number and ++
    if (!entNum){
        entNum = 0;
        localStorage.entNum = entNum;
        journal = "";
    } else {
        entNum++;
        localStorage.entNum = entNum;
        journal = JSON.parse(localStorage.journal);
        console.log(`journal:${journal}`);
        if(!journal){
            journal = "";
        }
    }
    //          Here I need to create a new key value in the journal and take the user entry in the text area
    //          and set that to the value for the key
    journal[entNum] = document.getElementById("journalEntry").value;
    console.log(`current entry: ${journal[entNum]}`);
    //console.log(document.getElementById("journalEntry").value);
    //localStorage.setItem(entNum, document.getElementById("journalEntry").value);
    //console.log(`localStorage entNum:${localStorage.entNum}`);
    //console.log(`localStorage journal:${localStorage.journal}`);
    
    // get journal entry from local storage
    // log it
    //console.log(`Journal unparsed from localStorage: ${journal}`);
    // add current journal entry to obj at position of entNum
    //journal [Number(entNum)] = document.getElementById("journalEntry").value;
    
    
    //var existingJournal = localStorage.journal;
    //console.log(existingJournal);
    //if (!existingJournal){
    //    existingJournal = "";
    //}
    //
    //journal = JSON.stringify(existingJournal + journal);
    //console.log(journal);
    //localStorage.journal = journal;
    //console.log(localStorage.journal);
    //console.log(localStorage.journal);
    //console.log("this should just be the value you wrote in the box:");
}

function journalVisible(){

}

function checkName(){
    if (!document.getElementById("nameBox").value){
        if (!document.getElementById("noNameAlert")){
            const noNameAlert = document.createElement("div");
            noNameAlert.classList = "noNameAlert";
            noNameAlert.id = "noNameAlert";
            noNameAlert.innerHTML = "Did you mean to leave the name field blank?";
            document.getElementById("welcome").appendChild(noNameAlert);
            const yesName = document.createElement("button");
            yesName.innerHTML = "yes";
            yesName.id = "yesName";
            yesName.classList = "btn btn-primary";
            document.getElementById("welcome").appendChild(yesName);
            const noName = document.createElement("button");
            noName.innerHTML = "no";
            noName.id = "noName"
            noName.classList = "btn btn-primary";
            document.getElementById("welcome").appendChild(noName);
            document.getElementById("noName").addEventListener("click", () => {
                document.getElementById("nameBox").focus();
            })
        }
    } else {
        localStorage.name = document.getElementById("nameBox").value;
        console.log(localStorage.name);
        document.getElementById("spesificPropertiesDiv").style.visibility = "hidden";
        document.getElementById("welcomeMessage").innerHTML = `Welcome to SurfJournal, ${localStorage.name}!`
    }
}


if (document.getElementById("current").checked){
    dropdownVisible();
}

if (!localStorage.name){
    document.getElementById("spesificPropertiesDiv").style.visibility = "visible";
    const welcome = document.createElement("div");
    welcome.id = "welcome";
    welcome.classList = "welcome";
    welcome.innerHTML = "Hi! Welcome to Surf Journal. Put in a nickname to get Started:"
    
    document.getElementById("spesificPropertiesDiv").appendChild(welcome);
    
    const nameBox = document.createElement("input");
    nameBox.id = "nameBox";
    nameBox.classList = "input-group";
    nameBox.placeholder = "enter name here";

    const submitName = document.createElement("button");
    submitName.id = "submitNameButton";
    submitName.classList = "btn btn-primary";
    submitName.innerHTML = "Submit Name"
    
    document.getElementById("welcome").appendChild(nameBox);
    document.getElementById("welcome").appendChild(submitName);

    document.getElementById("submitNameButton").addEventListener("click", checkName);


}

function eraseName(){
    localStorage.removeItem("name");
}

//          NOTES
//
//  local storage keys: entryNumber, journalEntryEntryNumber, userName
