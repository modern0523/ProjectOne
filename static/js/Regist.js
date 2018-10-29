$(function(){
		
	    		//Regist验证
	    		//手机号验证
	    		$("#li1").on({
	    			"blur":function(){
	    			var Tel=$("#li1").val();
	    					var reg =  /^1[3|4|5|8]\d{9}$/ 
							 if(reg.test(Tel)){
								$("#li1").html("");
							}
							  else{
					            $("#li1").css('border', '1px solid red');
					            $("#li1").next().show();
					            $("#li1_em").html("请输入11位有效手机号");
					        }
	    		},
	    			"focus":function(){
	    				 $("#li1").css('border', '1px solid #d6d6d6');
					            $("#li1").next().hide();
	    			}})
	    		//图片验证码
	    		$.idcode.setCode();
	    		$("#Txtidcode").on({
	    			"blur":function(){
	    			var IsBy=$.idcode.validateCode()
	    			if(IsBy){
	    			
	    			}
	    			else{
	    			
	    				 $("#Txtidcode").parent().find("em").show();
	    			}
	    		},
	    			"focus":function(){
	    				 $("#Txtidcode").parent().find("em").hide();
	    			}})
	    	    //密码验证
	    	    $("#passwd").on({
	    	    	"blur":function(){
	    	    		var passwd=$("#passwd").val();
	    	    		var reg=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
	    	    		if(reg.test(passwd)){
	    	    			$("#passwd").html("");
	    	    		}
	    	    		else{
	    	    			 $("#passwd").css('border', '1px solid red');
					            $("#passwd").next().show();
					            $("#passwd_em").html("字母开头，允许5-16字节，允许字母数字下划线");
	    	    		}
	    	    	},
	    	    	"focus":function(){
	    	    		$("#passwd").css('border', '1px solid #d6d6d6');
					            $("#passwd").next().hide();
	    	    	}
	    	    })
	    		//确认密码
	    		 $("#passwd2").on({
	    	    	"blur":function(){
	    	    		if(!$(this).val||$(this).val()!=$("#passwd").val()){
	    	    			$("#passwd2").css('border', '1px solid red');
					            $("#passwd2").next().show();
	    	    		}
	    	    	},
	    	    	"focus":function(){
	    	    		$("#passwd2").css('border', '1px solid #d6d6d6');
					            $("#passwd2").next().hide();
	    	    	}
	    	    })
	    		//点击提交时确认所有是否填写或填写正确
	    		$("#butn").click(function(){
	    			if(!$("#li1").val()||!$("#Txtidcode").val()||!$("#passwd").val()||!$("#passwd2").val()){
	    				$("#li1").css('border', '1px solid red');
					    $("#li1").next().show();
	    				$("#Txtidcode").css('border', '1px solid red');
					    $("#Txtidcode").parent().find("em").hide();
					    $("#passwd").css('border', '1px solid red');
					    $("#passwd").next().show();
					    $("#passwd2").css('border', '1px solid red');
					    $("#passwd2").next().show();
					    return;//如果密码用户名为空  则不提交
	    			}
	    			
	    		//Regist 注册开始啦
	    		var users=$.cookie("users")?JSON.parse($.cookie("users")):[];
	    		for(var i=0;i<users.length;i++){
	    			if(users[i].name==$("#li1").val()){
	    				$("#li1").next().show();
					    $("#li1_em").html("亲！该账号已经存在哟");
					    return;
	    			}	
	    		}
	    		var user={
	    				name:$("#li1").val(),
	    				passwd:$("#passwd").val()
	    			}
	    			users.push(user);
	    			$.cookie("users",JSON.stringify(users),{expires:7,path:"/"});
	    			console.log($.cookie("users"));
	    		   var timer=setInterval(function(){
	    		   	location.href="login.html";
	    		   },2000)
	    		   alert("注册成功，5秒后跳转至登录页面！")
	    			
	    		})
	    		$("#Aledy").click(function(){
	    				location.href="login.html";
	    			})
})
