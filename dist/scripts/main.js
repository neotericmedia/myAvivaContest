"use strict";

var claims_app = {

  common: {
    init: function init() {
      //initialize the rating feedback
      claims_app.utilities.initializeRatingFeedBackDialog();
      //initialize the rating engine
      claims_app.plugins.initRateYo();
      //rating plugin
      claims_app.plugins.setListenerRating();
      //initialize on line chat
      claims_app.plugins.initOnLineChat();
    }
  },
  'overview-page': {
    init: function init() {
      // Availability validations initialization
      console.log("initialization of overview the page");
      claims_app.plugins.setListenerRating();
    },
    settings: function settings() {
      // Availability settings
    },
    render: function render() {
      // render
      console.log("Execution of the overview page");
    }
  },
  'accidental-benefits-page': {
    init: function init() {
      // Availability validations initialization
      console.log("initialization of accidental benefits page");
    },
    settings: function settings() {
      // Availability settings
    },
    render: function render() {
      // render
      console.log("Execution of the accidental benefits page");
    }
  },
  'financial-page': {
    init: function init() {
      // Availability validations initialization
      console.log("initialization financial page");
    },
    settings: function settings() {
      // Availability settings
    },
    render: function render() {
      // render
      console.log("Execution of the financial page");
    }

  },
  'damage-assessment': {
    init: function init() {
      // Availability validations initialization
      console.log("initialization financial page");
    },
    settings: function settings() {
      // Availability settings
    },
    render: function render() {
      // render
      console.log("Execution of the financial page");
    }

  },
  'my-recovery': {
    init: function init() {
      // Availability validations initialization
      console.log("initialization financial page");
    },
    settings: function settings() {
      // Availability settings
    },
    render: function render() {
      // render
      console.log("Execution of the financial page");
    }

  },
  'repair-status': {
    init: function init() {
      // Availability validations initialization
      console.log("initialization financial page");
    },
    settings: function settings() {
      // Availability settings
    },
    render: function render() {
      // render
      console.log("Execution of the financial page");
    }

  },
  'garage-details-page': {
    init: function init() {
      // Availability validations initialization
      console.log("initialization garage details page");
    },
    settings: function settings() {
      // Availability settings
    },
    render: function render() {
      // render
      console.log("Execution of the garage details page");
    }

  }

};
//# sourceMappingURL=app_claims.js.map

'use strict';

claims_app.utilities = {

  exec: function exec(controller, action) {
    var ns = claims_app;
    action = action === undefined ? 'init' : action;

    if (controller !== '' && ns[controller] && typeof ns[controller][action] === 'function') {
      ns[controller][action]();
    }
  },
  init: function init() {
    var body = document.body,
        controller = body.getAttribute('data-controller'),
        action = body.getAttribute('data-action');

    // Dependencies initialization
    claims_app.utilities.exec('common');
    claims_app.utilities.exec(controller);
    claims_app.utilities.exec(controller, action);
  },
  initializeRatingFeedBackDialog: function initializeRatingFeedBackDialog() {

    return alertify.ratingFeedBackDialog || alertify.dialog('ratingFeedBackDialog', function () {
      return {
        main: function main(content) {
          this.setContent(content);
        },
        setup: function setup() {
          return {
            options: {
              basic: true,
              maximizable: false,
              resizable: false,
              padding: false
            }
          };
        },
        settings: {
          selector: undefined
        }
      };
    });
  }

};
//# sourceMappingURL=app_claims_utilities.js.map

'use strict';

claims_app.plugins = {
  // your webservices has an init as well
  init: function init() {
    // Initialization of the code
    console.log(' gi_app.plugins: init called');
  },
  update: function update() {
    // code to execute the function update as an example

  },
  initOnLineChat: function initOnLineChat() {

    //<!-- Start of LiveChat (www.livechatinc.com) code -->
    window.__lc = window.__lc || {};
    window.__lc.license = 7402131;
    (function () {
      var lc = document.createElement('script');lc.type = 'text/javascript';lc.async = true;
      lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
      var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(lc, s);
    })();
  },
  initRateYo: function initRateYo() {

    $("[id^='rateYo']").rateYo({
      rating: 3.2,
      spacing: "10px"
    }).rateYo("option", "onChange", function () {
      $('.section-hidden').show(200, 'linear');
    });
  },
  setListenerRating: function setListenerRating() {

    $("#btn-feedback").on("click", function () {
      console.log("rating popup ");
      alertify.ratingFeedBackDialog($('#form-rating')[0]).set({ transition: 'slide', message: 'Transition effect: slide' });
    });
  }

};
//# sourceMappingURL=app_claims_plugins.js.map

"use strict";

claims_app.controller = {
  // your webservices has an init as well
  init: function init() {
    // Initialization of the code
    console.log(' gi_app.plugins: init called');
  },
  update: function update() {
    // code to execute the function update as an example

  },
  enableOverviewController: function enableOverviewController() {
    console.log("This is where we initialize the controllers for the overview page");
  }
};
//# sourceMappingURL=app_claims_controller.js.map

"use strict";

$(document).ready(function () {
  console.log("initialization of the app ");
  claims_app.utilities.init();
});
//# sourceMappingURL=main.js.map
