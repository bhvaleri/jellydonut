import Ember from 'ember';

export default Ember.Component.extend({

	pictureArray: [ 
		{
			picture: 'assets/photos/adamBeer.jpg', 
			text: 'Ich leibe bier'		
		},
		{
			picture: 'assets/photos/adamBeer2.jpg', 
			text: 'Ich trinke viel bier!'		
		}
,
		{
			picture: 'assets/photos/assMitOrhen.jpg', 
			text: 'haribo ist sehr gut, lecker lecker!'		
		}
,
		{
			picture: 'assets/photos/brandenburg.jpg', 
			text: 'Berlin, du bist sehr wunderbar!'		
		}
,
		{
			picture: 'assets/photos/seelach.jpg', 
			text: 'die lach ist schone'		
		}
	],
	

	pictureRender: Ember.computed(function(){

	  	var pictureArray = this.get('pictureArray');
	  	var length = pictureArray.length
	  	var random = Math.floor(Math.random() * length);

	  	return pictureArray[random]

	}),



});
