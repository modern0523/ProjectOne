
$(function(){
	//控制最顶部隐藏和显示
	$("#f2_a1,.f1_div").mouseover(function(){
		$(".f1_div ").show();
	})
	$("#f2_a1,.f1_div").mouseout(function(){
		$(".f1_div ").hide();
	})
	$("#f2_a2,.f2_div").mouseover(function(){
		$(".f2_div").show();
	})
	$("#f2_a2,.f2_div").mouseout(function(){
		$(".f2_div").hide();
	})
	
	//控制右侧隐藏和显示
	
	
    $(".li_1 a,.li_1 div").mouseover(function(){
     $(".li_1 a img").attr("src","img/slide1_1.png");
     $(".li_1 a").css("background","#DC0F50");
     $(".li_1 div img").attr('src',"img/ewm011.jpg");
     $(".li_1 div").show();
    })
	
	 $(".li_1 a,.li_1 div").mouseout(function(){
     $(".li_1 a img").attr("src","img/slide1.png");
     $(".li_1 a").css({"background":"#999999"});
     $(".li_1 div img").attr('src',"img/ewm011.jpg");
     $(".li_1 div").hide();
    })
	 
	 
	 $(".li_2 a,.li_2 div").mouseover(function(){
     $(".li_2 a img").attr("src","img/slide2_2.png");
     $(".li_2 a").css("background","#19C32F");
     $(".li_2 div img").attr('src','img/ewm022.jpg');
     $(".li_2 div").show();
    })
	 
	  $(".li_2 a,.li_2 div").mouseout(function(){
     $(".li_2 a img").attr("src","img/slide2.png");
     $(".li_2 a").css("background","#999999");
     $(".li_2 div img").attr('src','img/ewm022.jpg');
     $(".li_2 div").hide();
    })
	
	$(".li_3 a").mouseover(function(){
		$(".li_3 img").attr("src","img/slide3_3.png");
		$(".li_3 a").css("background","#4F4F4F");
	})
	$(".li_3 a").mouseout(function(){
		$(".li_3 img").attr("src","img/slide3.png");
		$(".li_3 a").css("background","#999");
	})
	
	//返回顶部
	
	$(".li_3 a").click(function(){
		$("body html").animate("scrollTop",0);
	})
	
	//JSON轮播图
	$.ajax({
		type:"get",
		url:"http://localhost:8000/projectOne/static/json/lunbo.json",
		data:{},
        async:true,
		 success:function(data){
		//遍历JSON 里面图片的数量添加li 
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			var li=$("<li><img src="+"../"+obj.img+"></li>");//ul2的li的length
//			console.dir(li);
			$("#lunbo_list").append(li);
			var li2=$("<li>"+(i+1)+"</li>");//动态获取ul2的li的length
			$("#lunbo_list2 ul").append(li2);
		}
		var _lunbo_list=$("#lunbo_list");
		var _lunbo_lists=$("#lunbo_list li");
		var _lunbo_list2=$("#lunbo_list2");
		var _lunbo_lists2=$("#lunbo_list2 li");
		_lunbo_lists.first().clone().appendTo(_lunbo_list);//复制第一张图到最后 实现无缝轮播效果啊
		_lunbo_lists2.eq(0).addClass("lunbo_active");//给_lunbo_lists2 的第一个li 一加载页面就显示lunbo_active样式
		var i=0;//定义当前显示的图片的下标
		var size=$("#lunbo_list li").length;//先获取当前页面li的length
		//console.log(size)
		var timer=setInterval(function(){
			i++;
			move();
		},2000);
		function move(){
			if(i<0){//点击上一页的时候
				_lunbo_list.css("left",-(size-1)*710);
				i=size-2;
			}
			 if(i>=size){
			 	_lunbo_list.css("left",0);//先让ul的left等于0
			 	i=1;// 然后让当前要显示的图片为1 即第二张  就会出现无缝的效果 因为最后一张和第一张是一样的 最后一张正常显示了以后 瞬间让ul的left=0
			 	//然后立马显示了第二张  效果就是无缝
			 }
			_lunbo_list.stop().animate({left:-i*710},500);//让ul移动每个图片的距离
			
			_lunbo_lists2.eq(i).removeClass().addClass("lunbo_active").siblings().removeClass("lunbo_active");
			if(i==size-1){
				_lunbo_lists2.eq(0).removeClass().addClass("lunbo_active").siblings().removeClass("lunbo_active");
			}
			
		}
		// 上一页
		$("#lunbo_list_left").click(function(){
			i--;
			move();
		})
		//下一页
		$("#lunbo_list_right").click(function(){
			i++;
			move();
		})
		//移入停止 移出开始计时
		$(".lunbo").hover(function(){
			clearInterval(timer);
		},
		function(){
			clearInterval(timer);
			timer=setInterval(function(){
				i++;
				move();
			},2000);
		})
		//点击按钮切换图片
		_lunbo_lists2.click(function(){
			var index=$(this).index();
			i=index;
			move();
		})
	
		}

		})
	
	//ajax动态获取商品信息
    $.ajax({
    	type:"get",
    	url:"http://localhost:8000/HuijiaYou/json/goods.json",
    	async:true,
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var obj=data[i];
    		var li=$("<li><a><em>"+obj.id+"</em>"+"<img src="+obj.img2+ "><span>"+obj.discount+"折"+"</span><b>"+obj.name+"</b><font>"+"￥"+obj.price+"<i>"+"￥"+obj.oldprice+"</i></font></a></li>");
    		$("#live_list_bottom").append(li);
    		}
    //商品点击轮播显示
//  var li0=$("<li><a><img src="+HuijiaYou/img/1.jpg"><span>"正在直播...."</span><b>"歌丽姬宝美白祛斑素颜霜50ml*5瓶+精华霜2ml..."</b><font>"+"￥"+369+"<i>"+"￥"+469+"</i></font></a></li>");
// $("#live_list_bottom").firstChild().append(li0);
    			var list=$("#live_list_bottom ");
		$("#live_list_bottom  li").first().clone().appendTo($(list));
		$("#live_list_bottom  li").first().next().clone().appendTo($(list));
		$("#live_list_bottom  li").first().next().next().clone().appendTo($(list));
		$("#live_list_bottom  li").first().next().next().next().clone().appendTo($(list));
		$("#live_list_bottom  li").first().next().next().next().next().clone().appendTo($(list));
		var length=$("#live_list_bottom li").length;
		var i=0;
		$(".prev1").click(function(){
			i--;
			move();	
		})
		$(".prev2").click(function(){
			i++;
			move();
		})
		function move(){
			if(i<0){//点击上一页的时候
				$("#live_list_bottom").css("left",-(length/5-1)*1170);
				i=length/5-2;
			}
			if(i>=(length/5)){
				$("#live_list_bottom").css("left",0);
				i=1;
			}
			$("#live_list_bottom").stop().animate({left:-i*1170},500);
		}
		//将当前商品的ID传值进商品详情
	  $("#live_list_bottom li").on("click",function(){
	  	 var index=$(this).index();
          var ID=$("#live_list_bottom li").eq(index).find("em").html();
          window.location.href="goods.html?ID="+ID;
	  })
    	}
    	
    });
	
	// $("#index_login,#index_login2").click(function(){
	// 	location.href="Login.html";
	// })
	// $("#index_regist,#index_regist2").click(function(){
	// 	location.href="Regist.html";
	// })
    // $("#Car").click(function(){
	// 	location.href="CarShow.html";
	// })
	//        //点击购物车进入购物车页面
	//        $(".fr").click(function(){
	//        	location.href="CarShow.html";
	//        })
})