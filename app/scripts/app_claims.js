var claims_app = {

  common: {
    init: function () {
      //initialize on line chat
      claims_app.plugins.initOnLineChat();
      //initialize the rating feedback
      claims_app.utilities.initializeRatingFeedBackDialog();

    }
  },
  'overview-page': {
    init: function () {
      // Availability validations initialization
      console.log("initialization of overview the page");
      claims_app.controller.enableOverviewController();


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
  'damage-assessment':{
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
  'my-recovery':{
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
  'repair-status':{
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
