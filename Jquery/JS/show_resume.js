
$(document).ready( function() {
      				//header
              var info= JSON.parse(localStorage.getItem('data_deep'));
      				$("#name").html(info.name);
              $("#num").html(info.number);
				      $("#email").html(info.email);
				      $("#dob").html(info.datepicker); 

				     
				    // add career objective in the resume
				      $("#careerObjective").html(info.c_objective);

				    // write academics in the resume

				     $("#academicQualifications li:nth-child(1)").html(info.grad);
             $("#academicQualifications li:nth-child(2)").html(info.inter);
             $("#academicQualifications li:nth-child(3)").html(info.high);
				   
				    // write technical skills
				    $("#pr").html(info.p_skills);
				    $("#ql").html(info.q_skills);
				    $("#ide").html(info.ide);
				    $("#os").html(info.os);

  				    // Projects

				   for(i=0;i < info.project.length;i++)
           {
            $('#projects').append("<li>"+info.project[i].detail+"</li>");
           }
				              
				    //achievements
            for(i=0; i< info.achieve.length;i++)
            {
              
               $('#achivements').append("<li>"+info.achieve[i].detail+"</li>");
            }
				     
				    // certifiactes
             for(i=0; i< info.certi.length;i++)
            {
               
                  $('#certifiactes').append("<li>"+info.certi[i].detail+"</li>")
            }
          
				     // personal dtails
                    $("#mytr1").append("<td>"+info.fathers_name+"</td>");
                    $("#mytr2").append("<td>"+info.datepicker+"</td>");
                     var data='';
                     for( i=0; i < info.lang.length; i++)
                     {
                        data= data+info.lang[i].detail;
                      if(i != info.lang.length -1 )
                      {
                        data=data+", ";
                      }
                     }
                     $("#mytr3").append("<td>"+data+"</td>");
                     data='';
                      for( i=0; i< info.hobbies.length ; i++)
                      {
                       data= data+info.hobbies[i].detail;
                       if(i != info.hobbies.length -1)
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
