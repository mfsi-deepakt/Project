$(document).ready( function ()
{ 
    $(".button").click( function () {
       validDoc.valid($(this));
});
	$('#my_Form').validate({
		rules :{
			name : {required: true,
				   validName : true},
			email : {required : true ,
					email : true},
			sex : {required : true,
					validSex : true},
			fathers_name :{required : true,
							validName : true},
			number : {required : true,
					 validNumber : true},
			add_ : { required : true ,
				     minlength :  10 
				 },
				 datepicker : {
				 	required : true
				 },
		    c_objective : { required : true,
		    				minlength : 15
		    				},
		    grad : { required : true,
		    		 minlength : 10
                   },
             inter : { required : true,
             	       minlength : 10
             		},
             high : {  required : true,
             			minlength : 10
             		},
             		p_skills : ruleForSkills,
             		q_skills : ruleForSkills,
             		ide : ruleForSkills,
             		os : ruleForSkills,
		},
		messages : {
			           add_ : { required  : "Please enter the address.",
			           			minlength  :"Address length must be atleast 10."
		                    	},
		                  c_objective : {required : "Please enter the objective.",
		              					minlength : "Objective is too small."}
					},
					grad : {
						required : "Please enter your graduation detail.",
						minlength : "detail is too small."
					},
					inter : {
						required : "Please enter your 12th class's details."
						, minlength : "Detail is too small."
					},
					high : {
						required : "Please enter your 10th class's  detail.",
						minlength : "Ddetail is too small."
					},
					p_skills : messagesForskills,
					q_skills : messagesForskills,
					ide : messagesForskills,
					os : messagesForskills,

				});
 
});
validDoc = {
 	valid : function($self)
 	{
      var $val = $self.prev().prev().val();
      if(  /^\d+$/.test($val) || $val == "")
      {
      	$self.prev().html("Invalid or empty details");
      } else
      {
      	$self.prev().html("");
   		save_info.addDetails($self);

      }
 	}
 };

 var ruleForSkills = {
        required: true,
        minlength : 3
    };
     var messagesForskills ={
     	required : "Information cant be empty.",
     	minlength : "Very Less details."
     }
jQuery.validator.addMethod("validName",function(value,element){return this.optional(element) || /^[a-zA-Z ]*$/.test(value);},"Name is Invalid.");
jQuery.validator.addMethod("validSex",function(value,element){return this.optional(element) || /(m)|(f)|(M)|(F)/.test(value);},"Please Enter M or F.");
jQuery.validator.addMethod("validNumber",function(value,element){return this.optional(element) || /^[1-9]{1}\d{9}$/.test(value);},"Invalid mobile number.");
 
var InfoData = InfoData || {
	info_resume:{}
};

var myStorage = localStorage;
var save_info = {
    
    addDetails: function($self) {
    	 var $data = $self.prev().prev().val();
         var prop = $self.prev().prev().attr("id"); 
         var $parent= $self.parent();
         var name = "detail";
         var detail = {};
        detail[name]= $data;
            $li = $("<li>" + $data + "</li>").appendTo($parent);
            $("<button></button>").appendTo($li).
            addClass("remove").
            on("click", function() {
                $(this).parent().remove();
                InfoData.info_resume[prop].splice(InfoData.info_resume[prop].indexOf($(this).parent().text()), 1);
            });
            InfoData.info_resume[prop] = InfoData.info_resume[prop] || Array();
            console.log(InfoData.info_resume[prop].push(detail));
 
    },
  
    onSubmit: function() {

        var $inputs = $(".info");
        //check every detail  is set or not
        if ($inputs.valid() && InfoData.info_resume.project  && InfoData.info_resume.achieve  && InfoData.info_resume.certi  && InfoData.info_resume.hobbies  && InfoData.info_resume.lang ) {
            $inputs.each(function() {
                InfoData.info_resume[$(this).attr("name")] = $(this).val();
            });
            myStorage.setItem("data_deep", JSON.stringify(InfoData.info_resume));
            console.log(InfoData.info_resume);
        } else {
          alert("please fill all the details");
            console.log(InfoData.info_resume);
        }
    }
};