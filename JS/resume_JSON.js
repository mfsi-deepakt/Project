
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
      				out='<br><b>'+arr[0].name +'</b><br><br> '+arr[0].sex + ', ' + arr[0].dob +"<p style=\"float:right\"><b>Conatact No :</b>" +arr[0].contact_no +'</p><br><b>EMAIL : </b>'+ arr[0].email+'<br><br><hr><hr>';
				    document.getElementById("header").innerHTML=out; 
				     
				    // add career objective in the resume
				    out=arr[0].objective;    
				    document.getElementById("careerObjective").innerHTML = out;
				   
				    // write academics in the reumse
				    out='<li>'+ arr[0].academic[0].education+ '</li> <li>'+ arr[0].academic[1].education + '</li><li>'+arr[0].academic[2].education + '</li>';
				    document.getElementById("academicQualifications").innerHTML=out;
				   
				    // write technical skills
				    out='<li> <pre> Programming Languages :   '+ arr[0].skills[0].languages[0] +', ' +arr[0].skills[0].languages[1] +', '+arr[0].skills[0].languages[2]+', '+arr[0].skills[0].languages[3] + 
				    '</pre></li><li><pre> Query Language        :   ' + arr[0].skills[0].queryLanguage[0] +  ', ' + arr[0].skills[0].queryLanguage[1] +', ' +arr[0].skills[0].queryLanguage[2] + 
				    '</pre></li><li><pre> IDE                   :   ' + arr[0].skills[0].IDE[0] + ', ' + arr[0].skills[0].IDE[1]+ 
				    '</pre></li><li><pre> Operating System      :   '+arr[0].skills[0].os[0] +', '+arr[0].skills[0].os[1] +
				    '</pre></li><li><pre> Tools                 :   '+arr[0].skills[0].Tools +'</pre></li>'; 
				    document.getElementById("technical_skills").innerHTML = out; 

				    // Projects
				    out='<li><pre>'+ arr[0].projects[0].description + '                  [Team Members] = '+ arr[0].projects[0].member + 
				    '</pre><ul><li><pre> <b>About Project      :  </b>' + arr[0].projects[0].about + '</pre></li><li><pre> <b>Duration           :   </b>' + arr[0].projects[0].duration +
				    ' </pre></li><li><pre> <b>Technology         :   </b>' + arr[0].projects[0].technology+ '</pre></li></ul><br> </li><li><pre>'+
				    arr[0].projects[1].description + '                  [Team Members] = '+ arr[0].projects[1].member + 
				    '</pre><ul><li><pre> <b>About Project      :  </b>' + arr[0].projects[1].about + '</pre></li><li><pre> <b>Duration           :   </b>' + arr[0].projects[1].duration +
				    ' </pre></li><li><pre> <b>Technology         :   </b>' + arr[0].projects[1].technology+ '</pre></li></ul><br> </li>';
				    document.getElementById("projects").innerHTML = out;
				              
				    //achievements
				    out=''+arr[0].achivements;
				    document.getElementById("achivements").innerHTML = out;
				    
				    // certifiactes
                    out='<li>'+arr[0].certi[0].details[0] +'</li><li>'+arr[0].certi[0].details[1] + '</li><li>' +arr[0].certi[0].details[2] +'</li><li>' +arr[0].certi[0].details[3] + '</li>';
				    document.getElementById("certifiactes").innerHTML = out;

				    //personal dtails
				    out='<table style="padding: 0px 0px 0px 30px;"><tr><td>&#9642;Father-s name    :-</td><td>'+ arr[0].personalDetails[0].fathersName+'</td></tr><tr><td>&#9642; Date of Birth    :-</td><td>'+
				    arr[0].personalDetails[0].DOB +'</td></tr><tr><td>&#9642; Language         :-</td><td>'+arr[0].personalDetails[0].Language[0] +", "+ arr[0].personalDetails[0].Language[1]+ '</td></tr><tr><td>&#9642; Hobbies          :-</td><td>' +
				    arr[0].personalDetails[0].hobbies+ '</td></tr></table>';
				    document.getElementById("personalDetails").innerHTML= out;

}


function showhide(x,current)
 {
      	 var div = document.getElementById(x);
	   	 var current=document.getElementById(current);
	     if (div.style.display !== "none") {
    	 div.style.display = "none";
		 current.src = "images/down.jpg";
}
else 
{
         div.style.display = "block";
	     current.src = "images/up.jpg";

}
}