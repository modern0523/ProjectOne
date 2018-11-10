$(function() {
	//控制最顶部隐藏和显示
	$("#f2_a1,.f1_div").mouseover(function() {
		$(".f1_div ").show();
	})
	$("#f2_a1,.f1_div").mouseout(function() {
		$(".f1_div ").hide();
	})
	$("#f2_a2,.f2_div").mouseover(function() {
		$(".f2_div").show();
	})
	$("#f2_a2,.f2_div").mouseout(function() {
		$(".f2_div").hide();
	})

	//控制右侧隐藏和显示

	$(".li_1 a,.li_1 div").mouseover(function() {
		$(".li_1 a img").attr("src", "/static/img/slide1_1.png");
		$(".li_1 a").css("background", "#DC0F50");
		$(".li_1 div img").attr('src', "/static/img/ewm011.jpg");
		$(".li_1 div").show();
	})

	$(".li_1 a,.li_1 div").mouseout(function() {
		$(".li_1 a img").attr("src", "/static/img/slide1.png");
		$(".li_1 a").css({
			"background": "#999999"
		});
		$(".li_1 div img").attr('src', "/static/img/ewm011.jpg");
		$(".li_1 div").hide();
	})

	$(".li_2 a,.li_2 div").mouseover(function() {
		$(".li_2 a img").attr("src", "/static/img/slide2_2.png");
		$(".li_2 a").css("background", "#19C32F");
		$(".li_2 div img").attr('src', '/static/img/ewm022.jpg');
		$(".li_2 div").show();
	})

	$(".li_2 a,.li_2 div").mouseout(function() {
		$(".li_2 a img").attr("src", "/static/img/slide2.png");
		$(".li_2 a").css("background", "#999999");
		$(".li_2 div img").attr('src', '/static/img/ewm022.jpg');
		$(".li_2 div").hide();
	})

	$(".li_3 a").mouseover(function() {
		$(".li_3 img").attr("src", "/static/img/slide3_3.png");
		$(".li_3 a").css("background", "#4F4F4F");
	})
	$(".li_3 a").mouseout(function() {
		$(".li_3 img").attr("src", "/static/img/slide3.png");
		$(".li_3 a").css("background", "#999");
	})

	//返回顶部

	$(".li_3 a").click(function() {
			$("body html").animate("scrollTop", 0);
		})
		//控制全部商品分类隐藏和显示
	$("#navlist").mouseover(function() {
		$(".navlists").show();
	})
	$("#navlist").mouseout(function() {
			$(".navlists").hide();
		})
		//获取URL传值过来的商品ID
	// function getUrlParams() {
	// 	var paramsStr = window.location.search.substr(1); //ID=0
	// 	var paramsArray = paramsStr.split("="); //["ID","0"]
	// 	return paramsArray[1]; //返回的商品ID    0
	// }
	// //ajax获取当前ID商品详情
	// $.ajax({
	// 	type: "get",
	// 	url: "http://localhost:8080/HuijiaYou/json/goods.json",
	// 	data: {},
	// 	async: true,
	// 	success: function(data) {
	// 		for(var i = 0; i < data.length; i++) {
	// 			var ID = getUrlParams(); //获取当前商品ID
	// 			var obj = data[i];
	// 			if(obj.id == ID) { //遍历JSON数据找到与当前商品ID匹配的商品属性
	// 				var img1 = $("<img src=" + obj.img7 + ">");
	// 				$(".ul1").append(img1);
	// 				var img2 = $("<img src=" + obj.img2 + ">");
	// 				$(".ul2").append(img2);
	// 				var img3 = $("<img src=" + obj.img3 + ">");
	// 				$(".ul3").append(img3);
	// 				var img4 = $("<img src=" + obj.img4 + ">");
	// 				$(".ul4").append(img4);
	// 				var img5 = $("<img src=" + obj.img5 + ">");
	// 				$(".ul5").append(img5);
	// 				var img6 = $("<img src=" + obj.img6 + ">");
	// 				$(".ul6").append(img6);
	//
	// 				var img = $("<img src=" + obj.img1 + ">");
	// 				$(".big").append(img)
	// 				var name = $("<h3>" + obj.name + "</h3>");
	// 				$(".show_right").append(name);
	// 				var price = $("<b>￥" + obj.price + "</b>");
	// 				$(".price").append(price);
	// 				var oldprice = $("<em>￥" + obj.oldprice + "</em>");
	// 				$(".price").append(oldprice);
	// 				//点击当前图片替换大图片
	// 				$("#small_ul li").on("click", function() {
	// 						var index = $(this).index();
	// 						var src = $("#small_ul li").eq(index).find("img").attr("src"); //获取到当前图片的src值
	// 						$("#smallImg").find("img").attr("src", src);
	// 						$("#bigArea").find("img").attr("src", src);
	// 					})
	// 					//设置放大镜大图片为当前ID的图片
	// 				$("#bigImg").attr("src", obj.img1);
	//
	// 				$('.spinnerExample').spinner({});
	// 				//加入购物车
	// 				(function(index){
	// 					$("#AddCar").click(function() {
	//
	// 						//获取插件spinner的num
	// 						var spinner_num = $(".spinnerExample").val();
	// 						if(spinner_num == 0) {
	// 							$("#showp").show();
	// 							return;
	// 						}
	// 						else{
	//
	// 							$("#showp").hide();
	// 						}
	//
	// 						var goodsID = getUrlParams();
	// 						var goodsImg = $(this).parent().parent().parent().prev().find(".big").find("img").attr("src");
	// 						var goodName = $(this).parent().parent().next().html();
	// 						var goodPrice = data[index].price;
	//
	// 						//创建一个商品对象数组 存放多个商品对象
	// 						var goodsList = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
	// 						var isExists = false;
	// 						for(var i = 0; i < goodsList.length; i++) {
	// 							if(goodsID == goodsList[i].id) {
	// 								goodsList[i].num++;
	// 								isExists = true;
	// 							}
	// 						}
	// 						if(!isExists) {
	// 							//将商品属性放进一个对象
	// 							var goods = {
	// 								id: goodsID,
	// 								name: goodName,
	// 								img: goodsImg,
	// 								price: goodPrice,
	// 								num: spinner_num
	// 							}
	// 							goodsList.push(goods);
	// 						}
	// 						//将这个商品对象用cookie存储
	// 						$.cookie("cart", JSON.stringify(goodsList), {
	// 							expires: 22,
	// 							path: "/"
	// 						});
	// 						console.log($.cookie("cart"));
	// 					})
	// 				})(i)
	// 			}
	// 		}
	// 	}
	// })

	//商品详情放大镜
	var bigArea = $("#bigArea");
	var smallImg = $("#smallImg");
	var smallArea = $("#smallArea");
	var bigImg = $("#bigImg");
	////计算小区域宽高
	//smallImg.width/bigImg.width=smallArea.width/bigArea.width  小图片比大图片=小区域比大区域
	smallArea.width(smallImg.width() / bigImg.width() * bigArea.width());
	smallArea.height(smallImg.height() / bigImg.height() * bigArea.height());
	//放大的系数
	var scale = bigImg.width() / smallImg.width();
	smallImg.mousemove(function(e) {
			smallArea.show();
			//让小区域跟着鼠标动
			var x = e.pageX - smallImg.offset().left - smallArea.width() / 2;
			var y = e.pageY - smallImg.offset().top - smallArea.height() / 2;
			//让小区域局限在小图片中移动
			if(x < 0) {
				x = 0;
			} else if(x > smallImg.width() - smallArea.width()) {
				x = smallImg.width() - smallArea.width();
			}
			if(y < 0) {
				y = 0;
			} else if(y > smallImg.width() - smallArea.width()) {
				y = smallImg.width() - smallArea.width();
			}
			smallArea.css({
				left: x,
				top: y
			}); //小区域动起来啦
			bigArea.show();
			bigImg.css({
				left: -x * scale,
				top: -y * scale
			});
		})
		//移出时让大小区域隐藏
	smallArea.mouseout(function() {
			smallArea.hide();
			bigArea.hide();
		})
		//购物车

	//结算
	// $("#closing").click(function() {
	// 	//获取插件spinner的num
	//
	// 						location.href = "/showCart/";
	//
	//
	// })
	//
	// $("#Regist_login").click(function() {
	// 	location.href = "/login/";
	// })
	// $("#Regist_regist").click(function() {
	// 	location.href = "/register/";
	// })
	// $("#Regist_car").click(function() {
	// 	location.href = "/showCart/";
	// })





})