import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['sound-button'],
	audioFilePath: null,
	click: function () {
		this.$('audio')[0].play();
	}

});
