
function writeData() {
      				//header
      				document.getElementById("name").innerHTML=localStorage['name'];
              document.getElementById("num").innerHTML=localStorage['number']
				      document.getElementById("email").innerHTML=localStorage['email'];
				      document.getElementById("dob").innerHTML=localStorage['bday']; 

				     
				    // add career objective in the resume
				      document.getElementById("careerObjective").innerHTML = localStorage['c_objective'];
				   
				    // write academics in the resume

				    var list = document.getElementsByTagName("UL")[0];
                    list.getElementsByTagName("LI")[0].innerHTML = localStorage['grad'];
                    list.getElementsByTagName("LI")[1].innerHTML = localStorage['inter'];
                    list.getElementsByTagName("LI")[2].innerHTML = localStorage['high'];
				   
				    // write technical skills
				    document.getElementById("pr").innerHTML = localStorage['p_skills'];
				    document.getElementById("ql").innerHTML = localStorage['q_skills'];
				    document.getElementById("ide").innerHTML = localStorage['ide'];
				    document.getElementById("os").innerHTML = localStorage['os'];

  				    // Projects

				   for(i=0;i<=localStorage['projectlen'];i++)
           {
            var data = localStorage['project'+i];
            if(data !== "")
            {
            addElement.add_list('projects', data);
           }}
				              
				    //achievements
            for(i=0; i<= localStorage['achievelen'];i++)
            {
              var data=localStorage['achieve'+i];
              if(data !=="")
              {
              addElement.add_list('achivements', data);
            }}
				     
				    // certifiactes
             for(i=0; i<= localStorage['certilen'];i++)
            {
              var data=localStorage['certi'+i];
              if(data !== "")
                { 
                addElement.add_list('certifiactes', data);
            }}
          
				     // personal dtails
                     addElement.add_details("mytr1",localStorage['fathers_name']);
                     addElement.add_details("mytr2",localStorage['bday']);
                     var data='';
                     for( i=0; i <=localStorage['langlen']; i++)
                     {
                      var temp = localStorage['lang'+i];
                      if(temp !== "")
                      {

                        data= data+temp;
                      }
                      if(i != localStorage['langlen'] )
                      {
                        data=data+", ";
                      }
                     }
                     addElement.add_details("mytr3",data);
                     data='';
                      for( i=0; i<= localStorage['hobbieslen']; i++)
                      {
                        var temp= localStorage['hobbies'+i];
                        if(temop !== "")
                        {
                          data= data+temp;
                        }
                       if(i != localStorage['hobbieslen'])
                      {
                        data=data+", ";
                      }
                      }
                     addElement.add_details("mytr4",data);
                     
}

var addElement = addElement || {
 add_details :function (td_id, text)
 {  
     var x = document.createElement("TD");
     var t = document.createTextNode(text);
     x.appendChild(t);
    document.getElementById(td_id).appendChild(x); 
 },
add_list : function(self,data) {
  var ele = document.createElement("LI");
  var tex = document.createTextNode(data);
  ele.appendChild(tex);
  document.getElementById(self).appendChild(ele);
}
}

function showhide(this_ele, show_id)
 {
      	 var div = document.getElementById(show_id);
      	 var ele = document.getElementById(this_ele);
	     if (div.style.display !== "none") {
    	 div.style.display = "none";
    	 ele.className ="fa fa-arrow-down";
		 
}
else 
{
         div.style.display = "block";
	    ele.className ="fa fa-arrow-up";
}
}