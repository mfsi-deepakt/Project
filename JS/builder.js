var add = add || {
  	listElement  : function (ele){
  		ele.nextSibling.nextSibling.disabled= true;
		var data = ele.value;
		var li =document.createElement("LI");
	    var text=document.createTextNode(data);
		li.appendChild(text);
		ele.parentNode.appendChild(li);
		ele.value="";
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
     save_1 : function (self)
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
       add.listElement(self);
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
      	self.focus();
      } if(self.value.length < min)
      {
       self.style.backgroundColor ="red";
      	self.focus();	
      }
      else 
      { 
      	StoreData.save(self);
       self.style.backgroundColor ="#ffffe6";
      }
	},
    checkvalue_project : function(self)
    {

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
	checkvalue_1 : function(self,key)
	{
       var min=self.getAttribute("minlength");
       if(self.value.length < min)
       { 
        self.style.backgroundColor ="red";
        self.nextSibling.nextSibling.disabled= true;
      	self.focus();
      } else if(key==13  && self.style.backgroundColor !== "red")
      { 
      	 StoreData.save_1(self);
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

