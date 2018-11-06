$(function () {

    $(".ul1 img").click(function ()
    {
        $(".big img").attr("src",$(this).attr("src"));
        $("#bigArea img").attr("src",$(this).attr("src"))
    });


});