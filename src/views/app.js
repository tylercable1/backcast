var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // this.videos = new Videos(window.exampleVideoData);
    this.videos = new Videos();
    this.videos.search('dogs');
    this.render();
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
