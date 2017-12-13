var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // this.videos = new Videos(window.exampleVideoData);
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('dogs');
    this.render();
    //this.videos.at(0).trigger('select', this)
  },

  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();


    return this;
  },

  template: templateURL('src/templates/app.html')

});
