define(
	['./displayMetadata', './write', 'bootstrap', 'aerogear-pipeline'],
	function (displayMetadata, write, bootstrap, agPipeline) {

		return function (context) {
			write('Hello world!', 'h1');
			displayMetadata(context, write);
		};
	}
);
