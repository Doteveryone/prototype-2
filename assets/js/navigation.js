var NavigationView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render)
  },

  events: {
    'click a': 'handleClick'
  },

  handleClick: function(event) {
    event.preventDefault();
    var screen = event.currentTarget.dataset.navScreen;
    console.log(screen)
    this.model.open(screen);
  },

  render: function() {
  }
})
