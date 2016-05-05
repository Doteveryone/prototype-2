var App = Backbone.Model.extend({
  initialize: function() {
    this.screens = [];
    this.setUpNavigation();
    this.setUpScreens();
    this.showHomeScreen();
  },

  show: function(screenName) {
    var screen = this.findScreen(screenName);
    _.map(this.screens, function(screenToHide) {
      screenToHide.hide();
    });
    screen.show();
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
    var homeScreen = this.findScreen('home');
    homeScreen.show();
  },

  findScreen: function(name) {
    return _.find(this.screens, function(screen) {
      return screen.name === name;
    });
  }
});

var app = new App();

