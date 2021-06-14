$(document).ready(function () {
    var toggled = false;
    $(".menu-toggle").click(function () {
      toggled = !toggled;
      $("nav").toggleClass("active");
      if (toggled) {
        $("#hambrgr").attr("src", "images/icon-close.svg");
      } else {
        $("#hambrgr").attr("src", "images/icon-hamburger.svg");
      }
    });
  
    $("ul li").click(function () {
      $(this).siblings().removeClass("active");
      $(this).toggleClass("active");
    });
  });