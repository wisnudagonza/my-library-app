import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.createRecord('contact');
	},
	actions:{
		saveContact: function(NewContact){
			console.log("sampe sini")
			var _that = this;			
			NewContact.save().then(function(response){
				_that.transitionTo('admin.contacts.index');
			});
		},
		willTransition: function(transition){
			var model = this.controller.get('model');
			model.destroyRecord();
		}
	}
})