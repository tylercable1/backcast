var VideoListView = Backbone.View.extend({
  // el: '.list',

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
