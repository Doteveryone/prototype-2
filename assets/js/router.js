var Router = Backbone.Router.extend({
  initialize: function(app) {
    this.app = app;
  },

  routes: {
    'popup/:popup': 'popup',
    '*default': 'defaultRoute'
  },

  popup: function(popup) {
    console.log(popup)
    this.app.openPopup(popup);
  },

  defaultRoute: function() {
    this.app.closePopup();
  }

});
