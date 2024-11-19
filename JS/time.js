function updateDateTime() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

// Call `updateDateTime` every second to update the time
setInterval(updateDateTime, 1000);

// Initial call to display the time immediately
updateDateTime();
