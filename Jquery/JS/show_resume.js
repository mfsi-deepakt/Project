
$(document).ready( function() {
      				//header
      				$("#name").html(localStorage['name']);
              $("#num").html(localStorage['number']);
				      $("#email").html(localStorage['email']);
				      $("#dob").html(localStorage['bday']); 

				     
				    // add career objective in the resume
				      $("#careerObjective").html(localStorage['c_objective']);

				    // write academics in the resume

				     $("#academicQualifications li:nth-child(1)").html("akdakdhadk");
             $("#academicQualifications li:nth-child(2)").html(localStorage['inter']);
             $("#academicQualifications li:nth-child(3)").html(localStorage['high']);
				   
				    // write technical skills
				    $("#pr").html(localStorage['p_skills']);
				    $("#ql").html(localStorage['q_skills']);
				    $("#ide").html(localStorage['ide']);
				    $("#os").html(localStorage['os']);

  				    // Projects

				   for(i=0;i<=localStorage['projectlen'];i++)
           {
            var data = localStorage['project'+i];
            var $projects = $('#projects');
            if(data !== "")
            {
            $projects.append("<li>"+data+"</li>");
           }}
				              
				    //achievements
            for(i=0; i<= localStorage['achievelen'];i++)
            {
              var data=localStorage['achieve'+i];
              var $achieve = $('#achivements');
              if(data !=="")
              {
               $achieve.append("<li>"+data+"</li>");
            }}
				     
				    // certifiactes
             for(i=0; i<= localStorage['certilen'];i++)
            {
              var data=localStorage['certi'+i];
              var $certi = $('#certifiactes');
              if(data !== "")
                { 
                  $certi.append("<li>"+data+"</li>")
            }}
          
				     // personal dtails
                    $("#mytr1").append("<td>"+localStorage['fathers_name']+"</td>");
                    $("#mytr2").append("<td>"+localStorage['bday']+"</td>");
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
                     $("#mytr3").append("<td>"+data+"</td>");
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
                       $("#mytr4").append("<td>"+data+"</td>");

                       // show hide functions
                     $('i').click( function() {
                      var $parent= $(this).parent().next();
                      if($(this).hasClass("fa-arrow-down"))
                      {
                      $(this).removeClass("fa fa-arrow-down").addClass("fa fa-arrow-up");
                      $parent.fadeIn(1000);
                      } else
                      {
                        $(this).removeClass("fa fa-arrow-up").addClass("fa fa-arrow-down");
                        $parent.fadeOut(1000);
                      }
                     });
                     
});
