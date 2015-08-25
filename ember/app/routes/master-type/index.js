import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('masterType');
  },

  renderTemplate: function() {
    this.render('master-type/index', {});
  }

});
