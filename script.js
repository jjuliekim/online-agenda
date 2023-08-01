// update today's date
const dateLabel = document.getElementById("date-label");
let date = new Date();
const day = date.getDay()
const weekday = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday']
dateLabel.innerText = "Today is " + weekday[day] +
    " (" + (date.getMonth() + 1) + "/" + date.getDate() + ")";

// new event
function newEvent() {
    let title = prompt("Event Title:");
    while (title.trim() === "") {
        title = prompt("Invalid event title! \nEnter valid title:");
    }
    let description = prompt("Event Description:");
    while (description.trim() === "") {
        description = prompt("Invalid event description!\nEnter valid description:");
    }
    let day = prompt("Day of Event:",
        "Write as: Sunday, Monday, Tuesday, ...");
    day = day.charAt(0).toUpperCase() + day.substring(1).toLowerCase();
    while (!weekday.includes(day.trim())) {
        day = prompt("Invalid day!\nEnter valid a day of the week:");
    }
    let time = prompt("Time of Event:", "Write as: hh:mm AM/PM");
    if (time == null) return;
    const regex = /^([1-9]|[01][0-2]):(\d|[0-5]\d) (AM|PM)$/i;
    while (!regex.exec(time)) {
        time = prompt("Invalid event time! \nEnter valid time:",
            "Write as: hh:mm AM/PM");
    }

    // add the new event to the right day's event list
    let eventList = document.getElementsByClassName("event-list")
        .item(weekday.indexOf(day));
    let event = document.createElement("li");
    event.appendChild(document.createTextNode(`${title} (${description}) - ${time}`));
    eventList.appendChild(event);
}

// new task
let numCompleted = 0;
function newTask() {
    let description = prompt("Task Description:");
    while (description.trim() === "") {
        description = prompt("Invalid task description!\nEnter task description:");
    }
    let day = prompt("Day of Event:",
        "Write as: Sunday, Monday, Tuesday, ...");
    day = day.charAt(0).toUpperCase() + day.substring(1).toLowerCase();
    while (!weekday.includes(day.trim())) {
        day = prompt("Invalid day!\nEnter valid a day of the week:");
        day = day.charAt(0).toUpperCase() + day.substring(1).toLowerCase();
    }

    // add the new task to the right day's task list
    let taskList = document.getElementsByClassName("task-list")
        .item(weekday.indexOf(day));
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let desc = document.createTextNode(` ${description}`)
    checkBox.appendChild(desc);
    // don't want dupes
    /*checkBox.onclick = () => {
        if (checkBox.checked) {
            numCompleted++;
        } else {
            numCompleted--;
        }
        document.getElementById("num-completed").textContent = numCompleted.toString();
    };*/
    taskList.appendChild(checkBox);
    taskList.appendChild(desc);
    taskList.appendChild(document.createElement("br"));

    // add the new task to the task sidebar
    let taskSideBar = document.getElementById("all-task-list");
    let checkBoxTwo = document.createElement("input");
    checkBoxTwo.type = "checkbox";
    let text = document.createTextNode(` ${description} - ${day}`);
    checkBoxTwo.appendChild(text);
    // update number of tasks completed
    checkBoxTwo.onclick = () => {
        if (checkBoxTwo.checked) {
            numCompleted++;
        } else {
            numCompleted--;
        }
        document.getElementById("num-completed").textContent = numCompleted.toString();
    };
    taskSideBar.appendChild(checkBoxTwo);
    taskSideBar.appendChild(text);
    taskSideBar.appendChild(document.createElement("br"));
}

// set theme to default
function defaultTheme() {
    document.getElementById("menu-bar").style.backgroundColor = "";
    document.getElementById("date-label").style.color = "";
    document.getElementById("title").style.color = "";
    document.getElementById("main").style.backgroundColor = "";
    document.getElementById("sidebar").style.color = "";
    document.getElementById("sidebar").style.backgroundColor = "";
    document.getElementById("all-task-list").style.backgroundColor = "";
    for (const element of document.getElementsByClassName("dropdown-content")) {
        element.style.backgroundColor = "";
    }
    for (const element of document.getElementsByTagName("a")) {
        defaultBg(element);
    }
    for (const element of document.getElementsByClassName("top-text")) {
        element.style.backgroundColor = "";
        element.style.color = "";
    }
    for (const element of document.getElementsByClassName("top-divider")) {
        element.style.backgroundColor = "";
    }
    for (const element of document.getElementsByClassName("middle-divider")){
        element.style.backgroundColor = "";
    }
    for (const element of document.getElementsByClassName("bg-quick-notes")) {
        element.style.backgroundColor = "";
    }
    for (const element of document.getElementsByClassName("clear")) {
        element.style.backgroundColor = "";
        element.style.borderColor = "";
    }
    for (const element of document.getElementsByClassName("menu-button")) {
        defaultBg(element);
    }
    for (const element of document.getElementsByClassName("clear")) {
        element.style.backgroundColor = "";
        element.style.borderColor = "";
    }
    for (const element of document.getElementsByClassName("menu-button")) {
        element.style.backgroundColor = "";
    }
    defaultElements();
}

function defaultBg(element) {
    element.style.backgroundColor = "";
    element.style.color = "";
    element.onmouseenter = function() {
        this.style.backgroundColor = "";
    }
    element.onmouseleave = function() {
        this.style.backgroundColor = "";
    }
}

