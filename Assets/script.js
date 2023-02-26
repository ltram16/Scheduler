  var currentDay = $("#currentDay");
  var currentHour = moment().format("HH");
  console.log(currentHour);

  var date = moment().format("dddd, MMMM Do YYYY");
  currentDay.text(date);
  var currentTIme = $("<p>");
  currentTime.text(moment().format("h:mm a"));
  currentTime.attr("class", "time");
  currentDay.append(currentTime);

  function colorChange() { //will change color of the text area based on past, present, future
    
    for (var i = 10 ; i <= 18 ; i++) {

        var hourID = $("#" + i).attr("id")
        var textArea = $("#" + i)

        if (currentHour > hourID) {
            textArea.css("backgroundColor", "lightgrey"); //color for past

        } else if (currentHour === hourID) {
            textArea.css("backgroundColor", "#CCCCFF"); //color for present time
        } else if (currentHour < hourID) {
            textArea.css("backgroundColor", "pink"); //color for future
        }
    }
}
colorChange(); //starts when page loads