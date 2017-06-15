$(document).ready(function() {


    //视频
    $("#1001").on("mouseenter", function() {
        $("#1001 .lessonplay").fadeTo(300, 1)
    });
    $("#1001").on("mouseleave", function() {
        $("#1001 .lessonplay").fadeTo(300, 0)
    });

   // p标签
    $("#1001").on("mouseenter", function() {
       
        $("#1001 .lesson-infor").css("height","175px")
    	$("#1001 .lesson-infor p").css({"display":"block","height":"52px","opacity":"1"});
    	$("#1001 .zhongji").css({"display":"block"});
    });
    $("#1001").on("mouseleave", function() {
     
        $("#1001 .lesson-infor").css("height","88px")
        $("#1001 .lesson-infor p").css({"display":"none","height":"0px","opacity":"0"});
        $("#1001 .zhongji").css({"display":"none"});
    });
 //视频
    $("#1002").on("mouseenter", function() {
        $("#1002 .lessonplay").fadeTo(300, 1)
    });
    $("#1002").on("mouseleave", function() {
        $("#1002 .lessonplay").fadeTo(300, 0)
    });

   // p标签
    $("#1002").on("mouseenter", function() {
       
        $("#1002 .lesson-infor").css("height","175px")
        $("#1002 .lesson-infor p").css({"display":"block","height":"52px","opacity":"1"});
        $("#1002 .zhongji").css({"display":"block"});
    });
    $("#1002").on("mouseleave", function() {
     
        $("#1002 .lesson-infor").css("height","88px")
        $("#1002 .lesson-infor p").css({"display":"none","height":"0px","opacity":"0"});
        $("#1002 .zhongji").css({"display":"none"});
    });
     //视频
    $("#1003").on("mouseenter", function() {
        $("#1003 .lessonplay").fadeTo(300, 1)
    });
    $("#1003").on("mouseleave", function() {
        $("#1003 .lessonplay").fadeTo(300, 0)
    });


   // p标签
    $("#1003").on("mouseenter", function() {
       
        $("#1003 .lesson-infor").css("height","175px")
        $("#1003 .lesson-infor p").css({"display":"block","height":"52px","opacity":"1"});
        $("#1003 .zhongji").css({"display":"block"});
    });
    $("#1003").on("mouseleave", function() {
     
        $("#1003 .lesson-infor").css("height","88px")
        $("#1003 .lesson-infor p").css({"display":"none","height":"0px","opacity":"0"});
        $("#1003 .zhongji").css({"display":"none"});
    });

// 横版视频
$("#2001").on("mouseenter",function(){
    $("#2001 .lessonplay").fadeTo(300,1);
});
$("#2001").on("mouseleave",function(){
    $("#2001 .lessonplay").fadeTo(300,0);
});
$("#2002").on("mouseenter",function(){
    $("#2002 .lessonplay").fadeTo(300,1);
});
$("#2002").on("mouseleave",function(){
    $("#2002 .lessonplay").fadeTo(300,0);
});
$("#2003").on("mouseenter",function(){
    $("#2003 .lessonplay").fadeTo(300,1);
});
$("#2003").on("mouseleave",function(){
    $("#2003 .lessonplay").fadeTo(300,0);
});



// 搜索框
    $("#search-btn").on("click",function(){
    	$("#searchbox").addClass("scale");
    });
    $("#close-btn").click(function(){
    	$("#searchbox").removeClass("scale");
    });



    //切换
    $(".list-icon").on("click",function(){
        $("#changeid").removeClass("lesson-list");
        $("#changeid").addClass("lesson-list2");
        $("#shu").css("display","none");
        $("#heng").css("display","block");
    })
    $(".kuai-icon").on("click",function(){
        $("#changeid").removeClass("lesson-list2");
        $("#changeid").addClass("lesson-list");
        $("#shu").css("display","block");
        $("#heng").css("display","none");
    })
});

















// $("#changeid li.").on("mouseenter",function(){
// 	$(".lesson-infor").slideDown(1000)
// });
// $("#changeid li.").on("mouseleave",function(){
// 	$(".lesson-infor").slideUp(1000)
// });
