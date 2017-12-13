var SearchView = Backbone.View.extend({

  events: {
    'keyup' : 'keyAction',
    'click button': 'clickHandler'
  },
  keyAction: function(e) {
    if (e.keyCode === 13) {
      this.collection.search($('.search .form-control').val());
      $('.search .form-control').val('');
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
