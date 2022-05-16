function openNav() {
    var element = document.getElementById("mySidenav");
    element.classList.add("mystyle");
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("burger").style.display = "none";
    document.getElementById("burger2").style.display = "block";
  }
  
function closeNav() {
    var element = document.getElementById("mySidenav");
    element.classList.remove("mystyle");
    document.getElementById("mySidenav").style.width = "80px";
    document.getElementById("main").style.marginLeft= "80px";
    document.getElementById("burger2").style.display = "none";
    document.getElementById("burger").style.display = "block";
  }


function openSearch(){
  var element = document.getElementById("search2");
  element.classList.toggle("form-search")
  document.getElementById("search2").style.transition = "ease-in .2s";
}  


// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then 
  function openNav() {
    var element = document.getElementById("mySidenav");
    element.classList.add("mystyle");
    document.getElementById("mySidenav").style.width = "80%";
    document.getElementById("mySidenav").style.zIndex = "999";
    document.getElementById("opacityDiv").style.display = "block";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("burgersm").style.display = "none";
    document.getElementById("burgersm2").style.display = "block";
  }

  function closeNav() {
    var element = document.getElementById("mySidenav");
    element.classList.remove("mystyle");
    document.getElementById("mySidenav").style.zIndex = "0";
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft= "0px";
    document.getElementById("burgersm2").style.display = "none";
    document.getElementById("burgersm").style.display = "block";
    document.getElementById("opacityDiv").style.display = "none";
  }
}

document.getElementsByTagName("svg").style.width="100%";