claims_app.controller = {
  // your webservices has an init as well
  init: function () {
    // Initialization of the code
    console.log(' gi_app.plugins: init called');

  },
  update: function () {
    // code to execute the function update as an example

  },
  enableOverviewController: function(){
    console.log("This is where we initialize the controllers for the overview page");
    $("#btn-test").on("click", function(){
      //alertify.ratingFeedBackDialog($('#form-rating')[0]).set('selector', 'input[type="password"]');
      alertify.ratingFeedBackDialog($('#form-rating')[0]).set({transition:'slide',message: 'Transition effect: slide'});
    });



  }
}
