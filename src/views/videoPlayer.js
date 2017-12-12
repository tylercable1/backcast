var VideoPlayerView = Backbone.View.extend({
  initialize: function() {

    this.currentVideo = this.collection.at(0);
  },
  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
