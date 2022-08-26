console.log("script loaded");

const searchBox = document.getElementById("searchBox");
const searchGlassWrapper = document.getElementById("searchGlassWrapper");

// Input Focus
searchBox.addEventListener("focus", (event) => {
  searchGlassWrapper.style.display = "none";
  searchBox.style.paddingLeft = "20px";
  searchBox.style.paddingRight = "30px";
});

// Input Focus Out
searchBox.addEventListener("focusout", (event) => {
  searchGlassWrapper.style.display = "block";
  searchBox.style.paddingLeft = "50px";
});
