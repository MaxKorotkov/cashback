
var headerCatList = document.getElementById('headerCatList');
var headerCatListBtn = document.getElementById('headerCatListBtn');
var catListClearBtn = document.getElementById('catListClearBtn');
var footerUp = document.getElementById('footerUp');
var footerMenu = document.getElementById('footerMenu');
var footerMenBtn = document.getElementById('footerMenuBtn');
var topReviewBtn = document.getElementById('topReviewBtn');
var topReview = document.getElementById('topReview');
var menuList = document.getElementById('menuList');
var burgerMenuBtn = document.getElementById('burgerMenuBtn');
var navMenu = document.getElementById('navMenu');

function headerCatListOpen(){
    headerCatList.classList.toggle('active');
    headerCatListBtn.classList.toggle('active');
}

function catListClear(){
    catListClearBtn.querySelector('.header-menu__cat-input').checked = false;
}

function footerMenuOpen(){
    footerMenu.classList.toggle('active');
    footerMenuBtn.classList.toggle('active');
}

function topBtnOpen(){
    topReview.classList.toggle('active');
    topReviewBtn.classList.toggle('active');
}
function menuListOpen(){
    menuList.classList.toggle('active');
    navMenu.classList.toggle('active');
}

footerMenuBtn.addEventListener('click', footerMenuOpen);
catListClearBtn.addEventListener('click', catListClear);
headerCatListBtn.addEventListener('click', headerCatListOpen);
topReviewBtn.addEventListener('click', topBtnOpen);
burgerMenuBtn.addEventListener('click', menuListOpen);






var minusBtn = document.querySelector(".rating__minus");
var plusBtn = document.querySelector(".rating__plus");
var scale = document.querySelector(".rating__ruler");
var currentPosition = 90;
var step = 1;
var heightSize = 90;
var minHeightSize = 80;
var position = 100;



minusBtn.addEventListener('click', () => {
        var scaleHeight  = document.querySelector('.rating__ruler').clientHeight + 1; 
        console.log(scaleHeight);
        scale.style.height = scaleHeight + "%";
        // if(step == minHeightSize){
        //     return 0;
        // }else{
        // scale.style.top = step + "%";
        // step++;
        // }
});

plusBtn.addEventListener('click', () => {
    if(currentPosition <= 90){
        step--;
        heightSize = currentPosition + step;
        scale.style.height = currentPosition + "%";
        if(step == heightSize){
            return 0;
        }else{
        scale.style.top = step + "%";
        }
    }
});