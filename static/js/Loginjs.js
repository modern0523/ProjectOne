$(function(){
	//Login 开始啦
	    		$("#Login").click(function(){
	    			var users=$.cookie("users");
	    			if(users){
	    				users=JSON.parse(users);
	    				var isExist=false;
	    				for(var i=0;i<users.length;i++){
	    					if(users[i].name==$("#Login_name").val()&&users[i].passwd==$("#Login_pwd").val()){
	    						alert("It's ok")
	    						location.href="index.html";
	    						isExist=true;
	    					}
	    				}
	    				if(!isExist){
	    					alert("Sorry!")
	    				}
	    			}
	    			else{
	    				alert("不存在该用户！")
	    			}
	    		})
	    		
	    		//  $("#Login_index").click(function(){
				// 	location.href="index.html";
				// })
	    		// $("#Login_login").click(function(){
		        //  location.href="Login.html";
				// })
				// $("#Login_regist").click(function(){
				// 	location.href="Regist.html";
				// })
			    // $("#Login_car").click(function(){
				// 	location.href="CarShow.html";
				// })
})
