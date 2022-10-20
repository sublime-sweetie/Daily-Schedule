var tasks=document.querySelectorAll("#userInput");
var addButton=document.querySelectorAll(".btn");
var usersTasks=document.querySelectorAll(".text");
var timeBlocks= document.querySelectorAll(".input-group-text")
var task1= [];

// This will give me the current date and time, features use of a moment().
var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));


function storedTasks() {
    localStorage.setItem("Tasks", JSON.stringify(tasks));

  };
// I will use moment to get me collumns of time  for each hour of the work day
// button feature that will eventually store the data to the local storage
$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button" ).on( "click", function( event ) {
      event.preventDefault();
      storedTasks;
      var todoText = usersTasks.value();
      if (todoText === "") {
        return;
      }
     tasks.push(task1);
      usersTasks.value = "";
   
      storedTasks();
  
    });
  
    } );
  storedTasks()
  console.log(usersTasks)
//  I will modify this if statement to gray out blocks in the past 
var time = today.format("h");
var grayOut;
var currentTime;
if(timeBlocks < time) {
  grayOut = true;
}else {
  grayOut = false;
}
if(timeBlocks==time) {
    currentTime= true;
}else{
    currentTime =false;
}
// $("span").text(grayOut + time);

// I will add an event listener to add task to local storage
for (var i = 0; i<addButton.length; i++){
addButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    var todoText = usersTasks.value();  
    
    
    if (todoText === "") {
      return;
    }
   tasks.push(task1);
    usersTasks.value = "";
 
    storedTasks();

  });
}
// function init() {
//     var storedTasks = JSON.parse(localStorage.getItem("usersTasks"));
//     if (storedTasks !== null) {
//         usersTasks = storedTasks;
//     }
//   }

//  saveButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     var todoText = usersTasks.value.trim();
//     if (todoText === "") {
//       return;
//     }
//    tasks.push(usersTasks);
//     usersTasks.value = "";
 
//     storedTasks();

//   });

//   saveButton.addEventListener("click", function(event) {
//     var element = event.target;
//     if (element.matches("button") === true) {
//       var index = element.parentElement.getAttribute("tasks");
//       usersTasks.splice(index, 0);

//       storedTasks();
    
//     }
//   });
  
//   init();