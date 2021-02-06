function main() {
	let textarea = document.getElementById('textarea');
	textarea.addEventListener('input', event => {
		let boundKeys = new Set();
		let resultDiv = document.getElementById('result-keys');
		let resultHeader = document.getElementById('result-header');

		resultDiv.innerHTML = '';

		textarea.value.split('\n').forEach(line => {
			boundKeys.add(line.slice(1, line.indexOf('"', 1)).toLowerCase());
		});

		let unbound_keys = KEY_NAMES.filter(key => !boundKeys.has(key));
		
		if (!unbound_keys.length)
			resultHeader.textContent = 'Every key is already bound.';
		else {
			resultHeader.textContent = 'Unbound keys';
			unbound_keys.forEach(key => {
				let paragraph = document.createElement('p');
				paragraph.textContent = key;
				resultDiv.appendChild(paragraph);
			});
		}
	});
}
