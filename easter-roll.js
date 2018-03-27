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


// Create Base64 Object
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

var code1 = Base64.decode('TERONQ==');
var code2 = Base64.decode('WFZTMTA=');
var code3 = Base64.decode('TEJNMTU=');
var code4 = Base64.decode('SURaMjA=');

function show_message(discount) {
  $(".message-overlay").addClass("show");
  $( ".button button" ).text('Ienāc rīt').removeClass('roll-egg').addClass('try-agen-later');



  switch(discount) {
      case 1:
          $( ".discount-text" ).text('Tu esi aizripinājis olu 5m tālu un laimējis 5% atlaidi žurnālu abonēšanai');
          $( ".discount-code" ).text(code1);
          setCookie("code", code1);
          break;
      case 2:
          $( ".discount-text" ).text('Tu esi aizripinājis olu 10m tālu un laimējis 10% atlaidi žurnālu abonēšanai');
          $( ".discount-code" ).text(code2);
          setCookie("code", code2);
          break;
      case 3:
          $( ".discount-text" ).text('Tu esi aizripinājis olu 15m tālu un laimējis 15% atlaidi žurnālu abonēšanai');
          $( ".discount-code" ).text(code3);
          setCookie("code", code3);
          break;
      case 4:
          $( ".discount-text" ).text('Tu esi aizripinājis olu 20m tālu un laimējis 20% atlaidi žurnālu abonēšanai');
          $( ".discount-code" ).text(code4);
          setCookie("code", code4);
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
var countdown = 1440;
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
    var random_distace = Math.floor((Math.random() * 4) + 1);
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
function copy(element_id){
  var aux = document.createElement("div");
  aux.setAttribute("contentEditable", true);
  aux.innerHTML = document.getElementById(element_id).innerHTML;
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");
  document.body.appendChild(aux);
  aux.focus();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
