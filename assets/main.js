var getHeaderItem = document.querySelectorAll('.tab-header__list--item');
var getContent = document.querySelectorAll('.body-content');
var getLine = document.querySelector('.tab-header__line');
var getActive = document.querySelector('.tab-header__list--item.active');


getLine.style.left = getActive.offsetLeft + 'px';
getLine.style.width = getActive.offsetWidth + 'px';

// var marginValue = ['0%','25%','50%','75%'];
console.log(getContent)
getHeaderItem.forEach(function(item,index) {
    var content = getContent[index];
    item.onclick = function(e) {
       document.querySelector('.tab-header__list--item.active').classList.remove('active');
       item.classList.add('active');
       document.querySelector('.body-content.enable').classList.remove('enable');
       content.classList.add('enable');
       getLine.style.left = this.offsetLeft + 'px';
       getLine.style.width = this.offsetWidth + 'px';
    //    getLine.style.marginLeft = marginValue[index];
    }
})
