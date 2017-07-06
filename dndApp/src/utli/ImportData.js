export default function importStorage (json) {
	let dnd = JSON.parse(json);
	for(let i in dnd){
		localStorage[i] = dnd[i];
	}
}