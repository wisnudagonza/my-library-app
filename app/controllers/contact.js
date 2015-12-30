import Ember from 'ember';

export default Ember.Controller.extend({
	isDisabled: true,
	isValid: Ember.computed('EmailAddress','Message', function(){		
		return (/^.+@.+\..+$/i.test(this.get('EmailAddress')) && this.get("Message.length") >= 5);
	}), 
	actions:{
		SendMessage: function(){
      this.set('Flashmessage', "Thank you! We've just saved your email address: " + this.get('EmailAddress'));
      this.set('EmailAddress', '');

		}
	}
});
