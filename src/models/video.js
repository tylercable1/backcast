var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set({id: video.id.videoId, title: video.snippet.title, description: video.snippet.description, thumbnail: video.snippet.thumbnails.default.url});
  },

  select: function() {
    this.trigger('select', this);
  }

});
