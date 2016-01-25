import Ember from 'ember';

export default Ember.Controller.extend({
	audioPaths: [
	{
		path: 'assets/audio/nein.m4a',
		label: 'NEIN'
	},
	{
		path: 'assets/audio/auf-die-decke.m4a',
		label: 'DECKE'
	},
	{
		path: 'assets/audio/di-lipen-est-showza.m4a',
		label: 'SCHIßE'
	},
	{
		path: 'assets/audio/ja-goo-now.m4a',
		label: 'GENAU'
	},
	{
		path: 'assets/audio/nein-lupo.m4a',
		label: 'NEIN LUPO'
	},
	{
		path: 'assets/audio/praust.m4a',
		label: 'PROST'
	},
  {
  	path: 'assets/audio/zerr-good.m4a',
  	label: 'SEHR GUT'
  },
	{
		path: 'assets/audio/zits-lupo.m4a',
		label: 'SITS LUPO'
	},
	{
		path: 'assets/audio/zwie-bier-bitte.m4a',
		label: 'ZWIE BIER'
	}
	],

	actions: {
		playRandom: function () {
			var length = $('audio').length;

			var random = Math.floor(Math.random() * length);

			$('audio')[random].play();
		}
	}


})