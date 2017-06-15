window.onload = function() {
    //顶部导航栏
    var oStara = document.getElementById('star-a');
    var oStar = document.getElementById('star');
    oStara.onmouseover = function() {
        oStar.src = '../static/images/star1.png';
    };
    oStara.onmouseout = function() {
        oStar.src = '../static/images/star.png';
    };

    var aDrop = document.getElementsByClassName('dropdown');
    var aDropMenu = document.getElementsByClassName('dropdown-menu');
    var oUser = document.getElementById('user-w');
    for (var i = 0; i < aDrop.length; i++) {
        aDrop[i].index = i;
        aDrop[i].onmouseover = function() {
            for (var i = 0; i < aDrop.length; i++) {
                aDrop[i].classList.remove('dropdown-open');
                aDropMenu[i].style.display = 'none';
            }
            this.classList.add('dropdown-open');
            aDropMenu[this.index].style.display = 'block';
        };
        aDrop[i].onmouseout = function() {
            this.classList.remove('dropdown-open');
            for (var i = 0; i < aDrop.length; i++) {
                aDropMenu[i].style.display = 'none';
            }
        };
        aDropMenu[i].onmouseout = function() {
            this.style.display = 'none';
        };
    }

    //搜索框
    var oSrhTab = document.getElementById('search-box-tabs');
    oSrhTab.onmouseover = function() {
        this.classList.add('search-box-over');
    };
    oSrhTab.onmouseout = function() {
        this.classList.remove('search-box-over');
    };


    // aside js

    var mAside = document.getElementById('m-aside');
    var asides = mAside.getElementsByClassName('asides');
    var asideHide = mAside.getElementsByClassName('aside-hide');

    for (var i = 0; i < asides.length; i++) {
        asides[i].index = i
        asides[i].onmouseover = function() {
            for (var i = 0; i < asides.length; i++) {
                if (this === asides[i]) {
                    asideHide[asides[i].index].classList.add('aside-show');
                } else {
                    asideHide[asides[i].index].classList.remove('aside-show');
                }

                // asideHide[this.index].classList.add('aside-show');
            }
        };
        asides[i].onmouseout = function() {
            for (var i = 0; i < asides.length; i++) {
                asideHide[i].classList.remove('aside-show');
            }
        };

    }


    var mSiteS = document.getElementById('m-site-nav');
    var mTimer = null;
    mSiteS.onmouseover=function(){
    	//mTimer=setTimeout(function(){
    		mAside.style.display='block';
    	//},200);

    };
    mSiteS.onmouseout=function(){
    	clearTimeout(mTimer)
    	mAside.style.display='none';
    };



};
