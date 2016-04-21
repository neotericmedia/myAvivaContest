var claims_app = {

  common: {
    init: function () {
      //initialize on line chat
      claims_app.plugins.initOnLineChat();
      //initialize the rating feedback
      gi_app.utilities.initializeRatingFeedBackDialog();

    }
  },
  'overview-page': {
    init: function () {
      // Availability validations initialization
      console.log("initialization of overview the page");
      //alertify.retrieveQuotePostalCodeAuthorizationDialog($('#postalCodeAuthorizationDialogForm')[0]).setting({'modal': true, 'closable': false});

    },
    settings: function () {
      // Availability settings
    },
    render: function () {
      // render
      console.log("Execution of the overview page")
    }
  },
  'accidental-benefits-page':{
    init: function () {
      // Availability validations initialization
      console.log("initialization of accidental benefits page")
    },
    settings: function () {
      // Availability settings
    },
    render: function () {
      // render
      console.log("Execution of the accidental benefits page")
    }
  },
  'financial-page':{
    init: function () {
      // Availability validations initialization
      console.log("initialization financial page")
    },
    settings: function () {
      // Availability settings
    },
    render: function () {
      // render
      console.log("Execution of the financial page")
    }

  },
  'garage-details-page':{
    init: function () {
      // Availability validations initialization
      console.log("initialization garage details page")
    },
    settings: function () {
      // Availability settings
    },
    render: function () {
      // render
      console.log("Execution of the garage details page")
    }

  }



}
