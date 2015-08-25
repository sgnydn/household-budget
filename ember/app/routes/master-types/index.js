import Ember from 'ember';

export default
Ember.Route.extend({
  model: function (params) {
    debugger;
    //return this.store.findAll('masterType');
    return this.store.findAll('masterType');
  }

});
