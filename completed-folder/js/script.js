const menuTrigger = document.querySelector('header #burgersm');
const mobilemenu = document.querySelector('#mySidenav');
const closemenu = document.querySelector('#mySidenav #burgersm2');
const menuOverlay = document.querySelector('.menuOverlay');
const sidenav = document.querySelector('#mySidenav');
const body = document.querySelector('body');

menuTrigger.addEventListener('click',(e)=>
{
  let body = e.target.closest('body');
  if(!mobilemenu.classList.contains('active'))
  {
    body.style.overflow="hidden";
    menuOverlay.classList.add('active');
    mobilemenu.classList.add('active');
  }
  else
  {
    body.style.overflow="auto";
    menuOverlay.classList.remove('active');
    mobilemenu.classList.remove('active');
  }
})

closemenu.addEventListener('click',(e)=>
{
  let body = e.target.closest('body');
  if(mobilemenu.classList.contains('active'))
  {
    openSidemnu(body);
  }
})

menuOverlay.addEventListener('click',(e)=>
{
  let body = e.target.closest('body');
  if(mobilemenu.classList.contains('active'))
  {
    openSidemnu(body);
  }
})

function openSidemnu(body)
{
  body.style.overflow="auto";
  menuOverlay.classList.remove('active');
  mobilemenu.classList.remove('active');
}

const windowEventList = ['load', 'resize'];
windowEventList.forEach(function(e) {
  window.addEventListener(e, setzIndex);
});

function setzIndex(e)
{
   if(e.type==="load" || e.type==="resize")
   {
    let bodyWidth = body.clientWidth;
    if(bodyWidth > 849)
    {
      sidenav.style.zIndex = 40;
    }
    else
    {
      sidenav.style.zIndex = 100;
    }
   }
}

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

// document.getElementsByTagName("svg").style.width="100%";