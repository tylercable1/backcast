var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', function() {
      this.render();
    }, this);

  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // alert(this.collection.length);
    this.collection.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video,
        // el: this.$('.video-list'),
      }).render().el
    );
    // this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
