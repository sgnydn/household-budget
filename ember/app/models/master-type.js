import DS from 'ember-data';

export default DS.Model.extend({
  mTypeName: DS.attr('string'),
  mTypeCode: DS.attr('string'),
  //for pretty url turns 'my title' into 'my-title' with a dash.
  slug: function() {
    return this.get('mTypeName').replace(/\s+/g, '-').toLowerCase();
  }.property('mTypeName')
});
