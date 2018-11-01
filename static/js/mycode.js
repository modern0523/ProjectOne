$(function () {

    // 获取自动变换颜色
    $(".li2 span").mousemove(function ()
    {
        var r = parseInt(Math.random()*256);
        var g = parseInt(Math.random()*256);
        var b = parseInt(Math.random()*256);
        $(this).css("background",`rgb(${r},${g},${b})`)

    });
    setInterval(function ()
    {
        $(".li2 span").trigger("mousemove")

    },100);



    //获取随机数
    $(".li2 span").click(function ()
    {
        var str1 = '0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ';
        str2 = '';
        for(var i=0;i<4;i++)
        {
           str2 += str1[parseInt(Math.random()*str1.length)]
        }
        $(".li2 span").html(str2)
        console.log(str2)

    });
    //因为打开网页时还未点击，所以要默认一次点击事件
    $(".li2 span").trigger("click");


    //验证输入验证码是否正确
    setInterval(function ()
    {
        if ( $("#Txtidcode").val()===str2 || ($("#Txtidcode").val()).length < 4 )
        {
            $(".li2 em").hide()
        }
        else
        {
            $(".li2 em").show();
        }


    },500)






});