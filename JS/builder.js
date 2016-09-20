function addinput() {
  this.init= function()
  {
  	document.getElementById("hello").innerHtml="hi";
  }
	this.listElement =function (ele){
		var li =document.createElement("LI");
		var text=document.createElement("INPUT");
		li.appendChild(text);
		ele.appendChild(li);
	}
}