import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
    return this.store.find('library', params.id);
 	}, 
 	actions:{
 		updateLibrary: function(library){
 			var _that = this; 
 			library.save().then(function(){
 				_that.transitionTo('libraries');
 			});
 		}
 	}
})