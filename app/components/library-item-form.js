import Ember from 'ember';

export default Ember.Component.extend({
	buttonLabel: 'save', 
	actions: {
		buttonClicked: function(params){
			this.sendAction('action', params);
		}
	}
});
