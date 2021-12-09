var count = 0

function myFunction(x) {
    x.classList.toggle("change");
  }

document.querySelector(".menu_icon").addEventListener("click", function() {
  count += 1;
  if (count % 2 != 0) {
    document.getElementById("dropdown").className = "newclass"
    document.getElementById("main-order-button").style.display = "none";
  }
  else {
    document.getElementById("dropdown").className = "oldclass"
    document.getElementById("main-order-button").style.display = "flex";
  }
  console.log("Menu should appear and disappear");
});





