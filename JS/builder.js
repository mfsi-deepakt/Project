var add = add || {
  	listElement  : function (ele, child){
  		ele.nextSibling.nextSibling.disabled= true;
		var data = ele.value;
		var li =document.createElement("LI");
	    var text=document.createTextNode(data);
      var button =document.createElement("BUTTON");
      var id=ele.getAttribute("id");
      button.setAttribute("id",id+child);
      button.setAttribute("class", "remove");
      button.setAttribute("onclick","add.removeElement(this)")
		  li.appendChild(text);
      li.appendChild(button);
		  ele.parentNode.appendChild(li);
		  ele.value="";
		},
    removeElement : function(self)
    {
       var id_= self.getAttribute("id");
       localStorage[id_]="";
      self.parentNode.parentNode.removeChild(self.parentNode);
       }
}

var StoreData = StoreData||{
   save : function(self)
      {
        var id=self.getAttribute("id");
        if(typeof(Storage) !== "undefined") {
        	localStorage[id]=self.value;
       
            } else {
        alert("Your browser does'nt support local storage");
    }
     },
     
     save_doc : function (self)
     {
     	
     	var id=self.getAttribute("id");
     	var child= self.parentNode.childElementCount;
     	child = child-2;
        if(typeof(Storage) !== "undefined") {
        	localStorage[id+child]=self.value;
            localStorage[id+"len"]= child;
            } else {
        alert("Your browser does'nt support local storage");
                  }
       add.listElement(self,child);
     }
 }




var Form = Form ||{
	checkName : function(self)
	{
       var min=self.getAttribute("minlength");
        var letter = /^[a-zA-Z]+$/;
       if( !(self.value.match(letter)  ) ) 
       { 
        self.style.backgroundColor ="red";
      	//self.focus();
      } if(self.value.length < min)
      {
       self.style.backgroundColor ="red";
      	//self.focus();	
      }
      else 
      { 
      	StoreData.save(self);
       self.style.backgroundColor ="#ffffe6";
      }
	},
   
	checkvalue : function(self)
	{
       var min=self.getAttribute("minlength");
       if(self.value.length < min)
       { 
        self.style.backgroundColor ="red";
      	//self.focus();
      } else 
      { 
      	StoreData.save(self);
       self.style.backgroundColor ="#ffffe6";
      }
	},
   
    checknumber : function(self)
	{
       var phoneno = /^\d{10}$/;  
        if(!self.value.match(phoneno)) 
        {
      	self.style.backgroundColor ="red";
      	//self.focus();
      } else 
      { StoreData.save(self);
       self.style.backgroundColor ="#ffffe6";
      }

	},

	checkemail :function(self)
	{
		var email= /\S+@\S+\.\S+/;
		if(!email.test(self.value))
		{
			self.style.backgroundColor ="red";
      	  //  self.focus();
		}else
		{    StoreData.save(self);
			self.style.backgroundColor ="#ffffe6";}
	},
	
	checkdate :function(self)
	 {
	 	
       StoreData.save(self);
       self.style.backgroundColor ="#ffffe6";
	 
	},
	checkvalue_document : function(self,key)
	{
       var min=self.getAttribute("minlength");
       if(self.value.length < min)
       { 
        self.style.backgroundColor ="red";
        self.nextSibling.nextSibling.disabled= true;
      	self.focus();
      } else if(key==13  && self.style.backgroundColor !== "red")
      { 
      	 StoreData.save_doc(self);
    	 self.nextSibling.nextSibling.disabled= false;
         self.style.backgroundColor ="#ffffe6";
      }
      else
      {
      	self.nextSibling.nextSibling.disabled= false;
        self.style.backgroundColor ="#ffffe6";
      }
	}
}

