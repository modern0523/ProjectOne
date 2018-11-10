$(function ()
{
    $('.addcart').click(function ()
    {
        //获取商品id
        var goodsid = $(this).attr("goodsid");
        var $that = $(this);

        $.get('/addcart/',{'goodsid':goodsid},function (response) {
            console.log(response.sum);
            $('.fr i').html(response.sum);
            $('.sum a').html(response.sum)
        });





        //重载页面
        // window.location.reload()


    })

});