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
				//控制全部商品分类隐藏和显示
				$("#navlist").mouseover(function(){
			    $(".navlists").show();
				})
				$("#navlist").mouseout(function(){
					$(".navlists").hide();
				})
				//获取商品详情添加的JSON格式的字符串cookie
				var goodsList=$.cookie("cart");
				console.log($.cookie("cart"))
				if(goodsList){
					goodsList=JSON.parse(goodsList);
					var sumnum=0;
					var sumprices=0;
					for(var i=0;i<goodsList.length;i++){
						var goods=goodsList[i];//这里传来5个参数 id img name num price	
						var tr=$("<tr class='tr2'><td class='td1'><input type='checkbox' checked='checked'></td><td class='td2'><a><img src="+goods.img+"><p>"+goods.name+"</p><strong>颜色:共同<br/>款式:共同</strong></a></td><td class='td3'><span>￥"+goods.price+"<i>特价</i></span></td><td class='td4'><label><i class='td4_i1'>-</i><input class='aa' type='tel' val=''><i class='td4_i2'>+</i></label><br/><span>限购3件</span></td><td class='td5'><span>￥"+goods.price*goods.num+"</span></td><td class='td6'><a id='Delete'>删除</a></td></tr>");
						$("#table1").append(tr);
						$(".td4").find(".aa").eq(i).val(goods.num);//用jq的方法为input里面的属性value赋值	     
					(function(index){//闭包  能取到该循环当前对象的下标和值
						var num=$(".td4").eq(index).find("input").val();
					    var price=goodsList[index].price*goodsList[index].num;
					     
					     sumnum+=parseInt(num);
					     sumprices+=parseInt(price);
						 
						return sumnum,sumprices;
					})(i)
					
					}
					$("#sumn").html(sumnum);
					$("#top_car").html(sumnum);
					$("#sunp").html("￥"+sumprices);
				     //委托删除购物车商品
						$("#table1").on("click","#Delete",function(){
							$.cookie("cart","",{expires:0,path:"/"});
						$(this).parent().parent().hide();
						})
				
				     
				     
				     
				}
				else{
					
					var tr=$("<tr><td  colspan='8' style='width: 1140px;height: 114px;text-align: center;line-height: 114px;font-size:40px;color: red;'><img src='img/kongCar.jpg'/>亲，购物车是空的哟...</td></tr>");
					$("#table1").append(tr);
					$(".content_ft").css("display","none");
				}
						
			
				
})

