var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
// var context = this;

  // this.$el.on('click', function() {

  //     // context.select();

  //   });
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
