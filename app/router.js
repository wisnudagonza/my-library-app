import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');  

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts', function(){
      this.route('new');
    });
  });

  this.route('libraries', function(){
  	this.route('new');
  	this.route('edit', { path: '/:id/edit' });
  });

});

export default Router;
