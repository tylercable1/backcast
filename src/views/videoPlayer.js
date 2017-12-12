var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
// debugger;
    // this.set({id: this.collection.at([0]).id, title: this.collection.models.at([0]).title, 
    //   description: this.collection.models.at([0]).description, thumbnail: this.collection.models.at([0]).video});
  },
  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
