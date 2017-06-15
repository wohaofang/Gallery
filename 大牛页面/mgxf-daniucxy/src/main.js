/*=================================================================================
achievement 薪资表滚动效果代码======================================================== */

(function (){
    var oDiv = document.getElementById("salary-data"); //滚动对象
    var oTable= document.querySelector('#salary-data table');
    oTable.innerHTML+=oTable.innerHTML;
    var nH=oTable.offsetHeight/2;
    var nTop=0;
    var timer=setInterval(run, 30);

    function run() {
        nTop-=1;
        oTable.style.top=nTop%nH+'px';
    }

    oDiv.onmouseover=function (){
        clearInterval(timer);
    };

    oDiv.onmouseout=function (){
        clearInterval(timer);
        timer=setInterval(run, 30);
    };
})();
