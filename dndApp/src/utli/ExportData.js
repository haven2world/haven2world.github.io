export default function exportStorage () {
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
	dnd.weaponList = `[{"name":"木棒","attackBonus":0,"damage":"1d4-1d6","crit":"20 *2","range":10,"feature":"无","arrows":0,"arrowFlag":false,"weight":1}]`;
	dnd.armorList = '[{"name":"盔甲","armorBonus":1,"maxDexBonus":8,"testImpairment":0,"magicFailure":0.05,"speed":"30 20","weight":10,"feature":"无"},' +
		'{"name":"无","armorBonus":0,"maxDexBonus":0,"testImpairment":0,"magicFailure":0,"speed":"30 20","weight":0,"feature":"无"},' +
		'{"name":"无","armorBonus":0,"maxDexBonus":0,"testImpairment":0,"magicFailure":0,"speed":"30 20","weight":0,"feature":"无"},' +
		'{"name":"无","armorBonus":0,"maxDexBonus":0,"testImpairment":0,"magicFailure":0,"speed":"30 20","weight":0,"feature":"无"}]';
	dnd.backpackList = `[{"name":"无","amount":0,"weight":0}]`;
	dnd.money = 10000;

	dnd.skillList = `[{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0},{"skillGrade":0,"otherAdjust":0}]`;
	dnd.specialSkillList = '[{"name":"无","description":""}]';

	dnd.selectMagicRole = '0';
	dnd.magicList = '[null,null,[[{"id":0}],[],[],[],[],[],[]],{"magic":[[{"id":0,"ready":false}],[],[],[],[],[],[],[],[],[]],"field":[{"id":0,"magic":[{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false}]},{"id":1,"magic":[{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false}]}]},[[{"id":0}],[],[],[],[],[],[],[],[],[]],null,null,[[{"id":0,"ready":false}],[],[],[]],[[{"id":0,"ready":false}],[],[],[]],null,[[{"id":0,"ready":false}],[],[],[],[],[],[],[],[],[]],[[{"id":0,"ready":false}],[],[],[],[],[],[],[],[],[]]]';
	dnd.specialization = '0';

	dnd.languageList = `[{"name":"通用语"}]`;
	dnd.expertiseList = '[{"class":"common","id":0,"remarks":""}]';



	for(let i in dnd){
		dnd[i] = localStorage[i];
	}

	return JSON.stringify(dnd);

}