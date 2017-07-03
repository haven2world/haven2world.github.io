/**
* Created by Chen Haowenon 2017/6/28.
*/
'usestrict';
const data = [null,null,//野蛮人
    //吟游诗人
    {
        0:[{name:'舞光术',introduction:'制造火把或其他光源。'},
            {name:'晕眩术',introduction:'4HD以下的人形生物会失去下一次的动作。'},
            {name:'侦测魔法',introduction:'侦测60呎内的法术或魔法物品。'},
            {name:'闪光术',introduction:'使一个生物目眩（攻击检定-1）。'},
            {name:'幻音术',introduction:'发出虚幻的假声。'},
            {name:'指北术',introduction:'指出北方。'},
            {name:'光亮术',introduction:'使目标物品如火把般发光。'},
            {name:'瞌睡术',introduction:'使受术者昏昏欲睡，「侦察」与「聆听」检定受到 -5 减值，对抗「睡眠术」时的意志检定受到 -2 减值。'},
            {name:'法师帮手',introduction:'可对5磅以内的物品使用心灵遥控。'},
            {name:'修复术',introduction:'修复目标物品的细微损伤。'},
            {name:'传讯术',introduction:'可在远距离使用轻声交谈。'},
            {name:'开关术',introduction:'打开或关上小或轻的目标物品。'},
            {name:'魔法技俩',introduction:'玩一些小把戏。'},
            {name:'阅读魔法',introduction:'阅读卷轴及法术书。'},
            {name:'提升抗力',introduction:'受术者的豁免检定获得+1加值。'},
            {name:'召唤乐器',introduction:'召唤出一项施法者指定的乐器。'},],
        1:[{name:'魔法警报',introduction:'产生警报结界，持续时间为每等级2小时。'},
            {name:'活化绳',introduction:'造出一条魔法绳，依你的命令行动。'},
            {name:'惊恐术',introduction:'使一个5HD以下的生物逃窜1d4个回合。'},
            {name:'魅惑人类',introduction:'使一个人类成为你的朋友。'},
            {name:'通晓语言',introduction:'懂得所有可说可写的语言。'},
            {name:'治疗轻伤',introduction:'治疗1d8点伤害，每等级再多治疗+1点，最高+5点。'},
            {name:'侦测密门',introduction:'发现60呎内的密门。'},
            {name:'魔法易容',introduction:'改变自己的外貌。'},
            {name:'抹消术',introduction:'消除一般或魔法性的书写文字。'},
            {name:'脚底抹油',introduction:'你的速度增加30呎。'},
            {name:'羽落术',introduction:'目标物品或生物以缓慢的速度下降。'},
            {name:'油腻术',introduction:'将10呎见方区域或单一目标物品变得滑腻。'},
            {name:'催眠术',introduction:'使生命骰数和为2d4的生物群陷入迷魂状态。'},
            {name:'鉴定术',introduction:'鉴识魔法物品的其中一项特性。'},
            {name:'次级困惑术',introduction:'使受术者受到困惑，持续时间为1轮。'},
            {name:'魔嘴',introduction:'触发时会说话。'},
            {name:'涅斯图伪装灵光',introduction:'改变物品的灵光。'},
            {name:'遮蔽物品',introduction:'目标物品不会被探测到。'},
            {name:'移除恐惧',introduction:'压抑恐惧感，或使一个受术者的抗恐惧豁免检定+4，每4等级增加一对象。'},
            {name:'无声幻影',introduction:'造出你想要的幻影。'},
            {name:'睡眠术',introduction:'使生命骰数和为4的生物群陷入魔法昏睡状态。'},
            {name:'一级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
            {name:'塔莎狂笑术',introduction:'受术者在每等级1轮中失去动作能力。'},
            {name:'隐匿阵营',introduction:'隐藏阵营24小时。'},
            {name:'隐形仆役',introduction:'制造出服从号令的隐形力量。'},
            {name:'腹语术',introduction:'每等级发出1分钟的腹语。'},],
        2:[{name:'变身术',introduction:'变为类似的生物。'},
            {name:'动物使者',introduction:'将一只超小型动物送至指定地点。'},
            {name:'迷惑动物',introduction:'使生命骰数和为2d6的动物陷入迷魂状态。'},
            {name:'目盲术／耳聋术',introduction:'使受术者目盲或耳聋。'},
            {name:'朦胧术',introduction:'对受术者的攻击会有20%的失手机率。'},
            {name:'安定心神',introduction:'安抚生物，抵销情绪性效应。'},
            {name:'轻灵术',introduction:'受术者获得+4敏捷加值，持续时间为每等级1分钟。'},
            {name:'治疗中度伤',introduction:'治疗2d8点伤害，每等级再多治疗+1点，最高+10点。'},
            {name:'黑暗术',introduction:'产生半径20呎的超自然黑暗。'},
            {name:'怪物晕眩术',introduction:'6HD以下的活物会失去下一次的动作。'},
            {name:'减缓毒性',introduction:'使毒性停止对受术者造成伤害，每等级持续1小时。'},
            {name:'侦测思想',introduction:'可以观察到他人的表面想法。'},
            {name:'耀眼术',introduction:'受术者获得+4魅力加值，持续时间为每等级1分钟。'},
            {name:'注目术',introduction:'使范围100呎内所有生物着迷，每等级再多+10呎。'},
            {name:'巧智术',introduction:'受术者获得+4智力加值，持续时间为每等级1分钟。'},
            {name:'闪光尘',introduction:'使生物目盲，或看见隐形生物的轮廓。'},
            {name:'英勇术',introduction:'攻击检定、豁免检定与技能检定+2。'},
            {name:'人类定身术',introduction:'使一个人形生物无法动弹，持续时间为每等级1轮。'},
            {name:'催眠图纹',introduction:'使生命骰数和为「2d4+施法者等级」的生物群陷入迷魂状态。'},
            {name:'隐形',introduction:'受术者隐形，持续时间为每等级1分钟，或直到进行攻击为止。'},
            {name:'物品定位术',introduction:'感应目标物品的所在方向，可指定物品型态或特定物品。'},
            {name:'次级幻影',introduction:'与「无声幻影」同，但能发出一些声音。'},
            {name:'镜影术',introduction:'制造跟你一样的分身幻影，个数为1d4个，每3等级增加1个，最多8个。'},
            {name:'误导',introduction:'误导侦测指定生物或物品的预言系法术。'},
            {name:'烟火术',introduction:'将火变为眩目的光或呛人的烟。'},
            {name:'盛怒术',introduction:'受术者的力量和体质值得到+2加值，意志检定有+1加值，AC有-2减值。'},
            {name:'群体惊恐术',introduction:'使6HD以下的生物慌乱。'},
            {name:'粉碎音波',introduction:'发出高速震动的音波，足以伤害目标物品或晶体生物。'},
            {name:'沈默术',introduction:'消除半径15呎范围内的声音。'},
            {name:'音鸣爆',introduction:'对受术者造成1d8音波伤害，并有可能震慑他。'},
            {name:'暗示',introduction:'使受术者遵从暗示行动。'},
            {name:'二级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
            {name:'飞虫走兽',introduction:'召唤蝙蝠、老鼠或蜘蛛群。'},
            {name:'巧言术',introduction:'能说任何语言。'},
            {name:'风讯术',introduction:'将简讯送出，每等级1哩。'},],
        3:[{name:'闪现术',introduction:'忽隐忽现，持续时间为每等级1轮。'},
            {name:'魅惑怪物',introduction:'使一个怪物相信你是盟友。'},
            {name:'锐耳术／鹰眼术',introduction:'听或看到远方之情形，每等级维持1分钟。'},
            {name:'困惑术',introduction:'使受术者作一些怪事，持续时间为每等级1轮。'},
            {name:'满怀绝望',introduction:'受术者的攻击检定、伤害掷骰、豁免检定与技能检定-2。'},
            {name:'治疗重伤',introduction:'治疗3d8点伤害，每等级再多治疗+1点，最高+15点。'},
            {name:'昼明术',introduction:'产生半径60呎的亮光。'},
            {name:'沉睡术',introduction:'使生命骰数和为10的生物群陷入睡眠状态。'},
            {name:'解除魔法',introduction:'使魔法效果或法术失效。'},
            {name:'移位术',introduction:'对受术者的攻击会有50%的失手机率。'},
            {name:'恐惧术',introduction:'使锥形范围内的目标群逃窜，持续时间为每等级1轮。'},
            {name:'气化形体',introduction:'使受术者变为虚幻状态，并可以缓慢飞行。'},
            {name:'次级指使术',introduction:'命令7HD以下的对象。'},
            {name:'舌灿莲花',introduction:'「唬弄」检定获得+30加值，且谎言不会被魔法拆穿。'},
            {name:'满怀希望',introduction:'受术者的攻击检定、伤害掷骰、豁免检定与技能检定+2。'},
            {name:'加速术',introduction:'每等级可让1个生物移动得更快，其攻击检定、AC与反射检定+1。'},
            {name:'迷幻手稿',introduction:'只有事先指定的读者可解读此文字。'},
            {name:'隐形法球',introduction:'使10呎内所有人隐形。'},
            {name:'李欧蒙小屋',introduction:'造出可供10个生物使用的庇护所。'},
            {name:'高等幻影',introduction:'与「无声幻影」同，只是有声音、气味和温度。'},
            {name:'魅影驹',introduction:'产生魔法马，持续时间为每等级1小时。'},
            {name:'移除诅咒',introduction:'移除物品或人身上的诅咒。'},
            {name:'探知',introduction:'可由远处监视受术者。'},
            {name:'塑语术',introduction:'造出新声音，或改变旧声音。'},
            {name:'秘密文页',introduction:'将一页图文改变，使之认不出原文。'},
            {name:'识破隐形',introduction:'发现隐形生物或物体。'},
            {name:'蛇纹法印',introduction:'造出文字徽记，可使阅读者动弹不得。'},
            {name:'缓慢术',introduction:'受术者每轮只能进行一个动作。AC与攻击检定均-2。可影响的生物个数与等级同。'},
            {name:'动物交谈',introduction:'你可以与动物交谈。'},
            {name:'三级召唤怪物术',introduction:'可召唤外界生物为你作战。'},],
        4:[{name:'破除结界',introduction:'破除受术者所带有的附加魔法、诅咒、石化，或解除其变化。'},
            {name:'治疗致命伤',introduction:'治疗4d8点伤害，每等级再多治疗+1点，最高+20点。'},
            {name:'侦测探知',introduction:'警告你有人使用魔法在窃听。'},
            {name:'任意门',introduction:'传送至范围内任一地点。'},
            {name:'支配人类',introduction:'使用心灵控制人形生物。'},
            {name:'行动自如',introduction:'受术者可以无视障碍物而如常行走。'},
            {name:'幻景',introduction:'使某种地形看起来像是另一种（如使原野看起来像森林）。'},
            {name:'怪物定身术',introduction:'与「人类定身术」同，但可指定任意生物。'},
            {name:'高等隐形术',introduction:'与「隐形」同，但受术者进行攻击后仍可保持隐形。'},
            {name:'通晓传奇',introduction:'得知一个人、地方或事物的相关传说。'},
            {name:'李欧蒙庇护所',introduction:'造出坚固的屋舍。'},
            {name:'生物定位术',introduction:'指出熟悉生物的方向。'},
            {name:'篡改记忆',introduction:'改变受术者的记忆，持续时间5分钟。'},
            {name:'中和毒性',introduction:'使受术者对毒免疫，去除物体内外的毒素。'},
            {name:'虹彩图纹',introduction:'发出彩光，使生命骰数和为24的生物群陷入迷魂。'},
            {name:'驱离害虫',introduction:'蜘蛛、昆虫及其他虫类无法靠近10呎以内。'},
            {name:'幽影咒法术',introduction:'假拟低于四级的咒法系法术，但只有20%的真实性。'},
            {name:'咆哮术',introduction:'使锥形范围内所有人震耳欲聋，并受到5d6点音波伤害。'},
            {name:'植物交谈',introduction:'你可以与一般植物或植物型生物交谈。'},
            {name:'四级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
            {name:'沈默之域',introduction:'使窃听者无法得知谈话内容。'},],
        5:[{name:'集体治疗轻伤',introduction:'对多个生物治疗1d8点伤害，每等级再多治疗+1点。'},
            {name:'高等解除魔法',introduction:'与「解除魔法」同，但检定+20。'},
            {name:'托梦法',introduction:'将讯息送至任何正在睡眠中的人。'},
            {name:'防范探知',introduction:'利用幻象使探知法术误判。'},
            {name:'高等英勇术',introduction:'攻击检定、豁免检定与技能检定+4，对恐惧免疫，获得暂时生命值。'},
            {name:'心灵迷雾',introduction:'雾中的受术者睿智值与意志检定-10。'},
            {name:'海市蜃楼',introduction:'与「幻景」同，只是包含建筑物。'},
            {name:'假象术',introduction:'使你隐形，并产生分身幻象。'},
            {name:'梦魇',introduction:'送出虚像，可造成1d10点伤害，并使对象疲乏。'},
            {name:'常驻幻影',introduction:'与「高等幻影」同，但不需集中精神。'},
            {name:'伪相',introduction:'改变人的外貌，每2等级可改变一个人。'},
            {name:'幽影塑能术',introduction:'假拟低于五级的塑能系法术，但只有20%的真实性。'},
            {name:'行影术',introduction:'步入阴影中，以进行快速移动。'},
            {name:'离间曲',introduction:'使目标彼此攻击。'},
            {name:'集体暗示',introduction:'与「暗示」同，但可影响的生物个数与等级同。'},
            {name:'五级召唤怪物术',introduction:'可召唤外界生物为你作战。'},],
        6:[{name:'解析咒文',introduction:'发现受术者的魔法形态。'},
            {name:'活化物体',introduction:'目标物品会攻击你的对手。'},
            {name:'集体轻灵术',introduction:'与「轻灵术」同，但可影响的生物个数与等级同。'},
            {name:'集体魅惑怪物',introduction:'与「魅惑怪物」同，但范围为30呎。'},
            {name:'集体治疗中度伤',introduction:'对多个生物治疗2d8点伤害，每等级再多治疗+1点。'},
            {name:'集体耀眼术',introduction:'与「耀眼术」同，但可影响的生物个数与等级同。'},
            {name:'慑心目光',introduction:'使受术者慌乱、生病或假死。'},
            {name:'寻找捷径',introduction:'显示直接可到达目的地的路。'},
            {name:'集体巧智术',introduction:'与「巧智术」同，但可影响的生物个数与等级同。'},
            {name:'指使术',introduction:'与「次级指使术」同，但可以影响所有生物。'},
            {name:'英雄宴',introduction:'每等级可带来足够一个生物享用之食物，医治其所有疾病，并施与战斗加值。'},
            {name:'奥图迷舞',introduction:'强迫受术者跳舞。'},
            {name:'永恒幻影',introduction:'与「无声幻影」同，但可以有视力、声音与气味。'},
            {name:'预置幻影',introduction:'与「高等幻影」同，但是由事件触发而产生。'},
            {name:'投影术',introduction:'幻象分身可以走动和施法。'},
            {name:'高等探知',introduction:'与「探知」同，但更快更久。'},
            {name:'高等咆哮术',introduction:'发出可造成10d6点音波伤害的惊人吼声，可震慑生物并对物体造成伤害。'},
            {name:'六级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
            {name:'共振术',introduction:'每轮对没有支撑的结构物造成2d10点伤害。'},
            {name:'迷罩',introduction:'改变一群生物的外貌。'},]
    },
    //牧师
    {
        magic:{
0:[{name:'造水术',introduction:'每等级可造出2加仑纯水。'},
{name:'治疗小伤',introduction:'治疗1点伤害。'},
{name:'侦测魔法',introduction:'侦测60呎内的法术或魔法物品。'},
{name:'侦测毒性',introduction:'侦测一个生物或小型物体所带有的毒性。'},
{name:'神导术',introduction:'单次攻击检定、豁免检定或技能检定+1。'},
{name:'造成小伤',introduction:'触碰攻击，伤害值为1点。'},
{name:'光亮术',introduction:'使目标物品如火把般发光。'},
{name:'修复术',introduction:'修复目标物品的细微损伤。'},
{name:'净化食粮',introduction:'每等级精制出1立方呎的水或食物。'},
{name:'阅读魔法',introduction:'阅读卷轴及法术书。'},
{name:'提升抗力',introduction:'受术者的豁免检定获得+1加值。'},
{name:'恩赐',introduction:'受术者获得1点暂时生命值。'},],

1:[{name:'绝望术',introduction:'敌人受到攻击检定-1，抗恐惧豁免检定-1。'},
{name:'祝福术',introduction:'同伴获得攻击检定+1，抗恐惧豁免检定+1。'},
{name:'祝福圣水',introduction:'造出圣水。'},
{name:'惊恐术',introduction:'使一个5HD以下的生物逃窜1d4个回合。'},
{name:'命令术',introduction:'使一个受术者在一轮中遵从你所给的一字命令。'},
{name:'通晓语言',introduction:'懂得所有可说可写的语言。'},
{name:'治疗轻伤',introduction:'治疗1d8点伤害，每等级再多治疗+1点，最高+5点。'},
{name:'诅咒邪水',introduction:'制造邪水。'},
{name:'观命术',introduction:'查看30呎内濒死生物的状态。'},
{name:'侦测混乱／邪恶／善良／守序',introduction:'找出相应阵营的生物、法术与物品。'},
{name:'侦测死灵',introduction:'发现60呎内的不死生物。'},
{name:'神眷',introduction:'攻击检定与伤害掷骰每3等级获得+1加值。'},
{name:'丧志术',introduction:'受术者的攻击检定、伤害掷骰、豁免检定与技能检定均-2。'},
{name:'忍受元素伤害',introduction:'在寒冷或炎热环境中怡然自得。'},
{name:'熵光护盾',introduction:'用远程武器攻击你会有20%的失手机率。'},
{name:'躲避死灵',introduction:'不死生物无法察觉受术者，每等级可影响一个对象。'},
{name:'造成轻伤',introduction:'触碰攻击，造成1d8点伤害，每等级再多造成+1点伤害，最高+5点。'},
{name:'魔石术',introduction:'变出三颗魔石，攻击获得+1加值，可造成1d6+1点伤害。'},
{name:'魔化武器',introduction:'将魔力灌入武器，使其获得+1加值。'},
{name:'隐雾术',introduction:'周围产生迷雾环绕。'},
{name:'防护混乱／邪恶／善良／守序',introduction:'AC与豁免检定+2。反制心灵控制，并可使元素生物与异界生物无法靠近。'},
{name:'移除恐惧',introduction:'压抑恐惧感，或使一个受术者的抗恐惧豁免检定+4，每4等级增加一对象。'},
{name:'圣域术',introduction:'对手无法攻击你，你也无法进行攻击。'},
{name:'虔诚护盾',introduction:'神圣灵光，可获得至少+2卸劲加值。'},
{name:'一级召唤怪物术',introduction:'可召唤外界生物为你作战。'},],

2:[{name:'援助术',introduction:'攻击检定与抗恐惧豁免检定均获得+1加值，并增加1d8暂时生命值，每等级再多增加+1点，最高+10点。'},
{name:'同化武器',introduction:'使武器变善良、邪恶、守序或混乱。'},
{name:'卜筮',introduction:'得知动作结果是好是坏。'},
{name:'坚韧术',introduction:'受术者获得+4体质加值，持续时间为每等级1分钟。'},
{name:'蛮力术',introduction:'受术者获得+4力量加值，持续时间为每等级1分钟。'},
{name:'安定心神',introduction:'安抚生物，抵销情绪性效应。'},
{name:'崇敬术',introduction:'使指定区域充满正能量，使不死生物虚弱。'},
{name:'治疗中度伤',introduction:'治疗2d8点伤害，每等级再多治疗+1点，最高+10点。'},
{name:'黑暗术',introduction:'产生半径20呎的超自然黑暗。'},
{name:'死亡丧钟',introduction:'杀害濒死生物，你获得1d8暂时生命值、+2力量值及+1施法者等级。'},
{name:'减缓毒性',introduction:'使毒性停止对受术者造成伤害，每等级持续1小时。'},
{name:'亵渎术',introduction:'使指定区域充满负能量，使不死生物茁壮。'},
{name:'耀眼术',introduction:'受术者获得+4魅力加值，持续时间为每等级1分钟。'},
{name:'注目术',introduction:'使范围100呎内所有生物着迷，每等级再多+10呎。'},
{name:'寻找陷阱',introduction:'如盗贼般注意到陷阱。'},
{name:'遗体防腐',introduction:'保存一具尸体。'},
{name:'人类定身术',introduction:'使一个人无法动弹，持续时间为每等级1轮。'},
{name:'造成中度伤',introduction:'触碰攻击，造成2d8点伤害，每等级再多造成+1点伤害，最高+10点。'},
{name:'完全修复术',introduction:'修复一件物品。'},
{name:'博识术',introduction:'受术者获得+4睿智加值，持续时间为每等级1分钟。'},
{name:'移除麻痹',introduction:'移除一或多个生物的麻痹或缓慢效果。'},
{name:'抵抗能量伤害',introduction:'可忽略指定能量型态所造成的10点（或更多）伤害。'},
{name:'次级复原术',introduction:'解除所有魔法属性减值，或回复1d4属性伤害。'},
{name:'粉碎音波',introduction:'发出高速震动的音波，足以伤害目标物品或晶体生物。'},
{name:'护卫他人',introduction:'你代替受术者承受半数伤害。'},
{name:'沈默术',introduction:'消除半径15呎范围内的声音。'},
{name:'音鸣爆',introduction:'对受术者造成1d8音波伤害，并有可能震慑他。'},
{name:'灵能武器',introduction:'魔法武器会自己攻击。'},
{name:'观照术',introduction:'察看盟友的状态与位置。'},
{name:'二级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
{name:'隐匿阵营',introduction:'隐藏阵营24小时。'},
{name:'诚实之域',introduction:'范围内的对象无法说谎。'},],

3:[{name:'操纵死尸',introduction:'制造骷髅、僵尸等不死生物。'},
{name:'降咒',introduction:'单一属性值-6，或攻击检定、豁免检定、各种检定值都-4，或每次动作有50%失手机率。'},
{name:'目盲术／耳聋术',introduction:'使受术者目盲或耳聋。'},
{name:'疫病术',introduction:'使受术者感染所指定之疫病。'},
{name:'不灭明焰',introduction:'造出一支永远不灭，不会发热的火把。'},
{name:'造粮术',introduction:'每等级喂饱三个人或一匹马。'},
{name:'治疗重伤',introduction:'治疗3d8点伤害，每等级再多治疗+1点，最高+15点。'},
{name:'昼明术',introduction:'产生半径60呎的亮光。'},
{name:'深幽黑暗术',introduction:'目标物品半径60呎范围内被绝对黑暗所笼罩。'},
{name:'解除魔法',introduction:'使魔法效果或法术失效。'},
{name:'守卫结界',introduction:'魔法刻文，会伤害经过者。'},
{name:'幻影手',introduction:'朦胧的鬼手将受术者带至你面前。'},
{name:'造成重伤',introduction:'触碰攻击，造成3d8点伤害，每等级再多造成+1点伤害，最高+15点。'},
{name:'消除隐形',introduction:'可消除隐形，范围为每等级5呎。'},
{name:'物品定位术',introduction:'感应目标物品的所在方向，可指定物品型态或特定物品。'},
{name:'反混乱／反邪恶／反善良／反秩序法阵',introduction:'与防护法术同，但范围为半径10呎，每等级维持10分钟。'},
{name:'魔化防具',introduction:'将魔力灌入盾牌或盔甲，使其附加有每4等级+1的增强加值。'},
{name:'融身入石',introduction:'你和身上的配件可以与石头混合。'},
{name:'遮蔽物品',introduction:'目标物品不会被探测到。'},
{name:'祈祷术',introduction:'盟友大部分检定都可得到+1加值，敌人则-1。'},
{name:'防护能量伤害',introduction:'指定一种能量，每等级可吸收12点该种能量所造成的伤害。'},
{name:'移除目盲／耳聋',introduction:'治疗正常或魔法造成的目盲及耳聋。'},
{name:'移除诅咒',introduction:'移除物品或人身上的诅咒。'},
{name:'移除疾病',introduction:'清除对象身上所有疾病。'},
{name:'灼热光辉',introduction:'发出射线，每2等级可对敌人造成1d8点伤害。若对手是不死生物，则伤害更重。'},
{name:'死者交谈',introduction:'每2等级，尸体会回答你一个问题。'},
{name:'塑石术',introduction:'将石头雕塑成任何形状。'},
{name:'三级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
{name:'水中呼吸法',introduction:'受术者可在水面下呼吸。'},
{name:'水面行走',introduction:'目标行于水上如履实地。'},
{name:'风墙术',introduction:'使箭矢、小生物及气体转向。'},],

4:[{name:'凌空而行',introduction:'使受术者可踏入空中（以45度攀爬），如在实地行走一般。'},
{name:'操控水位',introduction:'使水位上升或下降。'},
{name:'治疗致命伤',introduction:'治疗4d8点伤害，每等级再多治疗+1点，最高+20点。'},
{name:'防死结界',introduction:'对死亡类法术与负能量效果免疫。'},
{name:'次元锚',introduction:'阻挡往异次元的移动。'},
{name:'测知谎言',introduction:'发觉蓄意的谎言。'},
{name:'驱逐术',introduction:'强迫生物回到原属界域。'},
{name:'预言术',introduction:'对预定要从事的活动提供有用建言。'},
{name:'神能',introduction:'获得攻击加值、力量+6，和每等级+1点生命值。'},
{name:'行动自如',introduction:'受术者可以无视障碍物而如常行走。'},
{name:'巨虫术',introduction:'将蜈蚣、蝎子或蜘蛛变成巨虫。'},
{name:'法术灌输',introduction:'将法术转换给受术者。'},
{name:'造成致命伤',introduction:'触碰攻击，造成4d8点伤害，每等级再多造成+1点伤害，最高+20点。'},
{name:'高等魔化武器',introduction:'每4等级+1，最多+5。'},
{name:'中和毒性',introduction:'使受术者对毒免疫，去除物体内外的毒素。'},
{name:'次级异界誓盟',introduction:'与生命骰数为6的一个外界生物交换条件彼此服务。'},
{name:'毒击',introduction:'触碰攻击，可造成1d10点体质伤害，1分钟后再重复。'},
{name:'驱离害虫',introduction:'蜘蛛、昆虫及其他虫类无法靠近10呎以内。'},
{name:'复原术',introduction:'恢复被吸取的属性值与等级。'},
{name:'短讯术',introduction:'将简讯立刻传至任何地方。'},
{name:'法术免疫',introduction:'每4等级，可使受术者对一个法术免疫。'},
{name:'四级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
{name:'巧言术',introduction:'能说任何语言。'},],

5:[{name:'赎罪术',introduction:'去除受术者的罪孽重负。'},
{name:'破除结界',introduction:'破除受术者所带有的附加魔法、诅咒、石化，或解除其变化。'},
{name:'高等命令术',introduction:'与「命令术」同，但可影响的生物个数与等级同。'},
{name:'通神术',introduction:'每等级，神祇会回答一个是非题。'},
{name:'集体治疗轻伤',introduction:'对多个生物治疗1d8点伤害，每等级再多治疗+1点。'},
{name:'反制混乱／邪恶／善良／守序',introduction:'在对抗来自相应阵营生物的攻击时，可获得+4的加值。'},
{name:'瓦解武器',introduction:'产生近战武器消灭不死生物。'},
{name:'焰击术',introduction:'用圣火击打对手，每等级可造成1d6点伤害。'},
{name:'圣居',introduction:'目标地神圣化。'},
{name:'集体造成轻伤',introduction:'对多个生物造成1d8点伤害，每等级再多造成+1点伤害。'},
{name:'疫病虫群',introduction:'出现蝗虫群攻击生物。'},
{name:'正义烙印',introduction:'设定受术者在进行哪些动作时会触发「诅咒」。'},
{name:'异界传送',introduction:'最高可使八个对象移动至另一异界。'},
{name:'死者复活',introduction:'可救活死亡的生物，死亡时间上限天数与等级同。'},
{name:'正气如虹',introduction:'身体变大，并获得战斗加值。'},
{name:'探知',introduction:'可由远处监视受术者。'},
{name:'杀生术',introduction:'触碰攻击可杀害受术者。'},
{name:'法术抗力',introduction:'受术者可获得「12+施法者等级」的法术抗力。'},
{name:'五级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
{name:'痛苦徽记',introduction:'符文被触发后会让邻近生物痛苦。'},
{name:'睡眠徽记',introduction:'符文被触发后会让邻近生物沉睡。'},
{name:'真实目光',introduction:'见到所有事物的原本面貌。'},
{name:'邪居',introduction:'将目标地变为不神圣。'},
{name:'石墙术',introduction:'制造一面石墙，形状可自订。'},],

6:[{name:'活化物体',introduction:'目标物品会攻击你的对手。'},
{name:'防活物护罩',introduction:'活的生物无法靠近10呎以内。'},
{name:'放逐术',introduction:'每等级可放逐2HD的外界生物。'},
{name:'集体坚韧术',introduction:'与「坚韧术」同，但可影响的生物个数与等级同。'},
{name:'剑刃障壁',introduction:'造出刀剑环绕保护你，每等级可造成1d6点伤害。'},
{name:'集体蛮力术',introduction:'与「蛮力术」同，但可影响的生物个数与等级同。'},
{name:'唤起死灵',introduction:'制造食尸鬼、妖鬼、木乃伊或魔魂尸。'},
{name:'集体治疗中度伤',introduction:'对多个生物治疗2d8点伤害，每等级再多治疗+1点。'},
{name:'高等解除魔法',introduction:'与「解除魔法」同，但检定+20。'},
{name:'集体耀眼术',introduction:'与「耀眼术」同，但可影响的生物个数与等级同。'},
{name:'寻找捷径',introduction:'显示直接可到达目的地的路。'},
{name:'禁制术',introduction:'阻止界域旅行，伤害不同阵营的生物。'},
{name:'指使术',introduction:'与「次级指使术」同，但可以影响所有生物。'},
{name:'高等守卫结界',introduction:'与「守卫结界」同，但伤害值可到10d8点，或最高可用六级法术。'},
{name:'重伤术',introduction:'每等级对受术者造成10点伤害'},
{name:'医疗术',introduction:'每等级治疗10点伤害、所有疾病与心理创伤。'},
{name:'英雄宴',introduction:'每等级可带来足够一个生物享用之食物，医治其所有疾病，并施与战斗加值。'},
{name:'集体造成中度伤',introduction:'对多个生物造成2d8点伤害，每等级再多造成+1点伤害。'},
{name:'集体博识术',introduction:'与「博识术」同，但可影响的生物个数与等级同。'},
{name:'异界誓盟',introduction:'与「次级异界誓盟」同，但生命骰数可至12。'},
{name:'六级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
{name:'恐惧徽记',introduction:'符文被触发后会让邻近生物慌乱。'},
{name:'说服徽记',introduction:'符文被触发后会魅惑邻近生物。'},
{name:'不死之死',introduction:'每等级可消灭生命骰数和为1d4的不死生物，最高20d4。'},
{name:'御风而行',introduction:'你与盟友化为气态，得以快速旅行。'},
{name:'回返真言',introduction:'将你传送回指定地点。'},],

7:[{name:'渎神之语',introduction:'杀害非邪恶阵营的受术者，或使之麻痹、虚弱化或晕眩。'},
{name:'操控天气',introduction:'可以改变当地的气候。'},
{name:'集体治疗重伤',introduction:'对多个生物治疗3d8点伤害，每等级再多治疗+1点。'},
{name:'灰飞烟灭',introduction:'杀害受术者，并完全摧毁目标的残余物质。'},
{name:'律言',introduction:'杀害非守序阵营的受术者，或使之麻痹、虚弱化或晕眩。'},
{name:'幻化灵体',introduction:'你变成灵体生物，持续时间每等级1轮。'},
{name:'圣言',introduction:'杀害非善良阵营的受术者，或使之麻痹、虚弱化或晕眩。'},
{name:'集体造成重伤',introduction:'对多个生物造成3d8点伤害，每等级再多造成+1点伤害。'},
{name:'脱身大法',introduction:'让物品的持有者被传送到你的所在地。'},
{name:'再生术',introduction:'受术者断裂的肢体可再生，治疗4d8伤害，每等级再多治疗+1点，最高+35点。'},
{name:'防生物力场',introduction:'生物无法接近你。'},
{name:'高等复原术',introduction:'与「复原术」同，再加上恢复所有被吸取的等级与属性值。'},
{name:'复生术',introduction:'使已死对象完全复活。'},
{name:'高等探知',introduction:'与「探知」同，但更快更久。'},
{name:'七级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
{name:'震慑徽记',introduction:'符文被触发后会让邻近生物震慑。'},
{name:'虚弱徽记',introduction:'符文被触发后会让邻近生物虚弱。'},
{name:'混沌真言',introduction:'杀害、困惑、震慑、震聋非混乱阵营的对象。'},],

8:[{name:'防魔法力场',introduction:'抵销10呎内的法术。'},
{name:'混沌护壁',introduction:'对抗守序阵营的生物时，获得AC+4、抗力+4、法术抗力25。'},
{name:'唤起高等死灵',introduction:'制造幽影、缚灵、幽灵与囚魂尸。'},
{name:'集体治疗致命伤',introduction:'对多个生物治疗4d8点伤害，每等级再多治疗+1点。'},
{name:'次元锁',introduction:'每等级可阻挡1天传送与界域旅行。'},
{name:'感知位置',introduction:'得知目标生物或物品的确实位置。'},
{name:'地震术',introduction:'半径每等级5呎内产生剧烈摇晃。'},
{name:'火焰风暴',introduction:'每等级可造成1d6点火焰伤害。'},
{name:'圣洁灵光',introduction:'对抗邪恶类法术时，获得AC+4、抗力+4、法术抗力25。'},
{name:'高等异界誓盟',introduction:'与「次级异界誓盟」同，但生命骰数可至18。'},
{name:'集体造成致命伤',introduction:'对多个生物造成4d8点伤害，每等级再多造成+1点伤害。'},
{name:'秩序护盾',introduction:'对抗混乱类法术时，获得AC+4、抗力+4、法术抗力25。'},
{name:'高等法术免疫',introduction:'与「法术免疫」同，但最高可至八级法术。'},
{name:'八级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
{name:'死亡徽记',introduction:'符文被触发后会让邻近生物死亡。'},
{name:'夺魄徽记',introduction:'符文被触发后会让邻近生物疯狂。'},
{name:'邪恶灵光',introduction:'对抗善良类法术时，获得AC+4、抗力+4、法术抗力25。'},],

9:[{name:'星界投射',introduction:'将你及伙伴投射入星界。'},
{name:'吸能术',introduction:'受术者获得2d4负向等级。'},
{name:'同游灵界',introduction:'与同伴一起旅行至灵界。'},
{name:'异界之门',introduction:'连接两个异界，以供召唤或旅行。'},
{name:'集体医疗术',introduction:'与「医疗术」同，但可针对多个受术者。'},
{name:'内爆术',introduction:'每轮杀害一个生物。'},
{name:'奇迹术',introduction:'要求神祇展现神迹。'},
{name:'缚魂术',introduction:'囚锢刚死的灵魂，使它不受「复生术」作用。'},
{name:'复仇风暴',introduction:'下着酸液、寒冰和霜雹的风暴。'},
{name:'九级召唤怪物术',introduction:'可召唤外界生物为你作战。'},
{name:'完全复生术',introduction:'与「复生术」同，但不需要受术者的遗骸。'},]
    },
        field:{
[{fieldName:'风领域',
god:'欧拜亥',
addition:'可驱散或摧毁土系生物，如同善良阵营牧师驱散不死生物一样；或者命令、斥喝或鼓舞风系生物，如同邪恶阵营牧师斥喝不死生物一样。每天可使用这些能力的次数等于3+魅力调整值，且属于超自然能力。',
magic:[
name:'隐雾术'introduction:'周围产生迷雾环绕。',
name:'风墙术'introduction:'使箭矢、小生物及气体转向。',
name:'气化形体'introduction:'使受术者变为虚幻状态，并可以缓慢飞行。',
name:'凌空而行'introduction:'使受术者可踏入空中（以45度攀爬），如在实地行走一般。',
name:'操控风相'introduction:'改变风的方向与速度。',
name:'连环闪电'introduction:'每等级可造成1d6点伤害，每等级可另发出一束闪电，造成半数伤害。',
name:'操控天气'introduction:'可以改变当地的气候。',
name:'旋风术'introduction:'龙卷风可造成伤害，并可卷起生物。',
name:'元素战队'introduction:'只能视为风类法术，可召唤多个元素。',
]},
 
{fieldName:'动物领域',
god:'艾罗娜、欧拜亥',
addition:'每天可施展一次「动物交谈」，视为法术型能力。「自然知识」成为牧师本职技能。',
magic:[
name:'安抚动物'introduction:'安抚生命骰数总和为「2d4+施法者等级」的动物。',
name:'动物定身术'introduction:'使一只动物无法动弹，每等级可维持1轮。',
name:'支配动物'introduction:'目标动物会遵从无声的心灵命令。',
name:'四级召唤盟友术'introduction:'呼唤生物共同作战，只能呼唤动物。',
name:'问道自然'introduction:'每等级可了解1哩之内的地形。',
name:'防活物护罩'introduction:'活的生物无法靠近10呎以内。',
name:'动物化身'introduction:'每等级可选择一个盟友，变形成施法者指定的动物。',
name:'八级召唤盟友术'introduction:'呼唤生物共同作战，只能呼唤动物。',
name:'形体变化 'introduction:'可变成任何生物，每轮并可更换一次。',
]},

{fieldName:'混乱领域',
god:'柯瑞隆拉瑞辛、厄斯怒、格努须、寇德、渥利达马拉',
addition:'施展混乱类法术时，施法者等级+1。',
magic:[
name:'防护守序'introduction:'AC与豁免检定+2。反制心灵控制，并可使元素生物与异界生物无法靠近。',
name:'粉碎音波'introduction:'发出高速震动的音波，足以伤害目标物品或晶体生物。',
name:'反秩序法阵'introduction:'与「防护守序」同，但范围为半径10呎，每等级可维持10分钟。',
name:'混沌之锤'introduction:'伤害守序阵营的生物，并使他们变恍惚。',
name:'反制守序'introduction:'在对抗来自守序阵营生物的攻击时，可获得+4的加值。',
name:'活化物体'introduction:'目标物品会攻击你的对手。',
name:'混沌真言'introduction:'杀害、困惑、震慑、震聋非混乱阵营的对象。',
name:'混沌护壁 'introduction:'对抗守序阵营的生物时，获得AC+4、抗力+4、法术抗力25。',
name:'九级召唤怪物术'introduction:'视为混乱类法术，可召唤外界生物为你作战。',
]},

{fieldName:'死亡领域',
god:'奈落、维婕丝',
addition:'每天可使用一次「死神之触」，这是一种超自然能力，带有使人死亡的效力。你必须完成「近战触碰攻击」（使用「触碰类法术」的规则）。当触碰到受术者时，每个牧师等级可掷一次1d6。如果总和值大于或等于目标生物的生命值，它随即死亡（不进行豁免检定）。',
magic:[
name:'惊恐术'introduction:'使一个5HD以下的生物逃窜1d4个回合。',
name:'死亡丧钟'introduction:'杀害濒死生物，你获得1d8暂时生命值、+2力量值及+1施法者等级。',
name:'操纵死尸 'introduction:'制造骷髅、僵尸等不死生物。',
name:'防死结界'introduction:'对死亡类法术与负能量效果免疫。',
name:'杀生术'introduction:'触碰攻击可杀害受术者。',
name:'唤起死灵'introduction:'制造食尸鬼、妖鬼、木乃伊或魔魂尸。',
name:'灰飞烟灭 'introduction:'杀害受术者，并完全摧毁目标的残余物质。',
name:'唤起高等死灵 'introduction:'制造木乃伊、幽灵、吸血鬼、幽魂。',
name:'女妖之嚎'introduction:'每等级可杀害一个生物。',
]},

{fieldName:'破坏领域',
god:'圣库斯伯、海克斯特',
addition:'获得「威力打击」，这是一种超自然能力，可以在单次近战攻击中获得+4攻击加值。如果命中的话，可获得等同于牧师等级的伤害加值。在攻击前必须先宣告要进行「威力打击」。每天可使用一次。',
magic:[
name:'造成轻伤'introduction:'触碰攻击，造成1d8点伤害，每等级再多造成+1点伤害，最高+5点。',
name:'粉碎音波'introduction:'发出高速震动的音波，足以伤害目标物品或晶体生物。',
name:'疫病术'introduction:'使受术者感染所指定之疫病。',
name:'造成致命伤'introduction:'触碰攻击，造成4d8点伤害，每等级再多造成+1点伤害，最高+20点。',
name:'集体造成轻伤'introduction:'对多个生物造成1d8点伤害，每等级再多造成+1点伤害。',
name:'重伤术'introduction:'每等级对受术者造成10点伤害',
name:'解离术'introduction:'使一个生物或目标物品消失。',
name:'地震术'introduction:'半径每等级5呎内产生剧烈摇晃。',
name:'内爆术'introduction:'每轮杀害一个生物。',
]},

{fieldName:'土领域',
god:'莫拉丁、欧拜亥',
addition:'可驱散或摧毁风系生物，如同善良阵营牧师驱散不死生物一样；或者命令、斥喝或鼓舞土系生物，如同邪恶阵营牧师斥喝不死生物一样。每天可使用这些能力的次数等于3+魅力调整值，且属于超自然能力',
magic:[
name:'魔石术'introduction:'变出三颗魔石，攻击获得+1加值，可造成1d6+1点伤害。',
name:'柔石术'introduction:'将石头变为粘土，或将碎石变为细砂或烂泥。',
name:'塑石术'introduction:'将石头雕塑成任何形状。',
name:'刺石术'introduction:'指定区域的生物受到1d8点伤害，并有可能变缓慢。',
name:'石墙术'introduction:'制造一面石墙，形状可自订。',
name:'石肤术 'introduction:'每次被攻击时可挡下前10点伤害。',
name:'地震术'introduction:'半径每等级5呎内产生剧烈摇晃。',
name:'铜筋铁骨'introduction:'身体变成活动的铁块。',
name:'元素战队'introduction:'只能视为土类法术，可召唤多个元素。',
]},

{fieldName:'邪恶领域',
god:'厄斯怒、格努须、海克斯特、奈落、威可那',
addition:'施展邪恶类法术时，施法者等级+1。',
magic:[
name:'防护善良'introduction:'AC与豁免检定+2。反制心灵控制，并可使元素生物与异界生物无法靠近。',
name:'亵渎术 'introduction:'使指定区域充满负能量，使不死生物茁壮。',
name:'反善良法阵'introduction:'与「防护善良」同，但范围为半径10呎，每等级可维持10分钟。',
name:'邪影击'introduction:'伤害善良阵营的生物，并使它们感到不舒服。',
name:'反制善良'introduction:'在对抗来自善良阵营生物的攻击时，可获得+4的加值。',
name:'唤起死灵 'introduction:'制造食尸鬼、妖鬼、木乃伊或魔魂尸。',
name:'渎神之语'introduction:'杀害非邪恶阵营的受术者，或使之麻痹、虚弱化或晕眩。',
name:'邪恶灵光 'introduction:'对抗善良类法术时，获得AC+4、抗力+4、法术抗力25。',
name:'九级召唤怪物术'introduction:'只能视为邪恶类法术，可召唤外界生物为你作战。',
]},

{fieldName:'火领域',
god:'欧拜亥',
addition:'可驱散或摧毁水系生物，如同善良阵营牧师驱散不死生物一样；或者命令、斥喝或鼓舞火系生物，如同邪恶阵营牧师斥喝不死生物一样。每天可使用这些能力的次数等于3+魅力调整值，所获得的力量属于超自然能力。',
magic:[
name:'燃烧之手'introduction:'每等级造成1d4点火焰伤害，最大5d4。',
name:'燃火术'introduction:'产生火焰触碰或丢掷敌人，伤害值为1d6点，每等级再+1点。',
name:'抵抗能量伤害'introduction:'可忽略指定能量型态所造成的10点（或更多）伤害。能量型态只能为冷或火。',
name:'火墙术'introduction:'10呎内可造成2d4点火焰伤害，20呎内则造成1d4点火焰伤害。穿越火墙会受到「2d6+施法者等级」点伤害。',
name:'火焰护盾'introduction:'攻击你的生物会受到火焰伤害，你可以不受热或冷影响。',
name:'火种术'introduction:'可以将橡实与浆果变成手榴弹与炸弹。',
name:'火焰风暴'introduction:'每等级可造成1d6点火焰伤害。',
name:'焚云术'introduction:'燃烧的云每轮可造成4d6点伤害。',
name:'元素战队'introduction:'只能视为火类法术，可召唤多个元素。',
]},

{fieldName:'善良领域',
god:'柯瑞隆拉瑞辛、艾罗娜、加尔闪金、海朗纽斯、寇德、莫拉丁、培罗、悠妲菈',
addition:'施展善良类法术时，施法者等级+1。',
magic:[
name:'防护邪恶'introduction:'AC与豁免检定+2。反制心灵控制，并可使元素生物与异界生物无法靠近。',
name:'援助术'introduction:'攻击检定与抗恐惧豁免检定均获得+1加值，并增加1d8暂时生命值，每等级再多增加+1点，最高+10点。',
name:'反邪恶法阵'introduction:'与「防护邪恶」同，但范围为半径10呎，每等级可维持10分钟。',
name:'圣光击'introduction:'伤害邪恶阵营生物，并使之目盲。',
name:'反制邪恶'introduction:'在对抗来自邪恶阵营生物的攻击时，可获得+4加值。',
name:'剑刃障壁'introduction:'造出刀剑环绕保护你，每等级可造成1d6点伤害。',
name:'圣言 'introduction:'杀害非善良阵营的受术者，或使之麻痹、虚弱化或晕眩。',
name:'圣洁灵光'introduction:'对抗邪恶类法术时，获得AC+4、抗力+4、法术抗力25。',
name:'九级召唤怪物术'introduction:'只能视为善良类法术，可召唤外界生物为你作战。',
]},

{fieldName:'医疗领域',
god:'培罗',
addition:'施展医疗类法术时，施法者等级+1。',
magic:[
name:'治疗轻伤'introduction:'治疗1d8点伤害，每等级再多治疗+1点，最高+5点。',
name:'治疗中度伤'introduction:'治疗2d8点伤害，每等级再多治疗+1点，最高+10点。',
name:'治疗重伤'introduction:'治疗3d8点伤害，每等级再多治疗+1点，最高+15点。',
name:'治疗致命伤'introduction:'治疗4d8点伤害，每等级再多治疗+1点，最高+20点。',
name:'集体治疗轻伤'introduction:'对多个生物治疗1d8点伤害，每等级再多治疗+1点，最多+25点。',
name:'医疗术'introduction:'每等级治疗10点伤害、所有疾病与心理创伤。',
name:'再生术'introduction:'受术者断裂的肢体可再生，治疗4d8伤害，每等级再多治疗+1点，最高+35点。',
name:'集体治疗致命伤'introduction:'对多个生物治疗4d8点伤害，每等级再多治疗+1点，最多+40点。',
name:'集体医疗术'introduction:'与「医疗术」同，但可针对多个受术者。',
]},

{fieldName:'知识领域',
god:'柏柯柏、威可那',
addition:'所有知识技能都是牧师本职技能。施展预言系法术时，施法者等级+1。',
magic:[
name:'侦测密门'introduction:'发现60呎内的密门。',
name:'侦测思想'introduction:'可以观察到他人的表面想法。',
name:'锐耳术／鹰眼术'introduction:'听或看到远方之情形，每等级维持1分钟。',
name:'预言术 'introduction:'对预定要从事的活动提供有用建言。',
name:'真实目光 'introduction:'见到所有事物的原本面貌。',
name:'寻找捷径'introduction:'显示直接可到达目的地的路。',
name:'通晓传奇 'introduction:'得知一个人、地方或事物的相关传说。',
name:'感知位置'introduction:'得知目标生物或物品的确实位置。',
name:'预警术'introduction:'对将要发生的危险产生第六感警告。',
]},

{fieldName:'秩序领域',
god:'圣库斯伯、海朗纽斯、海克斯特、莫拉丁、维婕丝、悠妲菈',
addition:'施展守序类法术时，施法者等级+1。',
magic:[
name:'防护混乱'introduction:'AC与豁免检定+2。反制心灵控制，并可使元素生物与异界生物无法靠近。',
name:'安定心神'introduction:'安抚生物，抵销情绪性效应。',
name:'反混乱法阵'introduction:'与「防护混乱」同，但范围为半径10呎，每等级可维持10分钟。、',
name:'秩序之怒'introduction:'伤害混乱阵营的生物，并使它们晕眩。',
name:'反制混乱'introduction:'在对抗来自混乱阵营生物的攻击时，可获得+4加值。',
name:'怪物定身术'introduction:'与「人类定身术」同，但可指定任意生物。',
name:'律言'introduction:'杀害非守序阵营的受术者，或使之麻痹、虚弱化或晕眩。',
name:'秩序护盾 'introduction:'对抗混乱类法术时，获得AC+4、抗力+4、法术抗力25。',
name:'九级召唤怪物术'introduction:'只能视为守序类法术，可召唤外界生物为你作战。',
]},

{fieldName:'机运领域',
god:'法兰恩、寇德、渥利达马拉',
addition:'获得「好运」的能力，每天可使用一次。这种特异能力可以使你在掷骰后，DM还未就掷骰结果宣告成功或失败前，马上重掷一次。你必须接受重掷后的结果，即使它比你原来的结果还糟。',
magic:[
name:'熵光护盾'introduction:'用远程武器攻击你会有20%的失手机率。',
name:'援助术'introduction:'攻击检定与抗恐惧豁免检定均获得+1加值，并增加1d8暂时生命值，每等级再多增加+1点，最高+10点。',
name:'防护能量伤害'introduction:'指定一种能量，每等级可吸收12点该种能量所造成的伤害。',
name:'行动自如'introduction:'受术者可以无视障碍物而如常行走。',
name:'破除结界'introduction:'破除受术者所带有的附加魔法、诅咒、石化，或解除其变化。',
name:'假象术'introduction:'使你隐形，并产生分身幻象。',
name:'法术反转'introduction:'将1d4+6法术等级的法术反弹回施法者。',
name:'灵光乍现'introduction:'单次攻击检定、豁免检定或技能检定获得+1洞察加值。',
name:'奇迹术 'introduction:'要求神祇展现神迹。',
]},
 
{fieldName:'魔法领域',
god:'柏柯柏、威可那、维婕丝',
addition:'当使用卷轴、法杖或其他储有法术装置或即发法术装置，在计算效果时，有效法师等级等于牧师等级的一半（最少为1级）。如果你又兼法师，则在使用卷轴或其他装置时，前述有效法师等级须再加上你实际的法师等级。',
magic:[
name:'涅斯图遮蔽灵光'introduction:'遮蔽魔法物品的灵光。',
name:'鉴定术'introduction:'鉴识魔法物品的其中一项特性。',
name:'解除魔法'introduction:'使魔法效果或法术失效。',
name:'法术灌输'introduction:'将法术转换给受术者。',
name:'法术抗力'introduction:'受术者可获得「12+施法者等级」的法术抗力。',
name:'防魔法力场'introduction:'抵销10呎内的法术。',
name:'法术反转'introduction:'将1d4+6法术等级反射回施法者。',
name:'防护法术效果 'introduction:'施与受术者+8的抗力加值。',
name:'魔邓肯裂解术'introduction:'解除魔法，将物品上的附加魔法消除。',
]},

{fieldName:'植物领域',
god:'艾罗娜、欧拜亥',
addition:'可命令或斥喝植物型生物，如同邪恶阵营牧师斥喝不死生物一样。每天可使用这些能力的次数等于3+魅力调整值，所获得的力量属于超自然能力。「自然知识」成为牧师本职技能。',
magic:[
name:'纠缠术'introduction:'半径40呎内范围的所有人被植物纠缠。',
name:'树肤术'introduction:'天生防具获得+2以上的增强加值。',
name:'植物滋长'introduction:'使蔬果生长，农获量增加。',
name:'命令植物'introduction:'影响一或多个植物型生物的动作。',
name:'棘墙术'introduction:'荆棘之墙会伤害任何想通过的人。',
name:'驱离木材'introduction:'将木质物品推开。',
name:'活化植物'introduction:'使树木活动并为你战斗。',
name:'操控植物'introduction:'控制一或多个植物型生物的动作。',
name:'蔓生术'introduction:'召唤1d4+2个蔓生怪为你作战。',
]},

{fieldName:'保护领域',
god:'柯瑞隆拉瑞辛、圣库斯伯、法兰恩、加尔闪金、莫拉丁、悠妲菈',
addition:'你可以制造「保护结界」，这是一种超自然能力，可以使触碰到的人下次进行豁免检定时，获得与你牧师等级相同的抗力加值。使用这项能力属于标准动作。「保护结界」属于防护系，持续时间为一小时，每天可使用一次。',
magic:[
name:'圣域术'introduction:'对手无法攻击你，你也无法进行攻击。',
name:'护卫他人 'introduction:'你代替受术者承受半数伤害。',
name:'防护能量伤害'introduction:'每等级可吸收指定能量型态所造成的12点伤害。',
name:'法术免疫'introduction:'每4等级，可使受术者对一个法术免疫。',
name:'法术抗力'introduction:'受术者可获得「12+施法者等级」的法术抗力。',
name:'防魔法力场'introduction:'抵销10呎内的法术。',
name:'防生物力场'introduction:'生物无法接近你。',
name:'心灵屏障'introduction:'受术者可对心灵性、情绪性与探知法术免疫，',
name:'虹光法球'introduction:'与「虹光法墙」同，但是四周环绕。',
]},

{fieldName:'力量领域',
god:'圣库斯伯、格努须、寇德、培罗',
addition:'你可以使用「力量专长」，这是一种超自然能力。使用时，你的力量值可以获得等同于牧师等级的增强加值。使用此能力属于即时动作。此能力持续时间为1轮，每天可使用一次。',
magic:[
name:'变巨术'introduction:'使人形生物体型加倍。',
name:'蛮力术'introduction:'受术者获得+4力量加值，持续时间为每等级1分钟。',
name:'魔化防具'introduction:'将魔力灌入盾牌或盔甲，使其附加有每4等级+1的增强加值。',
name:'法术免疫'introduction:'每4等级，可使受术者对一个法术免疫。',
name:'正气如虹'introduction:'身体变大，并获得战斗加值。',
name:'石肤术 'introduction:'每次被攻击时可挡下前10点伤害。',
name:'毕格比擒拿掌'introduction:'出现用来掩护、推动或进行擒拿的魔手。',
name:'毕格比金刚拳'introduction:'出现用来掩护、推动或进行攻击的魔手。',
name:'毕格比粉碎掌'introduction:'出现用来掩护、推动或进行碾压的魔手。',
]},

{fieldName:'太阳领域',
god:'艾罗娜、培罗',
addition:'若是在可以进行一般驱散的地方遇到不死生物，你可以尝试进行更强力的驱散。这种强力驱散的方式与普通驱散相同，但原本会被驱散的不死生物会被毁灭。每天可使用一次。',
magic:[
name:'忍受元素伤害'introduction:'在寒冷或炎热环境中怡然自得。',
name:'灼热金属'introduction:'使金属灼热，足以烫伤任何触碰它的人。',
name:'灼热光辉'introduction:'发出射线，每2等级可对敌人造成1d8点伤害。若对手是不死生物，则伤害更重。',
name:'火焰护盾'introduction:'攻击你的生物会受到火焰伤害，你可以不受热或冷影响。',
name:'焰击术'introduction:'用圣火击打对手，每等级可造成1d6点伤害。',
name:'火种术'introduction:'可以将橡实与浆果变成手榴弹与炸弹。',
name:'阳炎射线'introduction:'产生会使人目盲的强光，并造成4d6点伤害。',
name:'阳炎爆'introduction:'10呎内生物目盲，并造成6d6点伤害。',
name:'虹光法球'introduction:'与「虹光法墙」同，但是四周环绕。',
]},

{fieldName:'旅行领域',
god:'法兰恩',
addition:'你可以自由活动，无视于使行动迟缓的魔法效果。此能力类似「行动自如」法术，每天可使用的次数为每牧师等级1轮。此效果自动生效，直到时间截止或不再需要此效果。此效果每日只有总轮数的限制，因此一天可启动数次。这是一种超自然能力。「野外求生」成为牧师本职技能。',
magic:[
name:'神行术'introduction:'速度增加。',
name:'物品定位术'introduction:'感应目标物品的所在方向，可指定物品型态或特定物品。',
name:'飞行术'introduction:'受术者以速度60呎飞行。',
name:'任意门'introduction:'传送至范围内任一地点。',
name:'传送术'introduction:'立刻将你传送至任何地方，最远为每等级100哩。',
name:'寻找捷径'introduction:'显示直接可到达目的地的路。',
name:'高等传送术'introduction:'与「传送术」同，但到达地点没有误差。',
 name:'相位门'introduction:'可经由隐形的路径穿过木头或石头。',
name:'星界投射 'introduction:'将你及伙伴投射入星界。',
]},

{fieldName:'诡术领域',
god:'柏柯柏、厄斯怒、加尔闪金、渥利达马拉、奈落',
addition:'「唬弄」、「易容」与「躲藏」成为牧师本职技能。',
magic:[
name:'魔法易容'introduction:'改变自己的外貌。',
name:'隐形'introduction:'受术者隐形，持续时间为每等级1分钟，或直到进行攻击为止。',
name:'回避侦测 'introduction:'受术者不会被预言系与探知法术探测到。',
name:'困惑术'introduction:'使受术者作一些怪事，持续时间为每等级1轮。',
name:'防范探知 'introduction:'利用幻象使探知法术误判。',
name:'假相术'introduction:'使你隐形，并产生分身幻象。',
name:'障幕'introduction:'利用幻象让一个地区无法被见到或法术探知。',
name:'变形万物'introduction:'将任何目标物品变成任意物体。',
name:'时间停止'introduction:'在1d4+1轮中自由行动。',
]},

{fieldName:'战争领域',
god:'柯瑞隆拉瑞辛、厄斯怒、格努须、海朗纽斯、海克斯特',
name:'addition:'获得所信仰神祇之偏好武器的「擅长军用武器」与「专修武器」专长。各神祇之偏好武器如下'introduction:'柯瑞隆'introduction:'长剑；厄斯怒'introduction:'钉头锤、格努须'introduction:'矛（或长矛）、海朗纽斯'introduction:'长剑、海克斯特'introduction:'连枷（轻型或重型）。',',
magic:[
name:'魔化武器'introduction:'将魔力灌入武器，使其获得+1加值。',
name:'灵能武器'introduction:'魔法武器会自己攻击。',
name:'魔化防具'introduction:'将魔力灌入盾牌或盔甲，使其附加有每4等级+1的增强加值。',
name:'神能'introduction:'获得攻击加值、力量+6，和每等级+1点生命值。',
name:'焰击术'introduction:'用圣火击打对手，每等级可造成1d6点伤害。',
name:'剑刃障壁'introduction:'造出刀剑环绕保护你，每等级可造成1d6点伤害。',
name:'律令目盲'introduction:'使生命值低于200点的生物目盲。',
name:'律令震慑'introduction:'震慑生命值低于150点的生物。',
name:'律令死亡'introduction:'杀害生命值低于100点的生物。',
]},

{fieldName:'水领域',
god:'欧拜亥',
addition:'可驱散或摧毁火系生物，如同善良阵营牧师驱散不死生物一样；或者命令、斥喝或鼓舞水系生物，如同邪恶阵营牧师斥喝不死生物一样。每天可使用这些能力的次数等于3+魅力调整值，所获得的力量属于超自然能力。',
magic:[
name:'隐雾术'introduction:'周围产生迷雾环绕。',
name:'云雾术'introduction:'产生浓雾遮蔽视线。',
name:'水中呼吸法'introduction:'受术者可在水面下呼吸。',
name:'操控水位'introduction:'使水位上升或下降。',
name:'冰风暴'introduction:'40呎的圆柱空间中下满冰雹，通过者受到5d6点伤害。',
name:'寒冰锥'introduction:'每等级造成1d6点寒冷伤害。',
name:'酸雾术'introduction:'产生会造成强酸伤害的浓雾。',
name:'雕死术'introduction:'范围30呎内，每等级可造成1d6点伤害。',
name:'元素战队'introduction:'视为水类法术，可召唤多个元素。',
]},
]
        }
    },
    //德鲁伊
    {
        0:[{name:'造水术',introduction:'每等级可造出2加仑纯水。'},
{name:'治疗小伤',introduction:'治疗1点伤害。'},
{name:'侦测魔法',introduction:'侦测60呎内的法术或魔法物品。'},
{name:'侦测毒性',introduction:'侦测一个生物或小型物体所带有的毒性。'},
{name:'闪光术',introduction:'使一个生物目眩（攻击检定-1）。'},
{name:'神导术',introduction:'单次攻击检定、豁免检定或技能检定+1。'},
{name:'指北术',introduction:'指出北方。'},
{name:'光亮术',introduction:'使目标物品如火把般发光。'},
{name:'修复术',introduction:'修复目标物品的细微损伤。'},
{name:'净化食粮',introduction:'每等级可精制出1立方呎的水或食物。'},
{name:'阅读魔法',introduction:'阅读卷轴及法术书。'},
{name:'提升抗力',introduction:'受术者的豁免检定获得+1加值。'},
{name:'恩赐',introduction:'受术者获得1点暂时生命值。'},]

1:[{name:'安抚动物',introduction:'安抚生命骰数总和为「2d4+施法者等级」的动物。'},
{name:'魅惑动物',introduction:'使一个动物相信你是盟友。'},
{name:'治疗轻伤',introduction:'治疗1d8点伤害，每等级再多治疗+1点，最高+5点。'},
{name:'侦测动植物',introduction:'侦测动植物种类。'},
{name:'侦测陷阱',introduction:'侦测天然或简单的陷阱。'},
{name:'忍受元素伤害',introduction:'在寒冷或炎热环境中怡然自得。'},
{name:'纠缠术',introduction:'半径40呎内范围的所有人被植物纠缠。'},
{name:'妖火',introduction:'以光描绘出受术者的轮廓，可抵销「朦胧术」、隐藏效果等。'},
{name:'神莓',introduction:'产生2d4颗莓子，每颗可治疗1点生命值，24小时内最多治疗8点。'},
{name:'躲避动物',introduction:'动物无法察觉受术者，可影响的生物个数与等级同。'},
{name:'跳跃术',introduction:'受术者作「跳跃」技能检定时获得加值。'},
{name:'神行术',introduction:'速度增加10呎。'},
{name:'魔爪',introduction:'增强受术者的天生武器，使攻击检定与伤害掷骰获得+1加值。'},
{name:'魔石术',introduction:'变出三颗魔石，攻击获得+1加值，可造成1d6+1点伤害。'},
{name:'隐雾术',introduction:'周围产生迷雾环绕。'},
{name:'行动无踪',introduction:'每等级可使一个受术者行走不留踪迹。'},
{name:'燃火术',introduction:'产生火焰触碰或丢掷敌人，伤害值为1d6点，每等级再+1点。'},
{name:'橡棍术',introduction:'木棍或短棒成为+1武器，可造成1d10点伤害，持续时间为每等级1分钟。'},
{name:'动物交谈',introduction:'你可以与动物交谈。'},
{name:'一级召唤盟友术',introduction:'呼唤生物共同作战。'},]

2:[{name:'动物使者',introduction:'将一只超小型动物送至指定地点。'},
{name:'迷惑动物',introduction:'使生命骰数和为2d6的动物陷入迷魂状态。'},
{name:'树肤术',introduction:'天生防具获得+2以上的增强加值。'},
{name:'坚韧术',introduction:'受术者获得+4体质加值，持续时间为每等级1分钟。'},
{name:'蛮力术',introduction:'受术者获得+4力量加值，持续时间为每等级1分钟。'},
{name:'轻灵术',introduction:'受术者获得+4敏捷加值，持续时间为每等级1分钟。'},
{name:'冻寒金属',introduction:'使金属结冻，足以冻伤任何触碰它的人。'},
{name:'减缓毒性',introduction:'使毒性停止对受术者造成伤害，每等级可持续1小时。'},
{name:'火焰陷阱',introduction:'打开目标物品，可造成1d4点伤害，每等级再多造成+1点伤害。'},
{name:'火焰刀',introduction:'触碰攻击可造成1d8点伤害，每2等级伤害多+1点。'},
{name:'炽焰法球',introduction:'滚出一团火球，造成2d6点伤害，持续时间为每等级1轮。'},
{name:'云雾术',introduction:'产生浓雾遮蔽视线。'},
{name:'造风术',introduction:'刮走或吹倒小型生物。'},
{name:'灼热金属',introduction:'使金属灼热，足以烫伤任何触碰它的人。'},
{name:'动物定身术',introduction:'使一只动物无法动弹，每等级可维持1轮。'},
{name:'博识术',introduction:'受术者获得+4睿智加值，持续时间为每等级1分钟。'},
{name:'缩小动物',introduction:'使有意愿的动物缩小。'},
{name:'抵抗能量伤害',introduction:'可忽略指定能量型态所造成的前10点（或更多）伤害。'},
{name:'次级复原术',introduction:'解除所有魔法属性减值，或回复1d4属性伤害。'},
{name:'柔石术',introduction:'将石头变为粘土，或将碎石变为细砂或烂泥。'},
{name:'蛛行术',introduction:'获得可在墙上及天花板行走的能力。'},
{name:'二级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'飞虫走兽',introduction:'召唤蝙蝠、老鼠或蜘蛛群。'},
{name:'树化术',introduction:'你看上去就像一棵树，持续时间为每等级1小时。'},
{name:'曲木术',introduction:'弯曲树木，可制武器手柄、扶手、门或厚板。'},
{name:'塑木术',introduction:'重新塑造木质物品以合己身。'},]

3:[{name:'召雷术',introduction:'由空中召唤闪电，每道造成3d6点伤害。'},
{name:'疫病术',introduction:'使受术者感染所指定之疫病。'},
{name:'治疗中度伤',introduction:'治疗2d8点伤害，每等级再多治疗+1点，最高+10点。'},
{name:'昼明术',introduction:'产生半径60呎的亮光。'},
{name:'植物凋零',introduction:'使一般植物变小并抑制生长。'},
{name:'支配动物',introduction:'目标动物会遵从无声的心灵命令。'},
{name:'高等魔爪',introduction:'增强受术者的天生武器，使攻击检定与伤害掷骰每3等级获得+1加值，最多+5。'},
{name:'融身入石',introduction:'你和身上的配件可以与石头混合。'},
{name:'中和毒性',introduction:'使受术者对毒免疫，去除物体内外的毒素。'},
{name:'植物滋长',introduction:'使蔬果生长，农获量增加。'},
{name:'毒击',introduction:'触碰攻击，可造成1d10体质伤害，1分钟后再重复。'},
{name:'防护能量伤害',introduction:'指定一种能量，每等级可吸收12点该种能量所造成的伤害。'},
{name:'灭火术',introduction:'灭掉非魔法的火焰，或一个带有火焰效果的魔法物品。'},
{name:'移除疾病',introduction:'清除对象身上所有疾病。'},
{name:'雪雨暴',introduction:'妨碍视线与行动。'},
{name:'圈套术',introduction:'制造简陋的魔法陷阱。'},
{name:'植物交谈',introduction:'你可以与一般植物或植物型生物交谈。'},
{name:'荆棘丛生',introduction:'范围内生物受到1d4点伤害，行动可能被减缓。'},
{name:'塑石术',introduction:'将石头雕塑成任何形状。'},
{name:'三级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'水中呼吸法',introduction:'受术者可在水面下呼吸。'},
{name:'风墙术',introduction:'使箭矢、小生物及气体转向。'},]

4:[{name:'凌空而行',introduction:'使受术者可踏入空中（以45度攀爬），如在实地行走一般。'},
{name:'防植物护罩',introduction:'使会动的植物无法接近。'},
{name:'枯朽术',introduction:'使一株植物枯萎，或对植物型生物造成每等级1d6点伤害。'},
{name:'命令植物',introduction:'影响一或多个植物型生物的动作。'},
{name:'操控水位',introduction:'使水位上升或下降。'},
{name:'治疗重伤',introduction:'治疗3d8点伤害，每等级再多治疗+1点，最高+15点。'},
{name:'解除魔法',introduction:'使魔法效果或法术失效。'},
{name:'焰击术',introduction:'用圣火击打对手，每等级可造成1d6点伤害。'},
{name:'行动自如',introduction:'受术者可以无视障碍物而如常行走。'},
{name:'巨虫术',introduction:'将蜈蚣、蝎子或蜘蛛变成巨虫。'},
{name:'冰风暴',introduction:'40呎的圆柱空间中下满冰雹，通过者受到5d6点伤害。'},
{name:'转生术',introduction:'使已死对象随便复活到任一身体。'},
{name:'驱离害虫',introduction:'蜘蛛、昆虫及其他虫类无法靠近10呎以内。'},
{name:'锈蚀爪',introduction:'触碰攻击，可使铁或合金锈蚀。'},
{name:'探知',introduction:'可由远处监视受术者。'},
{name:'刺石术',introduction:'指定区域的生物受到1d8点伤害，并有可能变缓慢。'},
{name:'四级召唤盟友术',introduction:'呼唤生物共同作战。'},]

5:[{name:'异变动物',introduction:'每2等级可使一个生物变成两倍大。'},
{name:'赎罪术',introduction:'去除受术者的罪孽重负。'},
{name:'启蒙术',introduction:'使树木或动物具有人的智慧。'},
{name:'化戾变形',introduction:'使受术者变成无害动物。'},
{name:'召雷暴术',introduction:'与「召雷术」同，但每道造成5d6点伤害。'},
{name:'问道自然',introduction:'每等级可了解1哩之内的地形。'},
{name:'操控风相',introduction:'改变风的方向与速度。'},
{name:'治疗致命伤',introduction:'治疗4d8点伤害，每等级再多治疗+1点，最高+20点。'},
{name:'防死结界',introduction:'对死亡类法术与负能量效果免疫。'},
{name:'圣居',introduction:'目标地神圣化。'},
{name:'疫病虫群',introduction:'出现蝗虫群攻击生物。'},
{name:'石肤术',introduction:'每次被攻击时可挡下10点伤害。'},
{name:'五级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'化泥为石',introduction:'每等级可转换两个各边长10呎的立方体。'},
{name:'化石为泥',introduction:'每等级可转换两个各边长10呎的立方体。'},
{name:'融身入林',introduction:'由一棵树跨越到远方的另一棵树。'},
{name:'邪居',introduction:'将目标地变为不神圣。'},
{name:'火墙术',introduction:'10呎内可造成2d4点火焰伤害，20呎内则造成1d4点火焰伤害。穿越火墙会受到「2d6+施法者等级」点伤害。'},
{name:'棘墙术',introduction:'荆棘之墙会伤害任何想通过的人。'},]

6:[{name:'防活物护罩',introduction:'活的生物无法靠近10呎以内。'},
{name:'集体坚韧术',introduction:'与「坚韧术」同，但可影响的生物个数与等级同。'},
{name:'集体蛮力术',introduction:'与「蛮力术」同，但可影响的生物个数与等级同。'},
{name:'集体轻灵术',introduction:'与「轻灵术」同，但可影响的生物个数与等级同。'},
{name:'集体治疗轻伤',introduction:'对多个生物治疗1d8点伤害，每等级再多治疗+1点。'},
{name:'高等解除魔法',introduction:'与「解除魔法」同，但检定+20。'},
{name:'寻找捷径',introduction:'显示直接可到达目的地的路。'},
{name:'火种术',introduction:'可以将橡实与浆果变成手榴弹与炸弹。'},
{name:'金刚木',introduction:'施法使木头跟铁一样坚固。'},
{name:'橡树守卫',introduction:'将橡木化为树人守卫。'},
{name:'地动术',introduction:'挖出沟渠或造出山丘。'},
{name:'集体巧智术',introduction:'与「巧智术」同，但可影响的生物个数与等级同。'},
{name:'驱离木材',introduction:'将木质物品推开。'},
{name:'储法杖',introduction:'将一个法术储存于木制手杖上。'},
{name:'石言术',introduction:'与天然石头或雕琢后的石制物交谈。'},
{name:'六级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'木遁术',introduction:'迅速地从一株植物移动至同种的另一株处。'},
{name:'石墙术',introduction:'制造一面石墙，形状可自订。'},]

7:[{name:'活化植物',introduction:'使一株或更多植物活动并为你战斗。'},
{name:'化棍法',introduction:'将木棍变成树人，并听从你指挥。'},
{name:'操控天气',introduction:'可以改变当地的气候。'},
{name:'漫天虫蚀',introduction:'命令一群蜈蚣进行攻击。'},
{name:'集体治疗中度伤',introduction:'对多个生物治疗2d8点伤害，每等级再多治疗+1点。'},
{name:'火焰风暴',introduction:'每等级可造成1d6火焰伤害。'},
{name:'医疗术',introduction:'每等级治疗10点伤害、所有疾病与心理创伤。'},
{name:'高等探知',introduction:'与「探知」同，但更快更久。'},
{name:'七级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'阳炎射线',introduction:'产生会使人目盲的强光，并造成4d6点伤害。'},
{name:'化铁为木',introduction:'40呎内的金属变为木材。'},
{name:'真实目光',introduction:'见到所有事物的原本面貌。'},
{name:'御风而行',introduction:'你与盟友化为气态，得以快速旅行。'},]

8:[{name:'动物化身',introduction:'每等级可选择一个盟友，变形成施法者指定的动物。'},
{name:'操控植物',introduction:'控制一或多个植物型生物的动作。'},
{name:'集体治疗重伤',introduction:'对多个生物治疗3d8点伤害，每等级再多治疗+1点。'},
{name:'地震术',introduction:'半径每等级5呎内产生剧烈摇晃。'},
{name:'死亡一指',introduction:'杀害一个受术者。'},
{name:'驱离金石',introduction:'将金属与石头推开。'},
{name:'反重力',introduction:'目标物品或生物会向上坠落。'},
{name:'八级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'阳炎爆',introduction:'10呎内生物目盲，并造成6d6点伤害。'},
{name:'旋风术',introduction:'龙卷风可造成伤害，并可卷起生物。'},
{name:'回返真言',introduction:'将你传送回指定地点。'},]

9:[{name:'嫌恶术',introduction:'受法术影响的地域或目标物品会自动排斥某些生物。'},
{name:'集体治疗致命伤',introduction:'对多个生物治疗4d8点伤害，每等级再多治疗+1点。'},
{name:'元素战队',introduction:'可召唤多个元素。'},
{name:'预警术',introduction:'对将要发生的危险产生第六感警告。'},
{name:'再生术',introduction:'受术者断裂的肢体可再生，治疗4d8伤害，每等级再多治疗+1点，最高+35点。'},
{name:'蔓生术',introduction:'召唤1d4+2个蔓生怪为你作战。'},
{name:'形体变化',introduction:'可变成任何生物，每轮并可更换一次。'},
{name:'复仇风暴',introduction:'下着酸液、寒冰和霜雹的风暴。'},
{name:'九级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'共鸣术',introduction:'受法术影响的地域或目标物品会吸引某些生物。'},]

    },
    //战士
    null,
    //武僧
    null,
    //圣武士
    {
        1:[{name:'祝福术',introduction:'同伴获得+1攻击检定，+1抗恐惧豁免检定。'},
{name:'祝福圣水',introduction:'造出圣水。'},
{name:'祝福武器',introduction:'使武器可对邪恶敌人造成痛击。'},
{name:'造水术',introduction:'每等级可造出2加仑纯水。'},
{name:'治疗轻伤',introduction:'治疗1d8点伤害，每等级再多治疗+1点，最高+5点。'},
{name:'侦测毒性',introduction:'侦测一个生物或小型物体所带有的毒性。'},
{name:'侦测死灵',introduction:'发现60呎内的不死生物。'},
{name:'神眷',introduction:'攻击检定与伤害掷骰每3等级获得+1加值。'},
{name:'忍受元素伤害',introduction:'在寒冷或炎热环境中怡然自得。'},
{name:'魔化武器',introduction:'将魔力灌入武器，使其获得+1加值。'},
{name:'防护混乱／邪恶',introduction:'AC与豁免检定+2。反制心灵控制，并可使元素生物与异界生物无法靠近。'},
{name:'阅读魔法',introduction:'阅读卷轴及法术书。'},
{name:'提升抗力',introduction:'受术者的豁免检定获得+1加值。'},
{name:'次级复原术',introduction:'解除所有魔法属性减值，或回复1d4属性伤害。'},
{name:'恩赐',introduction:'受术者获得1点暂时生命值。'},]

2:[{name:'蛮力术',introduction:'受术者获得+4力量加值，持续时间为每等级1分钟。'},
{name:'减缓毒性',introduction:'使毒性停止对受术者造成伤害，每等级可持续1小时。'},
{name:'耀眼术',introduction:'受术者获得+4魅力加值，持续时间为每等级1分钟。'},
{name:'博识术',introduction:'受术者获得+4睿智加值，持续时间为每等级1分钟。'},
{name:'移除麻痹',introduction:'移除一或多个生物的麻痹或缓慢效果。'},
{name:'抵抗能量伤害',introduction:'可忽略指定能量型态所造成的前10点（或更多）伤害。'},
{name:'护卫他人',introduction:'你代替受术者承受半数伤害。'},
{name:'隐匿阵营',introduction:'隐藏阵营24小时。'},
{name:'诚实之域',introduction:'范围内的对象无法说谎。'},]

3:[{name:'治疗中度伤',introduction:'治疗2d8点伤害，每等级再多治疗+1点，最高+10点。'},
{name:'昼明术',introduction:'产生半径60呎的亮光。'},
{name:'测知谎言',introduction:'发觉蓄意的谎言。'},
{name:'解除魔法',introduction:'使魔法效果或法术失效。'},
{name:'医疗座骑',introduction:'与「医疗术」同，用于战马或其他骑乘用生物。'},
{name:'反混乱法阵',introduction:'与「防护混乱」同，但范围为半径10呎，每等级可维持10分钟。'},
{name:'反邪恶法阵',introduction:'与「防护邪恶」同，但范围为半径10呎，每等级可维持10分钟。'},
{name:'高等魔化武器',introduction:'每4等级+1，最多+5。'},
{name:'祈祷术',introduction:'盟友大部分检定都可得到+1加值，敌人则-1。'},
{name:'移除目盲／耳聋',introduction:'治疗正常或魔法造成的目盲及耳聋。'},
{name:'移除诅咒',introduction:'移除物品或人身上的诅咒。'},]

4:[{name:'破除结界',introduction:'破除受术者所带有的附加魔法、诅咒、石化，或解除其变化。'},
{name:'治疗重伤',introduction:'治疗3d8点伤害，每等级再多治疗+1点，最高+15点（圣武士的有效施法者等级为10级）。'},
{name:'防死结界',introduction:'对死亡类法术与负能量效果免疫。'},
{name:'反制混乱',introduction:'在对抗来自混乱阵营生物的攻击时，可获得+4加值。'},
{name:'反制邪恶',introduction:'在对抗来自邪恶阵营生物的攻击时，可获得+4加值。'},
{name:'圣剑术',introduction:'武器属性成为+5，对抗邪恶阵营生物时伤害值+2d6。'},
{name:'正义烙印',introduction:'设定受术者在进行哪些动作时会触发「诅咒」。'},
{name:'中和毒性',introduction:'使受术者对毒免疫，去除物体内外的毒素。'},
{name:'复原术',introduction:'恢复被吸取的属性值与等级。'},]
    },
    //游侠
    {
        1:[{name:'魔法警报',introduction:'产生警报结界，持续时间为每等级2小时。'},
{name:'动物使者',introduction:'将一只超小型动物送至指定地点。'},
{name:'安抚动物',introduction:'安抚生命骰数总和为「2d4+施法者等级」的动物。'},
{name:'魅惑动物',introduction:'使一个动物相信你是盟友。'},
{name:'减缓毒性',introduction:'使毒性停止对受术者造成伤害，每等级可持续1小时。'},
{name:'侦测动植物',introduction:'侦测动植物种类。'},
{name:'侦测毒性',introduction:'侦测一个生物或小型物体所带有的毒性。'},
{name:'侦测陷阱',introduction:'侦测天然或简单的陷阱。'},
{name:'忍受元素伤害',introduction:'在寒冷或炎热环境中怡然自得。'},
{name:'纠缠术',introduction:'半径40呎内范围的所有人被植物纠缠。'},
{name:'躲避动物',introduction:'动物无法察觉受术者，可影响的动物数与等级同。'},
{name:'跳跃术',introduction:'受术者作「跳跃」技能检定时获得加值。'},
{name:'神行术',introduction:'速度增加。'},
{name:'魔爪',introduction:'增强受术者的天生武器，使攻击检定与伤害掷骰获得+1加值。'},
{name:'行动无踪',introduction:'每等级可使一个受术者行走不留踪迹。'},
{name:'阅读魔法',introduction:'阅读卷轴及法术书。'},
{name:'抵抗能量伤害',introduction:'可忽略指定能量型态所造成的10点（或更多）伤害。'},
{name:'动物交谈',introduction:'你可以与动物交谈。'},
{name:'一级召唤盟友术',introduction:'呼唤生物共同作战。'},]

2:[{name:'树肤术',introduction:'天生防具获得+2以上的增强加值。'},
{name:'坚韧术',introduction:'受术者获得+4体质加值，持续时间为每等级1分钟。'},
{name:'轻灵术',introduction:'受术者获得+4敏捷加值，持续时间为每等级1分钟。'},
{name:'治疗轻伤',introduction:'治疗1d8点伤害，每等级再多治疗+1点，最高+5点。'},
{name:'动物定身术',introduction:'使一只动物无法动弹，每等级可维持1轮。'},
{name:'博识术',introduction:'受术者获得+4睿智加值，持续时间为每等级1分钟。'},
{name:'防护能量伤害',introduction:'指定一种能量，每等级可吸收12点该种能量所造成的伤害。'},
{name:'圈套术',introduction:'制造简陋的魔法陷阱。'},
{name:'植物交谈',introduction:'你可以与一般植物或植物型生物交谈。'},
{name:'荆棘丛生',introduction:'范围内生物受到1d4点伤害，行动可能被减缓。'},
{name:'二级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'风墙术',introduction:'使箭矢、小生物及气体转向。'},]

3:[{name:'命令植物',introduction:'影响一或多个植物型生物的动作。'},
{name:'治疗中度伤',introduction:'治疗2d8点伤害，每等级再多治疗+1点，最高+10点。'},
{name:'黑暗视觉',introduction:'在完全黑暗中可见距离60呎。'},
{name:'植物凋零',introduction:'使一般植物变小并抑制生长。'},
{name:'高等魔爪',introduction:'增强受术者的天生武器，使攻击检定与伤害掷骰每3等级获得+1加值，最多+5。'},
{name:'中和毒性',introduction:'使受术者对毒免疫，去除物体内外的毒素。'},
{name:'植物滋长',introduction:'使蔬果生长，农获量增加。'},
{name:'缩小动物',introduction:'使有意愿的动物缩小。'},
{name:'移除疾病',introduction:'清除对象身上所有疾病。'},
{name:'驱离害虫',introduction:'蜘蛛、昆虫及其他虫类无法靠近10呎以内。'},
{name:'三级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'树化术',introduction:'你看上去就像一棵树，持续时间为每等级1小时。'},
{name:'水面行走',introduction:'目标行于水上如履实地。'},]

4:[{name:'异变动物',introduction:'每2等级可使一个生物变成两倍大。'},
{name:'问道自然',introduction:'每等级可了解1哩之内的地形。'},
{name:'治疗重伤',introduction:'治疗3d8点伤害，每等级再多治疗+1点，最高+15点。'},
{name:'行动自如',introduction:'受术者可以无视障碍物而如常行走。'},
{name:'回避侦测',introduction:'受术者不会被预言系与探知法术探测到。'},
{name:'四级召唤盟友术',introduction:'呼唤生物共同作战。'},
{name:'融身入林',introduction:'由一棵树跨越到远方的另一棵树。'},]
    },
    //盗贼
    null,
    //术士 法师
    {},
];
export default data ;
0
1
2
3
4
5
6
7
8
9



中文  123123123：adfasfdaafd。
防护  提升抗力：受术者的豁免检定获得+1加值。
咒法  强酸四溅：球形，造成1d3点强酸伤害。
预言  侦测毒性：侦测一个生物或小型物体所带有的毒性。
预言  侦测魔法：侦测60呎内的法术或魔法物品。
预言  阅读魔法：阅读卷轴及法术书。
附魔  晕眩术：4HD以下的人形生物会失去下一次的动作。
塑能  舞光术：制造火把或其他光源。
塑能  闪光术：使一个生物目眩（攻击检定-1）。
塑能  光亮术：使目标物品如火把般发光。
塑能  冷冻射线：发出射线，造成1d3点冷冻伤害。
幻术  幻音术：发出虚幻的假声。
死灵  打击死灵：对一个不死生物造成1d6点伤害。
死灵  疲乏之触：触碰攻击，成功可使目标疲乏。
变化  法师帮手：可对5磅以内的物品使用心灵遥控。
变化  修复术：修复目标物品的细微损伤。
变化  传讯术：可在远距离使用轻声交谈。
变化  开关术：打开或关上小或轻的目标物品。
共通  秘法印记：刻上可见或不可见的个人记号。
共通  魔法技俩：玩一些小把戏。

中文  123123123：adfasfdaafd。
防护  魔法警报：产生警报结界，持续时间为每等级2小时。
防护  忍受元素伤害：在寒冷或炎热环境中怡然自得。
防护  封门术：使门维持关闭。
防护  防护混乱／邪恶／善良／守序：AC与豁免检定+2。反制心灵控制，并可使元素生物与异界生物无法靠近。
防护  护盾术：产生隐形圆盾，挡住「魔法飞弹」。
咒法  油腻术：将10呎见方区域或单一目标物品变得滑腻。
咒法  法师护甲：受术者获得+4盔甲加值。
咒法  召唤座骑：召唤可骑乘的马，持续时间为每等级2小时。
咒法  隐雾术：周围产生迷雾环绕。
咒法  一级召唤怪物术：可召唤外界生物为你作战。
咒法  隐形仆役：制造出服从号令的隐形力量。
预言  通晓语言：懂得所有可说可写的语言。
预言  侦测密门：发现60呎内的密门。
预言  侦测死灵：发现60呎内的不死生物。
预言  鉴定术 ：鉴识魔法物品的其中一项特性。
预言  克敌机先：下次攻击检定获得+20加值。
附魔  魅惑人类：使一个人类成为你的朋友。
      催眠术：使生命骰数和为2d4的生物群陷入迷魂状态。
      睡眠术：使生命骰数和为4的生物群陷入魔法昏睡状态。
塑能  燃烧之手：每等级造成1d4点火焰伤害，最大5d4。
      魔法飞弹：造成1d4+1点伤害，1级时可发射一颗，之后每2等级加一颗，最高五颗。
      电爪：触碰时可传送电流，每等级造成1d6点伤害，最大5d6。
      谭森飘浮碟：直径三呎的平行浮碟，每等级可载重100磅。
幻术  七彩喷射：震慑1d6个弱小生物，或将之敲到昏迷、使之目盲。
      魔法易容：改变自己的外貌。
      涅斯图伪装灵光：改变物品的灵光。
      无声幻影：造出你想要的幻影。
      腹语术：每等级可发出1分钟的腹语。
死灵  惊恐术：使一个5HD以下的生物逃窜1d4个回合。
      冻寒之触：每等级可触碰一次，每次造成1d6点伤害，甚至造成1点力量值伤害。
      衰弱射线：发出射线，造成力量值下降1d6，每2等级再下降1点。
变化  活化绳：造出一条魔法绳，依你的命令行动。
      变巨术：使人形生物体型加倍。
      抹消术：消除一般或魔法书写文字。
      脚底抹油：你的速度增加30呎。
      羽落术：目标物品或生物以缓慢的速度下降。
      跳跃术：受术者作「跳跃」技能检定时获得加值。
      魔化武器：将魔力灌入武器，使其获得+1加值。
      缩小术：使人形生物体型减半。

中文  123123123：adfasfdaafd。
防护  秘法锁 ：用魔法锁住门或箱子。
      遮蔽物品：目标物品不会被探测到。
      防护箭矢：受术者对大多数的远程攻击免疫。
      抵抗能量伤害：可忽略指定能量型态所造成的10点（或更多）伤害。
咒法  云雾术：产生浓雾遮蔽视线。
      闪光尘：使生物目盲，或看见隐形生物的轮廓。
      马友夫强酸箭：远程触碰攻击，每轮造成2d4点伤害，持续时间为一轮，每3等级加一轮。
      二级召唤怪物术：可召唤外界生物为你作战。飞虫走兽：召唤蝙蝠、老鼠或蜘蛛群。
      蛛网术：将半径20呎范围内布满粘粘的蜘蛛网。
预言  侦测思想：可以观察到他人的表面想法。
预言  物品定位术：感应目标物品的所在方向，可指定物品型态或特定物品。
预言  识破隐形：发现隐形生物或物体。
附魔  怪物晕眩术：6HD以下的活物会失去下一次的动作。
      塔莎狂笑术：受术者在每等级1轮中失去动作能力。
      失智之触：受术者会遭受1d6点智力、睿智与魅力伤害。
塑能  不灭明焰 ：造出一支永远不灭，不会发热的火把。
      黑暗术：产生半径20呎的超自然黑暗。
      炽焰法球：滚出一团火球，造成2d6点伤害，持续时间为每等级1轮。
      造风术：刮走或吹倒小型生物。
      焦灼射线：远程触碰攻击，可造成4d6点火焰伤害，每等级再多1道射线，最多+3道。
      粉碎音波：发出高速震动的音波，足以伤害目标物品或晶体生物。
幻术  朦胧术：对受术者的攻击会有20%的失手机率。
      催眠图纹：使生命骰数和为「2d4+施法者等级」的生物群陷入迷魂状态。
      隐形：受术者隐形，持续时间为每等级1分钟，或直到进行攻击为止。
      李欧蒙陷阱 ：使物品看起来有设陷阱。
      魔嘴 ：触发时会说话。
      次级幻影：与「无声幻影」同，但能发出一些声音。
      镜影术：制造跟你一样的分身幻影，个数为1d4个，每3等级再增加一个，最多八个。
      误导：使侦测指定生物或物品的预言系法术被误导。
死灵  目盲术／耳聋术：使受术者目盲或耳聋。
      命令不死生物：不死生物会服从命令。
      伪造生命：得到1d10点暂时生命值，每等级+1，最多+10。
      食尸鬼之触：麻痹受术者，并使之散发恶臭，造成周遭生物的不适。
      群体惊恐术：使6HD以下的生物慌乱。
      幽灵手：造出发光的灵体鬼手来传送触碰攻击。
变化  变身术：变为类似的生物。
      坚韧术：受术者获得+4体质加值，持续时间为每等级1分钟。
      蛮力术：受术者获得+4力量加值，持续时间为每等级1分钟。
      轻灵术：受术者获得+4敏捷加值，持续时间为每等级1分钟。
      黑暗视觉：在完全黑暗中可见距离60呎。
      耀眼术：受术者获得+4魅力加值，持续时间为每等级1分钟。
      巧智术：受术者获得+4智力加值，持续时间为每等级1分钟。
      敲击术：开启上锁或被魔法封印的门。
      浮空术：受术者依你指示上下移动。
      博识术：受术者获得+4睿智加值，持续时间为每等级1分钟。
      烟火术：将火变为眩目的光或呛人的烟。
      魔绳术：最高可将八个生物藏在异次元中。
      蛛行术：获得可在墙上及天花板行走的能力。
      风讯术：将简讯送出，每等级一哩。

中文  123123123：adfasfdaafd。
防护  解除魔法：使魔法效力或法术失效。
      爆裂符文：阅读时会造成6d6点伤害。
      反混乱／反邪恶／反善良／反秩序法阵：与防护法术同，但范围为半径10呎，每等级可维持10分钟。
      回避侦测 ：受术者不会被预言系与探知法术探测到。
      防护能量伤害：指定一种能量，每等级可吸收12点该种能量所造成的伤害。
咒法  魅影驹：产生魔法马，持续时间为每等级1小时。
      蛇纹法印 ：造出文字徽记，可使阅读者动弹不得。
      雪雨暴：妨碍视线与行动。 
      臭云术：发出令人作呕的气味，持续时间为每等级1轮。
      三级召唤怪物术：可召唤外界生物为你作战。
预言  秘眼通：可以直接看见魔法灵光。
预言  锐耳术／鹰眼术：听或看到远方之情形，每等级维持1分钟。
预言  巧言术：能说任何语言。
附魔  沉睡术：使生命骰数和为10的生物群陷入睡眠状态。
      英勇术：攻击检定、豁免检定与技能检定+2。
      人类定身术：使一个人型生物无法动弹，持续时间为每等级1轮。
      盛怒术：受术者的力量和体质值得到+2加值，意志检定有+1加值，AC有-2减值。
      暗示：使受术者遵从暗示行动。
塑能  昼明术：产生半径60呎的亮光。
      火球术：每等级可造成1d6点伤害，范围为半径20呎。
      李欧蒙小屋：造出可供10个生物使用的庇护所。
      闪电束：电流每等级可造成1d6点伤害。
      风墙术：使箭矢、小生物及气体转向。
幻术  移位术：对受术者的攻击会有50%的失手机率。
      迷幻手稿 ：只有事先指定的读者可解读此文字。
      隐形法球：使10呎内所有人隐形。
      高等幻影：与「无声幻影」同，只是有声音、气味和温度。
死灵  遗体防腐：保存一具尸体。
      死灵定身术：使不死生物无法动弹，持续时间为每等级1轮。
      衰竭射线：发出射线使受术者力竭。
      吸血鬼之触：触碰攻击，每2等级造成1d6点伤害，所造成的伤害值成为施法者的生命值。
变化  闪现术：忽隐忽现，持续时间为每等级1轮。
      火焰箭：射出飞箭，造成1d6点火焰伤害。
      飞行术：受术者以速度60呎飞行。
      气化形体：使受术者变为虚幻状态，并可以缓慢飞行。
      加速术：每等级可使一个生物移动得更快，攻击检定、AC与反射检定均+1。
      利刃术：一般武器可增加一倍强击范围。
      高等魔化武器：每4等级+1，最多+5。
      秘密文页：将一页图文改变，使之认不出原文。
      缩物术：目标物品缩到十六分之一大。
      缓慢术：受术者每轮只能进行一个动作。AC与攻击检定均-2。可影响的生物个数与等级同。
      水中呼吸法：受术者可在水面下呼吸。

中文  123123123：adfasfdaafd。
防护  次元锚：阻挡往异次元的移动。
      火焰陷阱 ：打开目标物品，可造成1d4点伤害，每等级再多造成+1点伤害。
      次级法术无效结界：阻断一级至三级的法术效果。
      移除诅咒：移除物品或人身上的诅咒。
      石肤术 ：每次被攻击时可挡下前10点伤害。
咒法  任意门：传送至范围内任一地点。
      艾伐黑触手：触手擒拿住15呎范围内的所有事物。
      李欧蒙庇护所：造出坚固的屋舍。
      次级造物术：制造出衣物或木质物品。
      重雾术：造出会阻碍视线与减缓移动的浓雾。
      四级召唤怪物术：可召唤外界生物为你作战。
预言  秘法眼：隐形的飘浮之眼，速度为每轮30呎。
预言  侦测探知：警告你有人使用魔法在窃听。
预言  生物定位术：指出熟悉生物的方向。
预言  探知 ：可由远处监视受术者。
附魔  魅惑怪物：使一个怪物相信你是盟友。
      困惑术：使受术者作一些怪事，持续时间为每等级1轮。
      满怀绝望：受术者的攻击检定、伤害掷骰、豁免检定与技能检定-2。
      次级指使术：命令7HD以下的对象。
塑能  火焰护盾：攻击你的生物会受到火焰伤害，你可以不受热或冷影响。
      冰风暴：40呎的圆柱空间中下满冰雹，通过者受到5d6点伤害。
      欧提路克魔封法球：形成球型场域，一方面保护受术者，一方面将之困于其中。
      咆哮术：使锥形范围内所有人震耳欲聋，并受到5d6点伤害。
      火墙术：10呎内可造成2d4点火焰伤害，20呎内则造成1d4点火焰伤害。穿越火墙会受到「2d6+施法者等级」点伤害。
      冰墙术：使用「平面功效」造出冰墙，生命值为「15+施法者等级」点；或使用「半球功效」将生物困于其中。
幻术  幻景：使某种地形看起来像是另一种（如：使原野看起来像森林）。
      幻墙术：制造拟真的墙、门、天花板，但任何事物都可穿过。
      高等隐形：与「隐形」同，但受术者进行攻击后仍可保持隐形。
      魅影杀手：恐怖的幻象出现杀害受术者，或对其造成3d6点伤害。
      虹彩图纹：发出彩光，使生命骰数和为24的生物群陷入迷魂。
      幽影咒法术：假拟低于四级的咒法系法术，但只有20%的真实性。
死灵  操纵死尸 ：制造骷髅、僵尸等不死生物。
      降咒：单一属性值-6，或攻击检定、豁免检定、各种检定值都-4，或每次动作有50%失手机率。
      疫病术：使受术者感染所指定之疫病。
      弱能术：受术者获得1d4负向等级。
      恐惧术：使锥形范围内的目标群逃窜，持续时间为每等级1轮。
变化  集体变巨术：使数个生物变大。
      变形术：给予一个有意愿的受术者新的外型。
      拉瑞强记法 ：准备额外的法术，或保留前一次使用的法术。只有法师能使用。
      集体缩小术：使数个生物缩小。
      塑石术：将石头雕塑成任何形状。

中文  123123123：adfasfdaafd。
防护  破除结界：破除受术者所带有的附加魔法、诅咒、石化，或解除其变化。
      驱逐术：强迫生物回到原属界域。
      魔邓肯密室：防止任何人窥看或探知某区域，持续时间24小时。
咒法  死云术：杀害生命骰数3以下生物，生命骰数4到6若没通过豁免检定则死亡，生命骰数大于6的生物会受到体质伤害。
      李欧蒙秘藏箱 ：将贵重宝箱藏于灵界，在需要时可任意取用。
      高等造物术：与「次级造物术」同，但可创造石头与金属。
      魔邓肯忠犬：出现魅影狗，可守卫，亦可攻击。
      次级异界誓缚：困住6HD以下异界生物，直至它完成工作为止。
      五级召唤怪物术：可召唤外界生物为你作战。
      传送术：立刻将你传送至任何地方，最远为每等级100哩。
      石墙术：制造一面石墙，形状可自订。
预言  异界探知 ：向异界个体询问问题。
预言  窥视魔眼：造出数量为「1d4+施法者等级」只飘浮魔眼为你进行侦察。
预言  拉瑞心灵连线：使友伴间可使用心灵沟通。
附魔  支配人类：使用心灵控制人形生物。
      弱智术：使受术者的智力值与魅力值降至1。
      怪物定身术：与「人类定身术」同，但可指定任意生物。
      心灵迷雾：雾中的受术者睿智值与意志检定-10。
      睡眠徽记 ：符文被触发后会让邻近生物沉睡。
塑能  毕格比护身掌：出现魔手，针对单一对手提供掩蔽效果。
      寒冰锥：每等级造成1d6点寒冷伤害。
      短讯术：将简讯立刻传至任何地方。
      力墙术：产生不会受伤的墙。
幻术  托梦法：将讯息送至任何正在睡眠中的人。
      防范探知 ：利用幻象使探知法术误判。
      海市蜃楼：与「幻景」同，只是包含建筑物。
      梦魇：送出虚像，可造成1d10点伤害，并使对象疲乏。
      常驻幻影：与「高等幻影」同，但不需集中精神。
      伪相：改变人的外貌，每2等级可改变一个人。
      幽影塑能术：假拟低于五级的塑能系法术，但只有20%的真实性。
死灵  枯朽术：使一株植物枯萎，或对植物型生物造成每等级1d6点伤害。
      魔魂壶 ：可以附身到另一生物。
      痛苦徽记 ：符文被触发后会让邻近生物痛苦。
      疲乏波：让数个目标疲乏。
变化  异变动物：每2等级可使一个生物变成两倍大。
      化戾变形：使受术者变成无害动物。
      鬼斧神工：使原始材料变为成品。
      洲际飞行：以速度40呎飞行，且可飞越长距离。
      穿墙术：在木或石墙上造出通路。
      心灵遥控：举起物体、攻击生物、投掷物体或攻击。  
      化泥为石：每等级可转换两个各边长10呎的立方体。
      化石为泥：每等级可转换两个各边长10呎的立方体。
共通  魔法恒定术 ：可使法术永久有效。

中文  123123123：adfasfdaafd。
防护  防魔法力场：抵销10呎内的法术。
      高等解除魔法：与「解除魔法」同，但检定+20。
      法术无效结界：与「次级法术无效结界」同，但可至四级法术。
      铜墙铁壁：一系列防护性法术与魔法效果。
      防生物力场：生物无法接近你。
咒法  酸雾术：产生会造成强酸伤害的浓雾。
      异界誓缚：与「次级异界誓缚」同，但最高可至12HD。
      六级召唤怪物术：可召唤外界生物为你作战。
      铁墙术 ：生命值为每4等级30点，可压在对手身上。
预言  解析咒文 ：发现受术者的魔法形态。
预言  通晓传奇 ：得知一个人、地方或事物的相关传说。
预言   真实目光 ：见到所有事物的原本面貌。
附魔  指使术：与「次级指使术」同，但可以影响所有生物。
      高等英勇术：攻击检定、豁免检定与技能检定+4，对恐惧免疫，获得暂时生命值。 
      集体暗示：与「暗示」同，但可影响的生物个数与等级同。
      说服徽记 ：符文被触发后会魅惑邻近生物。
塑能  毕格比飞击掌：出现巨大的魔手推开生物。
      连环闪电：每等级可造成1d6点伤害，每等级可另发出一束闪电，造成半数伤害。
      触发术 ：设定另一法术的触发条件。
      欧提路克冰封法球：将水结冻，并造成寒冷伤害。
幻术  假象术：使你隐形，并产生分身幻象。
      永恒幻影：与「无声幻影」同，但可以有视力、声音与气味。
      预置幻影 ：与「高等幻影」同，但是由事件触发而产生。
      行影术：步入阴影中，以进行快速移动。
      迷罩：改变一群生物的外貌。
死灵  死亡法阵 ：每等级杀害生命骰数和为1d4的生物。
      唤起死灵 ：制造食尸鬼、妖鬼、木乃伊或魔魂尸。
      慑心目光：使受术者慌乱、生病或假死。
      恐惧徽记 ：符文被触发后会让邻近生物慌乱。
      不死之死 ：每等级可消灭生命骰数和为1d4的不死生物，最高20d4。
变化  集体坚韧术：与「坚韧术」同，但可影响的生物个数与等级同。
      集体蛮力术：与「蛮力术」同，但可影响的生物个数与等级同。
      集体轻灵术：与「轻灵术」同，但可影响的生物个数与等级同。
      操控水位：使水位上升或下降。
      解离术：使一个生物或目标物品消失。
      集体耀眼术：与「耀眼术」同，但可影响的生物个数与等级同。
      石化术：使受术者成为石像。
      集体巧智术：与「巧智术」同，但可影响的生物个数与等级同。      
      魔邓肯回忆术：回想起五级或以下的法术。只有法师能使用。
      地动术：挖出沟渠或造出山丘。
      集体博识术：与「博识术」同，但可影响的生物个数与等级同。
      解除石化：将被石化的生物变回来。
      谭森变形术 ：获得战斗加值。

中文  123123123：adfasfdaafd。
防护  放逐术：每等级可放逐2HD的外界生物。
      隔离术：受术者由视野中隐形，也无法被探知，但呈假死状态。
      法术反转：将1d4+6法术等级的法术反弹回施法者。
咒法  卓姆吉瞬间召唤 ：已预备好的物品出现在你手中。
      魔邓肯豪宅 ：出现门，可通往异次元的房子。
      相位门：可经由隐形的路径穿过木头或石头。
      异界传送 ：最高可使八个对象移动至另一异界。
      七级召唤怪物术：可召唤外界生物为你作战。
      高等传送术：与「传送术」同，但到达地点没有误差。
      物体传送术：与「传送术」同，但只能传送触碰到的物体。
预言  高等秘眼通：与「秘眼通」同，但同时可看见生物或物品上的魔法效果。
预言  高等探知 ：与「探知」同，但更快更久。
预言  灵视 ：与「通晓传奇」同，但更快更费力。
附魔  集体人类定身术：于「人类定身术」同，但范围为30呎内所有人。
      夺魄术：目标生物会受到持续性的「困惑术」攻击。
      律令目盲：使生命值低于200点的生物目盲。
      震慑徽记 ：符文被触发后会让邻近生物震慑。
塑能  毕格比擒拿掌：出现用来掩护、推动或进行擒拿的魔手。
      延迟爆裂火球：每等级造成1d6点火焰伤害，你可以将炸裂时间延后五轮。
      魔力监牢 ：力场形成立方体，将一切困于其中。
      魔邓肯之剑 ：造出飘浮的魔法剑攻击对手。
      虹光喷射：射线击中对手，可以造成多种魔法效果。
幻术  集体隐形：与「隐形」同，但可影响范围内所有人。
      投影术：幻象分身可以走动和施法。
      高等幽影咒法术：与「幽影咒法」同，但最高可以到六级法术，并有60%的真实性。
      拟象   ：造出生物的分身幻象，但有部份是真实的。
死灵  操控死灵：不死生物不会攻击你，并听从你号令。
      死亡一指：杀害一个受术者。
      虚弱徽记 ：符文被触发后会让邻近生物虚弱。
      衰竭波：让数个目标力竭。
变化  操控天气：可以改变当地的气候。
      幻化灵体：你变成灵体生物，持续时间每等级1轮。
      反重力：目标物品或生物会向上坠落。
      雕像术：自愿的受术者化为雕像。
共通  有限愿望 ：在法术的限制下改变现实状态。

中文  123123123：adfasfdaafd。
防护  次元锁：每等级可阻挡1天传送与界域旅行。
      心灵屏障：受术者可对心灵性、情绪性与探知法术免疫，
      虹光法墙：法墙的光可造成多种魔法效果。
      防护法术效果 ：施与受术者+8的抗力加值。
咒法  焚云术：燃烧的云每轮可造成4d6点伤害。
      迷宫术：将受术者困于异次元迷宫。
      高等异界誓缚：与「次级异界誓缚」同，但最高可至18HD。
      八级召唤怪物术：可召唤外界生物为你作战。
      锢魂术 ：将受术者囚于宝石内。
预言  感知位置：得知目标生物或物品的确实位置。
预言  灵光乍现：单次攻击检定、豁免检定或技能检定获得洞察加值。
预言  高等窥视魔眼：与「窥视魔眼」同，但魔眼具有「真实目光」。
附魔  嫌恶术：受法术影响的地域或目标物品会自动排斥某些生物。
      束缚大法 ：利用一系列技巧来禁锢生物。
      集体魅惑怪物：与「魅惑怪物」同，但范围为30呎。
      短讯暗示：与「短讯术」同，但可送出法术「暗示」。
      奥图迷舞：强迫受术者跳舞。
      律令震慑：震慑生命值低于150点的生物。
      夺魄徽记 ：符文被触发后会让邻近生物疯狂。
      共鸣术 ：受法术影响的地域或目标物品会吸引某些生物。
塑能  毕格比金刚拳：出现用来掩护、推动或进行攻击的魔手。
      欧提路克灵动法球：与「欧提路克魔封法球」同，但你可用心灵遥控移动法球。
      极光射线：远程触碰攻击，可造成每等级1d6点寒冷伤害。
      高等咆哮术：发出可造成10d6点音波伤害的惊人吼声，可震慑生物并对物体造成伤害。
      阳炎爆：10呎内生物目盲，并造成6d6点伤害。
幻术  闪耀图纹：发出眩目诡丽的色彩，使人困惑、震慑或昏迷。
      障幕：利用幻象让一个地区无法被见到或法术探知。
      高等幽影塑能术：与「幽影塑能术」同，但最高可以到七级法术，真实性60%。
死灵  复制后备 ：当生物原身死亡时，复制体即会复苏。
      唤起高等死灵 ：制造幽影、缚灵、幽灵与囚魂尸。
      雕死术：范围30呎内，每等级可造成1d6点伤害。
      死亡徽记 ：符文被触发后会让邻近生物死亡。
变化  铜筋铁骨：身体变成活动的铁块。
      变形万物：将任何目标物品变成任意物体。
      永恒静滞 ：使受术者活动暂停。

中文  123123123：adfasfdaafd。
防护  解锢术：将生物从「禁锢术」中解放出来。
      禁锢术：将受术者埋住。
      魔邓肯裂解术：解除魔法，将物品上的附加魔法消除。
      虹光法球：与「虹光法墙」同，但是四周都环绕住。
咒法  异界之门 ：连接两个异界，以供召唤或旅行。
      脱身大法 ：让物品的持有者被传送到你的所在地。
      九级召唤怪物术：可召唤外界生物为你作战。
      传送法阵 ：将圆阵中所有生物传送至指定地点。
预言  预警术：对将要发生的危险产生第六感警告。
附魔  支配怪物：与「支配人类」同，但可使用于任何生物。
      集体怪物定身术：与「怪物定身术」同，但范围为30呎内所有怪物。
      律令死亡：杀害生命值低于100点的生物。
塑能  毕格比粉碎掌：出现用来掩护、推动或进行碾压的魔手。
      流星爆：制造出4个会造成6d6点火焰伤害的爆炸火球。
幻术  阴魂咒法术：与「幽影咒法术」同，但最高可以到八级法术，并有80%的真实性。
      怪影杀手：与「魅影杀手」同，但影响30呎范围内所有事物。
死灵  星界投射 ：将你及伙伴投射入星界。
      吸能术：受术者获得2d4负向等级。
      缚魂术 ：囚锢刚死的灵魂，使它不受「复生术」作用。
      女妖之嚎：每等级可杀害一个生物。  
变化  同游灵界：与同伴一起旅行至灵界。
      形体变化 ：可变成任何生物，每轮并可更换一次。
      时间停止：在1d4+1轮中自由行动。
共通  愿望术 ：如同「有限愿望」，但限制较少。



