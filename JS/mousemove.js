function  mouseOver()  { 
document.getElementById("textcolour").style.color  =  "red"; 
} 

function  mouseOut()  { 
document.getElementById("textcolour").style.color  =  "black"; 

} 
document.getElementById("textcolour").onmouseover  =  function() {mouseOver()}; 
document.getElementById("textcolour").onmouseout  =  function() {mouseOut()};