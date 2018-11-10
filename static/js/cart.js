$(function ()
{
    var carts = $(".content_ft").attr("carts");
    if (carts=='None')
    {
        $(".content_ft").hide();
        $("#lone").show()
    } else {
        $(".content_ft").show();
        $("#lone").hide()
    }

    $(".td4 input").each(function ()
    {
       if ($(this).val()==="1")
       {
           $(this).prev().hide();
       }

    });

    //页面打开调用小计
    smalltotal();

    //页面打开调用总计
    total();



    //购物车加按钮
    $(".up").click(function () {
        //点击哪个就获取哪个的addid属性值，必须用this，而不能
        //通过类名id或标签去获取，因为处在for循环里面，每个td4下面都有相同的属性
        //它不知道你要获取哪一个+的属性
        var $addid = $(this).attr('addid');
        // console.log($addid);
        var $that = $(this);
        $.get('/addcart/', {'goodsid': $addid}, function (response) {
            console.log(response);
            $that.prev().val(response.number);
            $('.allnum a,#sumn').html(response.sum);
            if (response.number>1)
            {
                $that.prev().prev().show()
            }
            //调用小计
            smalltotal();
            //调用总计
            total()
        });
    });

    //购物车减按钮
    $('.down').click(function ()
    {
        var $addid = $(this).attr('addid');
        $that = $(this);
        $.get('/subcart/',{'goodsid':$addid},function (response) {
            console.log(response);
            $that.next().val(response.number);
            $('.allnum a,#sumn').html(response.sum);
            if (response.number===1)
            {
                $that.hide()
            }

            //调用小计
            smalltotal();
            //调用总计
            total()
        });

    });

    //处理复选框会自动保留　页面刷新前的勾选状态
    // $('.tr2').each(function ()
    //  {
    //     $(this).find('.td1 input').prop('checked',false);
    //
    //     //
    //     var hash = location.hash;
    //      if(hash)
    //     {
    //         $(this).find('.td1 input').attr('isselect','false')
    //     }else
    //     {
    //         $(this).find('.td1 input').attr('isselect','true')
    //     }
    //  });

    //单选
    $('.td1 input').click(function ()
    {
        var cartid = $(this).attr('cartid');
        $.get('/onecheck/',{'cartid':cartid},function (response)
        {
            console.log(response);

            //调用总计
            total()
        });

        //在全选的前提下，单选取消一个，全选也要取消
        if ($(this).not(':checked'))
        {
            $('.check input').prop('checked',false)
        }
    });

    //全选
    $('.check input').click(function ()
    {
        if ($(this).is(':checked'))
        {
            $(":checkbox").prop("checked",true);
        }else
        {
            $(":checkbox").prop("checked",false);
        }

        //发起ajax请求的目的是让服务端得知道你选没选中
        $.get('/morecheck/',{'isselect':$(this).is(':checked')},function (response)
        {
            console.log(response);
            total()
        });
    });

    //小计
    function smalltotal()
    {
        $(".tr2").each(function ()
        {
        var price = $(this).find('.td3 i').attr('price');
        var num = $(this).find('.td4 input').val();
        $(this).find('.td5 span').html(price*num)

        })
    }

    //总计
    // 判断复选框状态勾选状态　.is(':checked')
    function total()
    {
        var sum = 0;
        $('.tr2').each(function ()
        {
            if ($(this).find('.td1 input').is(':checked'))
            {
                var price = $(this).find('.td3 i').attr('price');
                var num = $(this).find('.td4 input').val();
                sum += price*num
            }
        });

        //显示总价
        $('#sunp').html(sum);
        console.log(sum)

    }

    //删除购物车对应商品
    // $('.td6 a').click(function ()
    // {
    //     var cartgoodsid = $(this).attr('cartgoodsid');
    //     console.log(cartgoodsid)
    //     var $that = $(this);
    //     $.get('/delcartgoods/',{'cartgoodsid':cartgoodsid},function (response)
    //     {
    //         console.log(response)
    //
    //     })
    //
    //
    // })



});