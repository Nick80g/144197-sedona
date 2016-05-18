var link = document.querySelector(".search");

var popup = document.querySelector(".search-hotel");
var close = popup.querySelector(".btn-search");

link.addEventListener("click",function(event) {
  event.preventDefault();
  popup.classList.add("search-hotel-show");
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("search-hotel-show");
});  
