// ;
// $(function() {
// 	'use strict';
// 	var more = $("#more"),
// 		more_content = $("#more_content"),
// 		personal = $("#personal"),
// 		wrap2_personal = $("#wrap2_personal"),
// 		setup = $("#setup"),
// 		wrap1_setup = $("#wrap1_setup");

// 	more.on("mouseover", show);
// 	more.on("mouseout", hide);
// 	//只对more操作，划过更多产品的时候一直闪烁，加了下面的more_content就可以了正常了
// 	more_content.on("mouseover", show);
// 	more_content.on("mouseout", hide);

// 	setup.on("mouseover", show1);
// 	setup.on("mouseout", hide1);
// 	wrap1_setup.on("mouseover", show1);
// 	wrap1_setup.on("mouseout", hide1);


// 	personal.on("mouseover", show2);
// 	personal.on("mouseout", hide2);
// 	wrap2_personal.on("mouseover", show2);
// 	wrap2_personal.on("mouseout", hide2);


// })

// //好麻烦。。如何封装？

// function show() {
// 	more_content.style.display = 'block';

// }
// function show1() {
// 	wrap1_setup.style.display = 'block';

// }
// function show2() {
// 	wrap2_personal.style.display = 'block';

// }
// function hide() {
// 	more_content.style.display = 'none';

// }
// function hide1() {
// 	wrap1_setup.style.display = 'none';

// }
// function hide2() {
// 	wrap2_personal.style.display = 'none';

// }


// jQ 3.0版本不能兼容ie678,代码写的太繁琐,不会封装
// js 循环貌似和闭包有关,还是不会解决
// 以下是蠢蠢的写法 ~~~~(>_<)~~~~

window.onload = function() {
    var divs = document.getElementById('alltc').getElementsByTagName('div');
    var lis = document.getElementById('navright').getElementsByTagName('li');
    lis[8].onmouseover = function() {
        divs[0].style.display = 'block';
    }
    lis[8].onmouseout = function() {
        divs[0].style.display = 'none';
    }
    divs[0].onmouseover = function() {
        divs[0].style.display = 'block';
    }
    divs[0].onmouseout = function() {
        divs[0].style.display = 'none';
    }
    lis[7].onmouseover = function() {
        divs[1].style.display = 'block';
    }
    lis[7].onmouseout = function() {
        divs[1].style.display = 'none';
    }
    divs[1].onmouseover = function() {
        divs[1].style.display = 'block';
    }
    divs[1].onmouseout = function() {
        divs[1].style.display = 'none';
    }
    lis[6].onmouseover = function() {
        divs[2].style.display = 'block';
    }
    lis[6].onmouseout = function() {
        divs[2].style.display = 'none';
    }
    divs[2].onmouseover = function() {
        divs[2].style.display = 'block';
    }
    divs[2].onmouseout = function() {
            divs[2].style.display = 'none';
        }

// 下面的代码划过1个3个都出来了！

        // for (i = lis.length - 1; i > 5; i--) {
        //     lis[i].onmouseover = function() {
        //         for (var j = 0; j < divs.length; j++) {
        //             divs[j].style.display = 'block';
        //             break;
        //         }
        //     }
        //     lis[i].onmouseout = function() {
        //         for (var j = 0; j < divs.length; j++) {
        //             divs[j].style.display = 'none';
        //         }
        //     }
        // }

}
