<!--  A  small  script  embedded  on  a  HTML webpage   --> 
<!DOCTYPE  html> 
<html> 
<head> 
<title>JavaScript  on  an  HTML  page</title> 
</head> 
<body> 

<h1>This  HTML  page  has  a  small  embedded  script</h1> 
<script  type="text/javascript"> 
document.write("Using  JavaScript  for  GIS"); 
</script> 

<p>The  text  above  looks  like  a  paragraph  but  it  really  is 
JavaScript!</p> 

</body> 
</html>

<!--  A message that displays when the website loads in a HTML page   --> 
<!DOCTYPE  html> 
<html> 
<head> 
<script  type="text/javascript"> 
function   message() 
{ 
alert("This   message   box  was   loaded   with  the  onload  event"); 
} 
</script> 
</head> 
<body  onload="message()"> 
</body> 
</html> 
 Function 
name 

<!--  An external Javascript connection to control the content of a HTML page   --> 

<!DOCTYPE  html> 
<html> 
<head> 

<title>External  script</title> 
<script  type="text/javascript"  src="js\externalscript.js"></script> 
<link  rel="stylesheet"  type="text/css"  href="css\css1.css"> 
</head> 

<body> 
<h1  id="mymodule"></h1> 
</body> 
</html> 

<!--  The javascript mentioned above for a .js file  --> 

window.onload  =  writeMessage; 

function  writeMessage()  { 
document.getElementById("mymodule").innerHTML  =  "EGM715,   Web-based  GIS"; 
} 

<!--  The mouseover colour change effect in HTML  --> 
<!DOCTYPE  html> 
<html> 
<head> 
<p   id="textcolour">This  text  changes  colour  when  you  move  the  mouse 
over  it.  This  paragraph  is  called  textcolour</p> 
</head> 
<body> 
<script  src="js\mousemove.js"></script> 
</body> 
</html>

<!--  The mouseover colour change effect in .JS  --> 

function  mouseOver()  { 
document.getElementById("textcolour").style.color  =  "red"; 
} 
function  mouseOut()  { 
document.getElementById("textcolour").style.color  =  "black"; 
} 
document.getElementById("textcolour").onmouseover  =  function() {mouseOver()}; 
document.getElementById("textcolour").onmouseout  =  function() {mouseOut()}; 


<!--  Adding today's date and time to a webpage  --> 
<!DOCTYPE  html> 
<html> 
<body> 

<p>  Today's  date  is: 
<script>  document.write(Date());  </script></p> 

</body> 
</html> 

<!--  Doing the same thing with an external .js file  --> 
<!DOCTYPE  html> 
<html> 
<p   id="date"></p> 
<head> 
<script  src="js\datetime.js"></script> 
</head> 
<body> 
</body> 
</html> 

<!--  .Js code for the above  --> 
var  date  =  new  Date(); 
document.getElementById("date").innerHTML  =  date;


<!--  using a button to display the date --> 
<!DOCTYPE  html> 
<html> 
<body> 
<link  rel  =  "stylesheet"  type  =  "text/css"  href  =  "css\css2.css"  /> 
<h1>JavaScript  button  to  display  date  and  time</h1> 
<button  type="button" 
onclick="document.getElementById('datetime').innerHTML  =  Date()"> 
Click  this  button  to  display  date  time</button> 
<div   style="background-color:lightblue"> 
<p>The  date  is:  <span  id="datetime"></span></p> 
</div> 
</body> 
</html> 


<!--  a rollover image effect in HTML code --> 

<!DOCTYPE  html> 
<html> 
<head> 
<script  src="js\moveimage.js"></script> 
</head> 
<body> 
<p>  The  image  below  shows  "The  Palm"  in  Dubai  in  2000  from   Google 
Earth.  Hover  over  the  image  to  see  the  area  in  2019</p> 
<img  id="image"  src="images/palm_before.jpg" 
onmouseover="moveon()" 
onmouseout="moveoff()"  width="785"  height="472"  /> 
</body> 
</html> 


<!--  a rollover image effect in .JS code --> 

function   moveon() 
{ 
document.getElementById('image').src="images/palm_after.jpg"; 
} 
function   moveoff() 
{ 
document.getElementById('image').src="images/palm_before.jpg"; 
} 

<!--  a rollover image effect in ONLY HTML code -->
 
<!DOCTYPE  html> 
<html> 
<head> 
<script> 
function   moveon() 
{ 
document.getElementById('image').src="images/palm_after.jpg"; 
} 
function   moveoff() 
{ 
document.getElementById('image').src="images/palm_before.jpg"; 
} 
</script> 
</head> 
<body> 
<p>  The  image  below  shows  "The  Palm"  in  Dubai  in  2000  from  Google 
Earth.  Hover  over  the  image  to  see  the  area  in  2019</p> 
<img  id="image"  src="palm_before.jpg" 
onmouseover="moveon()" 
onmouseout="moveoff()"  width="785"  height="472"  /> 
</body> 


<!--  a rollover text information in ONLY HTML code -->

<!DOCTYPE  html> 
<html> 
<head> 
<script> 
function   getdefinition(text) 
{ 
document.getElementById('definition').innerHTML=text; 
} 
function   reset() 
{ 
document.getElementById('definition').innerHTML=""; 
} 
</script> 
</head> 
<body> 
<p>Mouse  over  these  data  models:</p> 
<span  onmouseover="getdefinition('Uses  cells  or  pixels')" 
onmouseout="reset()">Raster</span> 
<br  /><br  /> 
<span  onmouseover="getdefinition('Uses  points,  lines  &   polygons')" 
onmouseout="reset()">Vector</span> 
<p>This  is  defined  as:</p><p  id="definition"></p> 
</body> 
</html> 

<!--  Including a google maps insert in a page -->
<!DOCTYPE  html> 
<html> 
<body> 
<p>You  can  use  the  Google  map  iframe  below:</p> 
<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1417077.24 
16574212!2d-
124.33582332596683!3d44.63625573794556!2m3!1f0!2f0!3f0!3m2!1i1024!2i7 
68!4f13.1!3m3!1m2!1s0x54c0e62912dca7a3%3A0x26821875985d4475!2sMcKenzi 
e+River!5e1!3m2!1sen!2suk!4v1551801555081"  width="600"  height="450" 
frameborder="0"  style="border:0"  allowfullscreen></iframe> 
</body> 
</html>