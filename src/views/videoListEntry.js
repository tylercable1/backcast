var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    var clicked = this;
    this.$el.on('click', function () {
      console.log(clicked);
      clicked.model.select();
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
