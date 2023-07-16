// update today's date
let dateLabel = document.getElementById("date-label");
let date = new Date();
const day= date.getDay()
let weekday= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
dateLabel.innerText = "Today is " + weekday[day] + " (" + (date.getMonth() + 1) + "/" + date.getDate() + ")";

