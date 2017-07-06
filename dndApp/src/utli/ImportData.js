let LZString = require('lz-string')
export default function importStorage (str) {
	let json = LZString.decompressFromEncodedURIComponent(str);
	let dnd = JSON.parse(json);
	for(let i in dnd){
		localStorage[i] = dnd[i];
	}
}