var VideoPlayerView = Backbone.View.extend({
  initialize: function() {

    // console.log(this);
    this.currentVideo = this.collection.at(0);
    var temp = this;

    this.listenTo(this.collection, 'select', function() {
      console.log(this);

      // temp = this.cid;
      // console.log(temp);
    });
    // this.currentVideo = 

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


// to listen to the select event being fired from a videolistentry
// update the this.currentVideo with the video instance that just fired the select
// render the player