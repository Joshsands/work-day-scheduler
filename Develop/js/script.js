// CRITERIA
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// display the current date and time
$("#currentDay").text(moment().format("LLLL"));

// refresh time every 60s
setInterval(() => {
  $("#currentDay").text(moment().format("LLLL"));
}, 1000 * 60);

hourArray = [
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12AM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

idArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentTime = moment().hour();

// Create rows with for loop for each hour slot
for (var i = 0; i < hourArray.length; i++) {
  var row = $("<div>").addClass("row time-block").attr("id", idArray[i]);

  // for each row check current hour and display appropriate color
  if (idArray[i] < currentTime) {
    $(row).removeClass("future");
    $(row).removeClass("present");
    $(row).addClass("past");
  } else if (idArray[i] === currentTime) {
    $(row).removeClass("past");
    $(row).removeClass("future");
    $(row).addClass("present");
  } else {
    $(row).removeClass("present");
    $(row).removeClass("past");
    $(row).addClass("future");
  }

  var hour = $("<div>").addClass("col hour").text(hourArray[i]);

  // creates textarea with corresponding localStorage
  var textArea = $("<textarea>")
    .addClass("col-10 description")
    .html(localStorage.getItem(idArray[i]));

  var saveButton = $("<button>").addClass("btn saveBtn col");

  var saveIcon = $("<i>").addClass("fas fa-save");

  $(".container").append(row);
  row.append(hour, textArea, saveButton, saveIcon);
  saveButton.append(saveIcon);
}

// Wait for rows to append before calling new dom elements
$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var noteSave = $(this).siblings(".description").val();
    var hourSave = $(this).parent().attr("id");

    // Save text to local storage
    localStorage.setItem(hourSave, noteSave);
  });
});