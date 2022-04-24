// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateDOM();
  });

function updateDOM() {
    console.log("updateDOM function triggered")
    document.getElementById("text").innerHTML = "This is really cool!";
}