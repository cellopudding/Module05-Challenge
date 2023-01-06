// Ensures that the code isn't run until the browser has finished rendering 
// all the elements in the html.
$(document).ready(function () {

//Click event that saves to local storage
  $(".saveBtn").on("click", function (){
    var time = $(this).parent().attr("id")
    var descriptionValue = $(this).siblings(".description").val()
    localStorage.setItem(time, descriptionValue)
  })

// Ensures the saved values persist upon exiting browser and/or reloading page
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
  
//Function that uses Dayjs to interact with the HTML, it renders and updates
//the color of each hour block to reflect past, present, and future.
  function colorChange() {
    var rightNow = dayjs().hour()
    $(".time-block").each(function(){
    var hardTime = parseInt($(this).attr("id").split("-")[1])

    if (hardTime < rightNow) {
      $(this).addClass("past")

    } else if (hardTime === rightNow) {
      $(this).removeClass("past")
      $(this).addClass("present")

   } else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
   }
    })
  }
  colorChange()
  setInterval(colorChange, 15000)
  
//Code that displays current date in the header
 var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY h:ma'));

//Fun thing to clear schedule after a week (can be altered)
setInterval(function(){
  localStorage.clear
}, 604800000)
});
