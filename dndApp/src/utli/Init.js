export default function initLocalStorage () {
	// body...
	let dnd = {};

	dnd.name = "狗蛋";
	dnd.race = 1;
	dnd.age = 18;
	dnd.speed = 30;
	dnd.str = 10;
	dnd.dex = 10;
	dnd.con = 10;
	dnd.int = 10;
	dnd.wis = 10;
	dnd.cha = 10;

	for(let i in dnd){
		localStorage[i] = dnd[i];
	}
}