function lightTheme() {
    document.getElementById("menu-bar").style.backgroundColor = "white";
    document.getElementById("date-label").style.color = "";
    document.getElementById("title").style.color = "";
    document.getElementById("main").style.backgroundColor = "#b2b2b2";
    document.getElementById("sidebar").style.color = "";
    document.getElementById("sidebar").style.backgroundColor = "#e5e2e2";
    document.getElementById("all-task-list").style.backgroundColor = "";
    for (const element of document.getElementsByClassName("dropdown-content")) {
        element.style.backgroundColor = "lightGrey";
    }
    for (const element of document.getElementsByTagName("a")) {
        menuColors(element);
    }
    for (const element of document.getElementsByClassName("top-text")) {
        element.style.backgroundColor = "lightGrey";
        element.style.color = "";
    }
    for (const element of document.getElementsByClassName("top-divider")) {
        element.style.backgroundColor = "black";
    }
    for (const element of document.getElementsByClassName("middle-divider")){
        element.style.backgroundColor = "black";
    }
    for (const element of document.getElementsByClassName("bg-quick-notes")) {
        element.style.backgroundColor = "#8e8c8c";
    }
    for (const element of document.getElementsByClassName("clear")) {
        element.style.backgroundColor = "white";
        element.style.borderColor = "black";
    }
    for (const element of document.getElementsByClassName("menu-button")) {
        menuColors(element);
    }
    defaultElements();
}

function menuColors(element) {
    element.style.backgroundColor = "lightGrey";
    element.style.color = "";
    element.onmouseenter = function() {
        this.style.backgroundColor = "darkGrey";
    }
    element.onmouseleave = function() {
        this.style.backgroundColor = "lightGrey";
    }
}

function defaultElements() {
    for (const element of document.getElementsByClassName("textbox")) {
        element.style.backgroundColor = "";
    }
    for (const element of document.getElementsByClassName("quick-notes")) {
        element.style.backgroundColor = "";
    }
    for (const element of document.getElementsByClassName("event-box")) {
        element.style.backgroundColor = "";
    }
    for (const element of document.getElementsByClassName("task-box")) {
        element.style.backgroundColor = "";
    }
}

function darkTheme() {
    document.getElementById("menu-bar").style.backgroundColor = "#47474f";
    document.getElementById("date-label").style.color = "lightGrey";
    document.getElementById("title").style.color = "lightGrey";
    document.getElementById("main").style.backgroundColor = "#000000";
    document.getElementById("sidebar").style.backgroundColor = "#2a2a2c";
    document.getElementById("sidebar").style.color = "darkGrey";
    document.getElementById("all-task-list").style.backgroundColor = "#5d5c5c";
    for (const element of document.getElementsByClassName("dropdown-content")) {
        element.style.backgroundColor = "#272626";
    }
    for (const element of document.getElementsByTagName("a")) {
        element.style.backgroundColor = "#272626";
        element.style.color = "lightGrey";
        element.onmouseenter = function() {
            this.style.backgroundColor = "#4a4a4d";
        }
        element.onmouseleave = function() {
            this.style.backgroundColor = "#272626";
        }
    }
    for (const element of document.getElementsByClassName("top-text")) {
        element.style.backgroundColor = "#2a2a2c";
        element.style.color = "darkGrey";
    }
    for (const element of document.getElementsByClassName("top-divider")) {
        element.style.backgroundColor = "black";
    }
    for (const element of document.getElementsByClassName("middle-divider")){
        element.style.backgroundColor = "black";
    }
    for (const element of document.getElementsByClassName("bg-quick-notes")) {
        element.style.backgroundColor = "#272626";
    }
    for (const element of document.getElementsByClassName("clear")) {
        element.style.backgroundColor = "#9b9a9a";
        element.style.borderColor = "black";
    }
    for (const element of document.getElementsByClassName("menu-button")) {
        element.style.backgroundColor = "black";
        element.style.color = "lightGrey";
        element.onmouseenter = function() {
            this.style.backgroundColor = "#272626";
        }
        element.onmouseleave = function() {
            this.style.backgroundColor = "black";
        }
    }
    for (const element of document.getElementsByClassName("textbox")) {
        element.style.backgroundColor = "#5d5c5c";
    }
    for (const element of document.getElementsByClassName("quick-notes")) {
        element.style.backgroundColor = "#5d5c5c";
    }
    for (const element of document.getElementsByClassName("event-box")) {
        element.style.backgroundColor = "darkGrey";
    }
    for (const element of document.getElementsByClassName("task-box")) {
        element.style.backgroundColor = "darkGrey";
    }
}

// set on click event for each clear button
let clearElementsI = 0;
for (const element of document.getElementsByClassName("clear")) {
    element.onclick = () => { clearDayContent(clearElementsI) };
    clearElementsI++;
}

// clears the content for the right day of the week
function clearDayContent(dayI) {
    let eventList = document.getElementsByClassName("event-list").item(dayI);
    let taskList = document.getElementsByClassName("task-list").item(dayI);
    console.log("cleared");
    eventList.innerHTML = "";
    taskList.innerHTML = "";
}

// clears everything and sets back to default
function newPlanner() {
    defaultTheme();
    let quickNotes = document.getElementsByClassName("quick-notes");
    for (let notes of quickNotes) {
        notes.value = "";
    }
    let textboxes = document.getElementsByClassName("textbox");
    for (let textbox of textboxes) {
        textbox.value = "";
    }
    for (let i = 0; i < 6; i++) {
        clearDayContent(i);
    }
}