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
  "5PM"
];

idArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// Create rows for each hour
var hourRows = function () {
  var currentTime = moment().hour();

  for (var i = 0; i < hourArray.length; i++) {
    var row = $("<div>").addClass("row time-block").attr("id", idArray[i]);

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
    var textArea = $("<textarea>").addClass("col-10 description");
    var saveButton = $("<button>").addClass("btn saveBtn col");
    var saveIcon = $("<i>").addClass("fas fa-save");

    $(".container").append(row);
    row.append(hour, textArea, saveButton, saveIcon);
    saveButton.append(saveIcon);
  }
};

hourRows();
