import DS from 'ember-data';

export default DS.Model.extend({
  mTypeName: DS.attr('string'),
  mTypeCode: DS.attr('string')
});
