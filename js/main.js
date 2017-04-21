console.log('main');

$(document).ready(function(){

	//splash screen fades after 2s
  setTimeout(function(){
    $("#splash-screen").fadeOut("slow");
  }, 2000);

  //nav-bar tab slide
  $("ul.nav > li > span").each(function(i){
    $(this).addClass("list-" + (i+1));
  })

  $(".tab-pane").each(function(i){
    $(this).addClass("tab-" + (i+1));
  })

  $("ul.nav > li > a").click(function(event){
    var me = $(this).parent().children("span");
    var x = me.attr("class").match(/\d+/)[0];
    var active = $("li.active span").attr("class").match(/\d+/)[0];
    if (x > active) {
      me.addClass('slideInLeft');
      $("li.active span.list-"+active).removeClass('slideInLeft slideInRight');
    } else {
      me.addClass('slideInRight');
      $("li.active span.list-"+active).removeClass('slideInLeft slideInRight');
    }
    $(".tab-"+active).hide()
    $(".tab-"+x).fadeIn();  
  })



})