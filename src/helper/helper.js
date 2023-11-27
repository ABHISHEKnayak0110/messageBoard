 function convertToFormattedTime(dateString) {
    // Parse the date string
    const date = new Date(dateString);
  
    // Convert to hh:mm:ss am/pm format
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  
    return formattedTime;
  }
  export {
    convertToFormattedTime
  }
