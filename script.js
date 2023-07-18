// update today's date
const dateLabel = document.getElementById("date-label");
let date = new Date();
const day = date.getDay()
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
dateLabel.innerText = "Today is " + weekday[day] + " (" + (date.getMonth() + 1) + "/" + date.getDate() + ")";


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
        time = prompt("Invalid event time! \nEnter valid time:", "Write as: hh:mm AM/PM");
    }
    const result = regex.exec(time);
    const hour = result[1];
    const minute = result[2];
    const isAM = result[3].toLowerCase() === "am";

    // add the new event to the event list
    let eventList = document.getElementsByClassName("event-list")
        .item(weekday.indexOf(day));
    let event = document.createElement("li");
    event.appendChild(document.createTextNode(`${title} (${description}) - ${time}`));
    eventList.appendChild(event);
}