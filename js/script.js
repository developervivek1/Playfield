function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("burger").style.display = "none";
    document.getElementById("burger2").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("main").style.marginLeft= "50px";
     document.getElementById("burger2").style.display = "none";
     document.getElementById("burger").style.display = "block";
  }