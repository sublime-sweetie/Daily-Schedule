
var tasks=document.querySelector(".container");
var addButton=document.querySelector(".btn btn-info");

// This will give me the current date and time, features use of a moment().
var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

// I will use moment to get me collumns of time  for each hour of the work day
// button feature that will eventually store the data to the local storage
$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );
  } );


//  I will modify this if statement to gray out blocks in the past 
var weekNum = today.format("w");
var takeOut;
// Check odd, then assign boolean
if(weekNum % 2) {
  takeOut = true;
} else {
  takeOut = false;
}

$("#4a").text(takeOut + ", because it's currently week " + weekNum);

// I will add an event listener to add task to local storage