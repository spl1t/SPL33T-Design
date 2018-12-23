menu.onclick = function myFunction() {
 var x = document.getElementById('myTopnav');

 if (x.className === "topnav"){
  x.className += " responsive";
  } else {
  x.className = "topnav";
 }
}




$(".nav li").mouseover(function () {
	    $(this).siblings().addClass("fade");
	}).mouseout(function () {
	    $(this).siblings().removeClass("fade");
});
