var Screen = Backbone.Model.extend({

});

var ScreenView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  events: {
  },

  render: function() {
  }
});
