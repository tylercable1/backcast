var Videos = Backbone.Collection.extend({
// change
  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    this.fetch({data: {q: query, part: 'snippet', maxResults: 5, key: window.YOUTUBE_API_KEY, type: 'video', videoEmbeddable: 'true'}});
  },

  parse: function(data) {
    return data.items;
  }
});
