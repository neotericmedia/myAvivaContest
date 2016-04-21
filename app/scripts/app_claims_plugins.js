claims_app.plugins = {
  // your webservices has an init as well
  init: function () {
    // Initialization of the code
    console.log(' gi_app.plugins: init called');

  },
  update: function () {
    // code to execute the function update as an example

  },
  initOnLineChat: function(){

    //<!-- Start of LiveChat (www.livechatinc.com) code -->
    window.__lc = window.__lc || {};
    window.__lc.license = 7402131;
    (function() {
      var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
      lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
    })();


  },
  initRateYo: function(){

    $("[id^='rateYo']").rateYo({
      rating: 3.2,
      spacing: "10px"
    }).rateYo("option", "onChange", function () {
      $('.section-hidden').show(200, 'linear');
    });

  },
  setListenerRating: function(){

    $("#btn-feedback").on("click",function(){
      console.log("rating popup ");
      //alertify.ratingFeedBackDialog($('#form-rating')[0]).set({transition:'slide',message: 'Transition effect: slide'});
    });

  }


}


