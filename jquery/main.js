define(
	[
		'./displayMetadata', './write', 'jquery-ui/dialog'
	],
	function (displayMetadata, write, $) {

		return function (context) {
			write('Hello world!', 'h1');
			displayMetadata(context, write);
		};
	}
);
