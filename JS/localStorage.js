
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

  				 /*   // Projects

				    var template = document.getElementById('template').innerHTML;

  					//Parse it (optional, only necessary if template is to be used again)
  					Mustache.parse(template);

  					//Render the data into the template
  					var rendered = Mustache.render(template,{project_1: arr[0].projects[0].description, project_2 :arr[0].projects[1].description, about_1:arr[0].projects[0].about,
  						duration_1:arr[0].projects[0].duration, tech_1:arr[0].projects[0].technology,about_2:arr[0].projects[1].about,
  						duration_2:arr[0].projects[1].duration,tech_2:arr[0].projects[1].technology,mem_1:arr[0].projects[0].member, mem_2 : arr[0].projects[1].member});

  					//Overwrite the contents of #target with the rendered HTML
  					document.getElementById("projects").innerHTML = rendered; */
				              
				    //achievements
            for(i=0; i<= localStorage['achievelen'];i++)
            {
              var data=localStorage['achieve'+i];
              addElement.add_list('achivements', data);
            }
				     
				    // certifiactes
             for(i=0; i<= localStorage['certilen'];i++)
            {
              var data=localStorage['certi'+i];
              addElement.add_list('certifiactes', data);
            }
          
				     // personal dtails
                     addElement.add_details("mytr1",localStorage['fathers_name']);
                     addElement.add_details("mytr2",localStorage['bday']);
                     var data='';
                     for( i=0; i <=localStorage['langlen']; i++)
                     {
                      data = data+localStorage['lang'+i];
                      if(i != localStorage['langlen'])
                      {
                        data=data+", ";
                      }
                     }
                     addElement.add_details("mytr3",data);
                     data='';
                      for( i=0; i<= localStorage['hobbieslen']; i++)
                      {
                       data= data +localStorage['hobbies'+i];
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