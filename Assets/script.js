
//check the current hour
var currentHour = moment().format('HH'); 
console.log(currentHour); 

// check current date
var currentDay = $('#currentDay');
var date = moment().format('dddd, MMMM Do YYYY');
currentDay.text(date); //display the current date
console.log(date);

var currentTime = $('<p>');
currentTime.text(moment().format('h:mm a')); //store the current time
currentTime.attr('class', 'time');
currentDay.append(currentTime); 

//add function to change colors of based on past, present, future time
function colorChange() {
    for (var i = 9 ; i <= 17 ; i++) { // 9 - 17 means time block from 9am - 5pm
        var eventHour = $('#' + i).attr('id')
        var textArea = $('#' + i)
     
    if (parseInt(currentHour) > parseInt(eventHour)) {
          textArea.css('backgroundColor', 'lightgrey'); //changes color for past time

    } else if (parseInt(currentHour) === parseInt(eventHour)) {
         textArea.css('backgroundColor', '#c6fffe'); //changes color for present time

    } else if (parseInt(currentHour) < parseInt(eventHour)) {
         textArea.css('backgroundColor', '#ffc9da'); //changes color for future time
    }
    }
}
colorChange();



function showCalendar() {
    var eventInput = JSON.parse(localStorage.getItem('items'));
    if (eventInput !== null) {
        for (i = 0; i < eventInput.length; i++) {
            $('#' + eventInput[i].hour).val(eventInput[i].input);
        }
    }
}

function saveToLocalStorage(e) {
    e.preventDefault();
    var array = [];
    for (i = 9; i <= 17; i++) {
        var input = $('#' + i).val();
        if (input) {
            var storeObject = {
                hour: i,
                input: input
            }
            array.push(storeObject);
            localStorage.setItem('items', JSON.stringify(array));
        }
    }
}

showCalendar();

// targets save button
var saveBtn = $('.saveBtn');
saveBtn.on('click', saveToLocalStorage);