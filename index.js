let menuIcon = document.getElementById('hamburger');
let menuList = document.getElementById('menus');
let grow= document.querySelector('.grow');
let menu ='open';


menuIcon.addEventListener('click', () =>{
menuList.classList.toggle('show');
if (menu === 'open'){
       menuIcon.setAttribute('src', 'images/icon-close.svg');
       grow.style.display ="none";
       menu ='close';
  
    }
        else {
          menuIcon.setAttribute('src', 'images/icon-hamburger.svg');
          grow.style.display ="block";
          menu ='open';
        }

});