claims_app.utilities = {

  exec: function (controller, action) {
    var ns = claims_app;
    action = (action === undefined) ? 'init' : action;

    if (controller !== '' && ns[controller] && typeof ns[controller][action] === 'function') {
      ns[controller][action]();
    }
  },
  init: function () {
    var body = document.body, controller = body.getAttribute('data-controller'), action = body.getAttribute('data-action');

    // Dependencies initialization
    claims_app.utilities.exec('common');
    claims_app.utilities.exec(controller);
    claims_app.utilities.exec(controller, action);

  },
  initializeRatingFeedBackDialog: function (){

    return(
        alertify.ratingFeedBackDialog || alertify.dialog('ratingFeedBackDialog',function(){
          return {
            main:function(content){
              this.setContent(content);
            },
            setup:function(){
              return {
                options:{
                  basic:true,
                  maximizable:false,
                  resizable:false,
                  padding:false
                }
              };
            },
            settings:{
              selector:undefined
            }
          };
        })
    )

  }



}
