var Screen = Backbone.Model.extend({
  initialize: function(el) {
    this.name = $(el).attr('data-screen');
    this.hide();
  },

  show: function() {
    this.set({ shown: true });
  },

  hide: function() {
    this.set({ shown: false });
  }
});

var ScreenView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    if (this.model.get('shown') {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  }
});
