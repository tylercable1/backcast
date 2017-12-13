var SearchView = Backbone.View.extend({

  events: {
    'keydown' : 'keyAction',
    'click .btn': 'clickHandler'
  },
  keyAction: function(e) {
    if (e.which === 13) {
      this.collection.search($('.search .form-control').val());
    }
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
