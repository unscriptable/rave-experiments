define(
	['./displayMetadata', './write', 'css!./base-theme.css'],
	function (displayMetadata, write, css) {

		return function (context) {
			write('Hello world!', 'h1');
			displayMetadata(context, write);
		};
	}
);
