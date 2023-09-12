$(document).ready(function () {
    // Function to update the colors based on the current time
    function updateColors() {
      const currentHour = moment().hours();
  
      $(".time-block").each(function () {
        const hour = parseInt($(this).attr("id").split("-")[1]);
  
        if (hour < currentHour) {
          $(this).addClass("past").removeClass("present future");
        } else if (hour === currentHour) {
          $(this).addClass("present").removeClass("past future");
        } else {
          $(this).addClass("future").removeClass("past present");
        }
      });
    }
  
    // Add an event listener to save button
    $(".saveBtn").on("click", function () {
      const value = $(this).siblings(".description").val();
      const timeId = $(this).parent().attr("id");
  
      localStorage.setItem(timeId, value);
    });
  
    // Remember calendar entries
    for (let hour = 9; hour <= 17; hour++) {
      $(`#hour-${hour} .description`).val(localStorage.getItem(`hour-${hour}`));
    }
  
    // Update the colors immediately and every 15 seconds
    updateColors();
    setInterval(updateColors, 15000);
  
    // Display the current date/time in the header
    const currentDate = dayjs();
    $("#currentDay").text(currentDate);
  });