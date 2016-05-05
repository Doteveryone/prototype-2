var App = Backbone.Model.extend({
  initialize: function() {
    this.screens = [];
    this.setUpNavigation();
    this.setUpScreens();
    this.showHomeScreen();
  },

  setUpNavigation: function() {
    var navEl = $('[data-nav]');
    var navView = new NavigationView({ el: navEl, model: this });
  },

  setUpScreens: function() {
    var screenEls = $('[data-screen]');
    _.each(screenEls, _.bind(function(screenEl) {
      var screen = new Screen(screenEl);
      var screenView = new ScreenView({ el: screenEl, model: screen });

      this.screens.push(screen);
    }, this));
  },

  showHomeScreen: function() {
    var homeScreen = _.find(this.screens, function(screen) {
      return screen.name === 'home';
    })
    homeScreen.show();
  }
});

var app = new App();

