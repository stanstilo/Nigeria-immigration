var homeDiv = document.getElementById("homePage");
var aboutDiv = document.getElementById("aboutPage");
var contactDiv = document.getElementById("contactPage");
var askDiv = document.getElementById("askPage");
function test1(){
	homeDiv.className = "showDiv";
     aboutDiv.className = "removeDiv";
     contactDiv.className = "removeDiv";
      askDiv.className = "removeDiv";
}

function test2(){
	homeDiv.className = "removeDiv";
        aboutDiv.className = "showDiv";
        contactDiv.className = "removeDiv";
         askDiv.className = "removeDiv";
}

function messageMe(){
	contactDiv.className = "showDiv";
	homeDiv.className = "removeDiv";
        aboutDiv.className = "removeDiv";
        askDiv.className = "removeDiv";
}

function askQ(){
	askDiv.className = "showDiv";
	homeDiv.className = "removeDiv";
      aboutDiv.className = "removeDiv";
       contactDiv.className = "removeDiv";
}
 // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

$(".menu-toggle1").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper1").toggleClass("active");
    $(".menu-toggle1 > .fa-bars, .menu-toggle1 > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  $(".menu-toggle2").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper2").toggleClass("active");
    $(".menu-toggle2 > .fa-bars, .menu-toggle2 > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  $(".menu-toggle3").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper3").toggleClass("active");
    $(".menu-toggle3 > .fa-bars, .menu-toggle3 > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });
  // Closes responsive menu when a scroll trigger link is clicked
  // $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    // $("#sidebar-wrapper").removeClass("active");
    // $(".menu-toggle").removeClass("active");
    // $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  // });
