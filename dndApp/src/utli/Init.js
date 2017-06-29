export default function initLocalStorage () {
	// body...
	let dnd = {};

    dnd.initFlag = true;

	dnd.name = "狗蛋";
	dnd.role = `[{"role":1,"grade":1}]`;
	dnd.race = 1;
	dnd.age = 18;
	dnd.speed = 30;
    dnd.faction = '绝对善良';
    dnd.faith = '博卡布';
	dnd.xp = 0;
	dnd.hp = 8;
	dnd.acArmor = 10;

	dnd.fortitude = 0;
	dnd.reflex = 0;
	dnd.will = 0;


	dnd.str = 10;
	dnd.dex = 10;
	dnd.con = 10;
	dnd.int = 10;
	dnd.wis = 10;
	dnd.cha = 10;

	dnd.basicAttackBonus = 0;
	dnd.weaponList = `{"name":"木棒","attackBonus":0,"damage":"1d4-1d6","crit":"20 *2","range":10,"feature":"无"}`;


	for(let i in dnd){
		localStorage[i] = dnd[i];
	}
}