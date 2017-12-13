var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'clickHandler'
  },

  clickHandler: function() {
    this.collection.search($('.search .form-control').val());
    $('.search .form-control').val('');
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
