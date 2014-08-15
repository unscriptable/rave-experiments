define(
	[
		'./displayMetadata', './write', 'bootstrap', 'aerogear-pipeline',
		'lodash', 'fastclick'
	],
	function (displayMetadata, write, bootstrap, agPipeline, _) {

		return function (context) {
			write('Hello world!', 'h1');
			displayMetadata(context, write);
		};
	}
);
