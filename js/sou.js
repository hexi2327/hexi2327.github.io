// 作者:dddfyang
// 主页：https://appapig.com
// 日期：2020-05-01
// 版权所有，请勿删除
// ❶❷❸❹❺❻❼❽❾❿

$(document).ready(function () {
    // $(".foot").css("left", ($("body").width()-$(".foot").width())/2);

    document.onkeydown = function (e) {
        if (e.ctrlKey && (e.keyCode === 80 || e.keyCode === 83)) {
            return false;
        }
        if (e.keyCode === 18 || e.keyCode === 123) { return false }
    };
    var Selected = "rgba(204, 204, 204, 0.4)";
    $("#baidu").css("background", Selected);

    //判断窗口大小，添加输入框自动完成
    if ($("body").width() <= 640) {
        $("#text").attr("autocomplete", "off");
    } else {
        $("#text").focus();
    }

    //搜索功能
    $("#text").keyup(function (e) {
        if (e.keyCode === 13) {
            if ($("#text").attr("condition").length > 0) {
                url = $("#search").attr("action") + encodeURI($("#text").val()) + $("#text").attr("condition");
            }
            else {
                url = $("#search").attr("action") + encodeURI($("#text").val());
            }
            document.location.href = url;
        }
    })
    $(".s").click(function () {
        if ($("#text").val().length === 0) {
            if ($("#search").attr("action") === "http://innopac.lib.xjtu.edu.cn/search/X?SEARCH=") {
                url = "http://www.lib.xjtu.edu.cn/";
            }
            else {
                url = $("#search").attr("action").match(/^https?:\/\/[^/]+/);
            }
        }
        else if ($("#text").attr("condition").length > 0) {
            url = $("#search").attr("action") + encodeURI($("#text").val()) + $("#text").attr("condition");
        }
        else {
            url = $("#search").attr("action") + encodeURI($("#text").val());
        }
        document.location.href = url;
    })

    //搜索引擎切换
    $("#se-head-ul-2").hide();
    $(".se-head-list").click(function () {
        if (($(this).attr("id") != "more") && ($(this).attr("id") != "return")) {
            url = $(this).attr("url");
            img = $(this).attr("img");
            placeholder = $(this).attr("placeholder");
            condition = $(this).attr("condition");
            if ((url === "https://wenku.baidu.com/search?word=") && ($("body").width() <= 640)) {
                url = "https://wk.baidu.com/search?word=";
            }
            $("#search").attr("action", url);
            $("#text").attr("placeholder", placeholder);
            $("#text").attr("condition", condition);
            $(".se").attr("src", img);
            var Selected = "rgba(204, 204, 204, 0.4)";
            var unSelected = "rgba(204, 204, 204, 0)";
            $(".se-head-list").css("background", unSelected);
            $(this).css("background", Selected);
            $("#text").focus();
        }
        else if ($(this).attr("id") === "more") {
            $("#se-head-ul-1").hide();
            $("#se-head-ul-2").show();
            $("#text").focus();
        }
        else if ($(this).attr("id") === "return") {
            $("#se-head-ul-2").hide();
            $("#se-head-ul-1").show();
            $("#text").focus();
        }
    });

    //搜索引擎主页跳转
    $(".se").click(function () {
        if ($("#search").attr("action") === "http://innopac.lib.xjtu.edu.cn/search/X?SEARCH=") {
            url = "http://www.lib.xjtu.edu.cn/";
        }
        else {
            url = $("#search").attr("action").match(/^https?:\/\/[^/]+/);
        }
        document.location.href = url;
    });

    //菜单显隐
    $("#menu").click(function (event) {
        $(this).toggleClass("on");
        $(".list").toggleClass("closed");
    });
    $("#content").click(function (event) {
        $(".on").removeClass("on");
        $(".list").addClass("closed");
    });

});
