let sidebar = "closed";
let toOpen = "&#9776;";
let toClose = "&#10005;";

function nav() {
  if(sidebar == "open"){
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("sidebarToggle").innerHTML = toOpen;
    sidebar = "closed";
  }
  else {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("sidebarToggle").innerHTML = toClose;
    sidebar = "open";
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}