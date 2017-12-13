var VideoPlayerView = Backbone.View.extend({
  initialize: function() {

    this.listenTo(this.collection, 'select', this.selectVideo);

  },
  selectVideo: function(selection) {
    this.model = selection;
    this.render();

  },

  render: function() {

    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});


// to listen to the select event being fired from a videolistentry
// update the this.currentVideo with the video instance that just fired the select
// render the player