var App = Backbone.Model.extend({
  initialize: function() {
    this.screens = [];
    this.setUpNavigation();
    this.setUpScreens();
    this.showHomeScreen();
  },

  open: function(screenName) {
    var screen = this.findScreen(screenName);
    if (screen) {
      _.map(this.screens, function(screenToHide) {
        screenToHide.hide();
      });

      screen.show();
    } else {
      console.warn('No screen ' + screenName + ' found.')
    }
  },

  close: function() {
    _.map(this.screens, function(screenToHide) {
      screenToHide.hide();
    });
    this.showHomeScreen();
  },

  setUpNavigation: function() {
    var navEl = $('[data-nav]');
    var navView = new NavigationView({ el: navEl, model: this });
  },

  setUpScreens: function() {
    var screenEls = $('[data-screen]');
    _.each(screenEls, _.bind(function(screenEl) {
      var screen = new Screen(screenEl, this);
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

