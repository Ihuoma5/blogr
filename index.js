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
  
    $(window).resize(function (e) {
      if ($(window).width() < 990) {
        $("#editor-image").each(function () {
          $(this).attr("src", "images/illustration-editor-mobile.svg");
        });
      } else {
        $("#editor-image").each(function () {
          $(this).attr("src", "images/illustration-editor-desktop.svg");
        });
      }
      if ($(window).width() < 990) {
        $("#laptop-image").each(function () {
          $(this).attr("src", "images/illustration-laptop-mobile.svg");
        });
      } else {
        $("#laptop-image").each(function () {
          $(this).attr("src", "images/illustration-laptop-desktop.svg");
        });
      }
    });
  });