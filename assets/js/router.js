var Router = Backbone.Router.extend({
  initialize: function(app) {
    this.app = app;
  },

  routes: {
    'popup/:popup': 'popup',
    'screen/:screen': 'screen',
    '*default': 'defaultRoute'
  },

  popup: function(popup) {
    this.app.openPopup(popup);
  },

  screen: function(screen) {
    this.app.open(screen);
  },

  defaultRoute: function() {
    this.app.closePopup();
  }

});
