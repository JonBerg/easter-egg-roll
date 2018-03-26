var random_egg = Math.floor((Math.random() * 7) + 1);
$(".egg img").attr('src', "img/ola-"+random_egg+".png");
function setCookie(cname, cvalue) {
    var d = new Date();
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

function show_message(discount) {
  $(".message-overlay").addClass("show");
  $( ".button button" ).text('Ienāc rīt').removeClass('roll-egg').addClass('try-agen-later');

  var code1 ='gfgf';
  var code2 ='fdhd';
  var code3 ='dfjd';

  switch(discount) {
      case 1:
          $( ".discount-text" ).text('Tu esi aizripinājis olu 5m tālu un laimējis 5% atlaidi žurnālu abonēšanai');
          $( ".discount-code" ).text(code1);
          setCookie("code", code1);
          break;
      case 2:
          $( ".discount-text" ).text('Tu esi aizripinājis olu 7m tālu un laimējis 7% atlaidi žurnālu abonēšanai');
          $( ".discount-code" ).text(code2);
          setCookie("code", code2);
          break;
      case 3:
          $( ".discount-text" ).text('Tu esi aizripinājis olu 10m tālu un laimējis 10% atlaidi žurnālu abonēšanai');
          $( ".discount-code" ).text(code3);
          setCookie("code", code3);
          break;
  }
  var code = getCookie("code");
  $( ".try-agen-later" ).on( "click", function() {
    $(".message-overlay").addClass("show");
    $( ".discount-code" ).text(code);
  });
}
var code = getCookie("code");
//coockies
var countdown = 100;
//current timestamp
var now   = Date.parse(new Date());
//ready should be stored in your cookie
var ready = Date.parse(new Date (now + countdown  * 1000)); // * 1000 to get ms
$( ".roll-egg" ).on( "click", function() {
    setCookie("ready", ready);
});
var timeout=getCookie("ready");
setCookie("Time", now);
var message=getCookie("Time");
var now  = Date.parse(new Date());
if (now >= timeout) {
  $( ".roll-egg" ).one('click', function(e) {
    var random_distace = Math.floor((Math.random() * 3) + 1);
    $( "div.egg" ).addClass('roll-'+random_distace+'m');
    setTimeout(function(){ show_message(random_distace)}, 3000);
    setCookie("ready", ready);
  });
}else {
  $( ".button button" ).text('Ienāc rīt').removeClass('roll-egg').addClass('try-agen-later');
  $( ".board" ).addClass('try-agen-later');
  $( ".messages h2" ).text('Ienāc rīt');
}
$( ".try-agen-later" ).on( "click", function() {
  $(".message-overlay").addClass("show");
  $( ".discount-code" ).text(code);
});
$( ".messageclose" ).on( "click", function() {
  $(".message-overlay").removeClass("show");
  $( ".messages h2" ).text('Ienāc rīt');
});
