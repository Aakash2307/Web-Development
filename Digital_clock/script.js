function updateClock() {
    const now = new Date();
  
    // Array for days of the week
    const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const day = days[now.getDay()]; // Fix: Properly capitalize `getDay`
  
    // Extract time components and pad them
    const hour = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
  
    // Update the HTML elements with the time values
    document.getElementById("day").textContent = day;
    document.getElementById("hour").textContent = hour;
    document.getElementById("minute").textContent = minutes;
    document.getElementById("second").textContent = seconds;
  }
  
  // Run the clock immediately and update every second
  updateClock();
  setInterval(updateClock, 1000); // Fix: Pass function reference
  