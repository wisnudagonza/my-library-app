import Ember from 'ember';

export default Ember.Component.extend({
	buttonLabel: 'coba save', 
	actions: {
		buttonClicked: function(params){
			this.sendAction('action', params);
		}
	}
});
