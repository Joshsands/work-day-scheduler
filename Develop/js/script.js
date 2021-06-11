hourArray = ["8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Create rows for each hour
var hourRows = function () {
    for (var i = 0; i < hourArray.length; i++) {
        var row = $("<div>").addClass("row time-block").attr("id", hourArray[i])
        var hour = $("<div>").addClass("col hour").text(hourArray[i])
        var textArea = $("<textarea>").addClass("col-10 description")
        var saveButton = $("<button>").addClass("btn saveBtn col")
        var saveIcon = $("<i>").addClass("fas fa-save")
        $(".container").append(row)
        row.append(hour,textArea, saveButton,saveIcon)
        saveButton.append(saveIcon)
    }
}

hourRows();