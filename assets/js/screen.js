var Screen = Backbone.Model.extend({
  initialize: function(el, app) {
    this.name = $(el).attr('data-screen');
    this.hide();
    this.app = app;
  },

  show: function() {
    this.set({ shown: true });
  },

  hide: function() {
    this.set({ shown: false });
  },

  close: function() {
    this.app.close();
  }
});

var ScreenView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  events: {
    'click [data-open-screen]': 'openScreen',
    'click [data-close-screen]': 'closeScreen'
  },

  openScreen: function(event) {
    event.preventDefault();
    var screenName = event.currentTarget.dataset.openScreen;
    this.model.app.open(screenName);
  },

  closeScreen: function(event) {
    event.preventDefault();
    this.model.app.close();
  },

  render: function() {
    if (this.model.get('shown')) {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  }
});
