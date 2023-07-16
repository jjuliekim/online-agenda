// update today's date
const dateLabel = document.getElementById("date-label");
let date = new Date();
const day = date.getDay()
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
dateLabel.innerText = "Today is " + weekday[day] + " (" + (date.getMonth() + 1) + "/" + date.getDate() + ")";

// clear agenda
function clearClass(elementClass) {
    document.getElementsByClassName(elementClass).innerText = "";
}

/*
clear only that day's data
document.getElementsByClassName("clear").onclick = function() {
    clearClass("clear");
    clearClass("event-list");
    clearClass("task-list");
}*/
