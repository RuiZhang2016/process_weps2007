function onSearchFocus() {
	if (checkStyle('query', 'empty-search')) {
		changeStyle('query', 'search');
		changeText('query', '');
	}
}

function onSearchBlur(text) {
	if (isEmptyValue('query')) {
		changeStyle('query', 'empty-search');
		changeText('query', text);
	}
}