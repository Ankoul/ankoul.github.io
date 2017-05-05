console.log('main');

$(document).ready(function(){

  readJsonFile("config/config.json", function (config) {
      //splash screen fades
      setTimeout(function(){
          $("#splash-screen").fadeOut("slow");
      }, config.splashScreen.tempo);

      $('#facebookLink').on('click', function (event) {
          event.preventDefault();

          document.location = config.facebookUri;

          // setTimeout(function(){
          //     if (!document.hidden) {
          //         document.location = config.facebookUrl;
          //         // window.open(config.facebookUrl, "_blank");
          //     }
          // }, 1000);

      });
  });


  //NAV-BAR TAB SLIDE FUNCTIONS
  //number li items
  $("ul.nav > li > span").each(function(i){
    $(this).addClass("list-" + (i+1));
  })

  //number tab items
  $(".tab-pane").each(function(i){
    $(this).addClass("tab-" + (i+1));
  })

  //create slide animation
  $("ul.nav > li > a").click(function(event){

    //target link span tag that animates
    var me = $(this).parent().children("span");

    //strip the span tag class of text to keep the order number
    var x = me.attr("class").match(/\d+/)[0];
    var active = $("li.active span").attr("class").match(/\d+/)[0];

    //if tab that is clicked is bigger than previous active class, clear old class and add slideleft, else add slideright
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

  //FIX NAV-BAR TO TOP WHEN USER SCROLLS DOWN
  var elementOffset = $('#tabMenu').offset().top;

  //start on scroll to watch for distance to top
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    //if window scroll is bigger than the tabMenu distance add classes
    if(scrollTop > elementOffset){
      $('#tabMenu').addClass("active");
      $('#tabContent').addClass("on");
    }

    //if tabmenu distance is bigger than window scroll remove classes
    if (scrollTop <= elementOffset) {
      $('#tabMenu').removeClass("active");
      $('#tabContent').removeClass("on");
    }
  })



})