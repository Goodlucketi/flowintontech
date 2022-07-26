const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
var menu = document.querySelector('.menu')


menuBtn.onclick = function(){
var menu = document.querySelector('.menu')
menu.style.width='300px'
}

closeBtn.onclick = function(){
    var menu = document.querySelector('.menu')
    menu.style.width='0px'
}