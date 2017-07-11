import weightData from '../asset/WeightData';

export function getWeight(dnd) {
	if(dnd && dnd.weaponList){
		let weaponList = JSON.parse(dnd.weaponList);
		let armorList = JSON.parse(dnd.armorList);
		let backpackList = JSON.parse(dnd.backpackList);

		let weight = 0;
		weaponList.forEach((k,i)=>{
			weight += k.weight;
			if(k.arrowFlag){
				weight += k.arrows * 0.1;
			}
		});
		armorList.forEach((k,i)=>{
			weight += k.weight;
		})
		backpackList.forEach((k,i)=>{
			weight += k.amount * k.weight;
		})
		return weight;
	}else{
		return 0;
	}

}
export function getWeightGrade(dnd){
	if(!(dnd && dnd.weaponList)){
		return {grade:'error'}
	}
	let weight = getWeight(dnd);
	let str = getAttrFinal(dnd,'str');

	let relativeData = weightData[str];
	if(weight<=relativeData[0]){
		return {grade:'轻度负荷'};
	}else if(weight<=relativeData[1]){
		return {grade:'中度负荷'};
	}else if(weight<=relativeData[2]){
		return {grade:'重度负荷'};
	}else if(weight>relativeData[2]){
		return {grade:'你背不动'};
	}else return {grade:'error'}

}

export function getAttrFinal(dnd,key){
	if(!dnd[key]){
		return 0;
	}
	switch (key){
		case 'str':
			return dnd[key];
		case 'dex':
			return dnd[key];
		case 'con':
			return dnd[key];
		case 'int':
			return dnd[key];
		case 'wis':
			return dnd[key];
		case 'cha':
			return dnd[key];
	}
}
export function getAttrAdjustValue (dnd,key,value) {
	let v = getAttrFinal(dnd,key);
	if(value){
		v = value;
	}
	return Math.floor(v/2-5);
}
export function getTotalGrade (dnd) {
	let v =0;

	if(dnd.role){
		let role = JSON.parse(dnd.role);
		role.forEach((k,i)=>{
			v += parseInt(k.grade);
		});
	}

	return v;
}