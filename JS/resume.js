
function showhide(x,current)
 {
       var div = document.getElementById(x);
	   var current=document.getElementById(current);
	 if (div.style.display !== "none") {
    div.style.display = "none";
		 current.src = "images/down.jpg";
	}
else {
    div.style.display = "block";
	current.src = "images/up.jpg";

}
 }

