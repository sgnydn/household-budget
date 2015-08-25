import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('master-type');
  this.resource('master-types', function () {
    this.resource('master-type', {path: ':master_type_id'}, function () {
    });
    //this.resource('master-type', {path: ':master_type_slug'}, function () {
    //    });
      });
  this.route('detail-type');
  this.resource('detail-types', function () {
  });
});

export default Router;
