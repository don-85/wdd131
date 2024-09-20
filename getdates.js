alert(document.lastModified);

// getdates.js

function updateFooterDate() {
    // Get the current date and time
    const now = new Date();

    // Extract year, hours, minutes, and seconds
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time as HH:MM:SS
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Find the span with id 'currentyear' in the footer
    const footerTimeSpan = document.getElementById("currentyear");

    // Set the content of the span to display the year and time
    footerTimeSpan.textContent = `Current time: ${time}, ${year}`;
}

// Call the function once on page load
updateFooterDate();

// Optional: update the time every second (real-time clock)
setInterval(updateFooterDate, 1000);
