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