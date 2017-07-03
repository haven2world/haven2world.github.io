export function getAttrAdjustValue (v) {
	return Math.floor(v/2-5);
}
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