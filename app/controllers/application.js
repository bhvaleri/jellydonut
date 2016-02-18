import Ember from 'ember';

export default Ember.Controller.extend({

	curRoute: Ember.computed('currentRouteName',function(){
		
		if (this.get('currentRouteName') != 'about'){
			return "about";
		}	
		else{
			return "sound-board";
		}
	}),

	linkToName: Ember.computed('currentRouteName',function(){
		if (this.get('currentRouteName')=='about'){
			return "sound-board";
		}
		else{
			return "about";
		}
		
	})


});

