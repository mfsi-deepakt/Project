
console.log("hello");

var xmlhttp = new XMLHttpRequest();
var url = "JS/json.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        writeData(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function writeData(arr) {
      var out = "";

      				//header
      				document.getElementById("name").innerHTML=arr[0].name;
				    document.getElementById("num").innerHTML=arr[0].contact_no;
				    document.getElementById("email").innerHTML=arr[0].email;
				    document.getElementById("dob").innerHTML=arr[0].sex +", " +arr[0].dob; 

				     
				    // add career objective in the resume
				    out=arr[0].objective;    
				    document.getElementById("careerObjective").innerHTML = out;
				   
				    // write academics in the resume

				    var list = document.getElementsByTagName("UL")[0];
                    list.getElementsByTagName("LI")[0].innerHTML = ""+arr[0].academic[0].education;
                    list.getElementsByTagName("LI")[1].innerHTML = ""+arr[0].academic[1].education;
                    list.getElementsByTagName("LI")[2].innerHTML = ""+arr[0].academic[2].education;
				   
				    // write technical skills
				    document.getElementById("pr").innerHTML = arr[0].skills[0].languages.join(", ");
				    document.getElementById("ql").innerHTML = arr[0].skills[0].queryLanguage.join(", ");
				    document.getElementById("ide").innerHTML = arr[0].skills[0].IDE.join(", ");
				    document.getElementById("os").innerHTML = arr[0].skills[0].os.join(", ");
				    document.getElementById("te").innerHTML = arr[0].skills[0].Tools; 

				    // Projects

				    var template = document.getElementById('template').innerHTML;

  					//Parse it (optional, only necessary if template is to be used again)
  					Mustache.parse(template);

  					//Render the data into the template
  					var rendered = Mustache.render(template,{project_1: arr[0].projects[0].description, project_2 :arr[0].projects[1].description, about_1:arr[0].projects[0].about,
  						duration_1:arr[0].projects[0].duration, tech_1:arr[0].projects[0].technology,about_2:arr[0].projects[1].about,
  						duration_2:arr[0].projects[1].duration,tech_2:arr[0].projects[1].technology,mem_1:arr[0].projects[0].member, mem_2 : arr[0].projects[1].member});

  					//Overwrite the contents of #target with the rendered HTML
  					document.getElementById("projects").innerHTML = rendered;
				              
				    //achievements
				    out=''+arr[0].achivements;
				    document.getElementById("achivements").innerHTML = out;
				    
				    // certifiactes
				    var list2 = document.getElementsByTagName("UL")[4];
                    list2.getElementsByTagName("LI")[0].innerHTML = ""+arr[0].certi[0].details[0];
                    list2.getElementsByTagName("LI")[1].innerHTML = ""+arr[0].certi[0].details[1];
                    list2.getElementsByTagName("LI")[2].innerHTML = ""+arr[0].certi[0].details[2];
                    list2.getElementsByTagName("LI")[3].innerHTML = ""+arr[0].certi[0].details[3];
                 
				    //personal dtails
                     add_details("mytr1",arr[0].personalDetails[0].fathersName);
                     add_details("mytr2",arr[0].personalDetails[0].DOB);
                     add_details("mytr3",arr[0].personalDetails[0].Language.join(", "));
                     add_details("mytr4",arr[0].personalDetails[0].hobbies);


                    


}

function add_details(td_id, text)
 {
     var x = document.createElement("TD");
     var t = document.createTextNode(text);
     x.appendChild(t);
    document.getElementById(td_id).appendChild(x); 
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