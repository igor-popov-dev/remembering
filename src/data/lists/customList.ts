const defaultQuestions = [
	'Вы можете вспомнить случай, когда:',
	'Вы можете вспомнить <span>другой</span> случай, когда:',
	'Вспомните <span>самый ранний случай который только можете</span>, когда:'
];

export const customLists = [
	{
		id: 1,
		theme: 'Общие случаи',
		questions: defaultQuestions,
		phrases: [
			'Вы были по-настоящему счастливы.',
			'Вы только что закончили собирать или строить что-то.',
			'Жизнь казалась вам радостной и легкой.',
			'Кто-то сделал вам приятный подарок.',
			'Вы попробовали что-то вкусное.',
			'У вас был хороший друг рядом.',
			'Вы чувствовали прилив энергии.',
			'Кто-то ждал вас с нетерпением.',
			'Вы мчались на высокой скорости.',
			'Вы увидели что-то красивое, что вас вдохновило.',
			'Вы приобрели что-то, что вам очень понравилось.',
			'Вы избавились от чего-то ненужного.',
			'Вы поцеловали человека, который вам нравится.',
			'Вы от души смеялись над шуткой.',
			'Вы получили деньги или материальную награду.',
			'Вы чувствовали себя молодым и полным сил.',
			'Жизнь доставляла вам удовольствие.',
			'Вы играли в интересную игру.',
			'Вы одержали победу над сложной ситуацией.',
			'Вы стали владельцем домашнего животного.',
			'Кто-то показал, что вы для него важны.',
			'Вы справились с чем-то неприятным.',
			'Вы были полны энтузиазма и вдохновения.',
			'Вы наслаждались тем, что у вас есть.',
			'Вы просто радовались жизни.',
			'Вы шли с бодрым шагом.',
			'Вы позволили себе отдохнуть и расслабиться.',
			'Вы чувствовали себя сильным и уверенным.',
			'Человек, который вам не нравился, исчез из вашей жизни.',
			'Кто-то протянул вам руку помощи.',
			'Вы получили что-то полезное или желанное.',
			'Вы измерили или оценили что-то важное.',
			'Вы отправились в увлекательное путешествие.',
			'Вы зажгли свет в комнате.',
			'Вы услышали музыку, которая тронула ваше сердце.',
			'Вы управляли чем-то с уверенностью.',
			'Вы разрушили что-то ненужное или мешающее.',
			'Вы научились чему-то новому.',
			'Вам неожиданно повезло.',
			'Вы почувствовали покой и умиротворение.',
			'Перед вами открылся захватывающий вид.',
			'Вы наливали себе напиток, который доставил удовольствие.',
			'Вы нашли или приобрели что-то редкое и ценное.',
			'Вы ощутили, что ваш противник сдался.',
			'Вы сидели в очень удобном месте.',
			'Вы сделали что-то своими руками и гордились этим.',
			'Вы переместили что-то и облегчились.',
			'Вы наблюдали за чем-то стремительно движущимся.',
			'Вы проводили время с друзьями.',
			'Вы заняли место, которое вам понравилось.',
			'Вы ощущали любовь со стороны кого-то.',
			'Вы наслаждались временем, проведенным с близким человеком.',
			'Вы придумали что-то новое и полезное.',
			'Вы научились управлять энергией или механизмом.',
			'Вы избавились от надоедливого насекомого.',
			'Вы положили что-то ценное в карман.',
			'Вы сделали шаг вперед в чем-то важном.',
			'Вы совершили приятную прогулку.',
			'Вы смогли что-то сохранить или сберечь.',
			'Вы остановили машину.',
			'Вы запустили какой-то механизм.',
			'Вы хорошо выспались и чувствовали себя отдохнувшим.',
			'Вы предотвратили кражу.',
			'Вы стояли под чем-то, что защищало вас.',
			'Вы развели огонь.',
			'Вы поднимались по лестнице к своей цели.',
			'Вы чувствовали тепло и уют.',
			'Вы ездили верхом.',
			'Вы нашли креативное решение задачи.',
			'Вы плавали в воде и наслаждались этим.',
			'Вы отстояли свою точку зрения.',
			'Ваша жизнь шла своим чередом и приносила радость.',
			'Вы чувствовали уважение к себе.',
			'Вы победили в соревновании или достигли цели.',
			'Вы вкусно поели и наслаждались этим.'
		]
	},
	{
		id: 2,
		theme: 'Ориентация во времени №1',
		questions: [
			'Вы можете вспомнить случай, который произошёл:',
			'Вы можете вспомнить другой случай, который произошёл:',
			'Вспомните самый ранний случай который только можешь, который произошёл:'
		],
		phrases: [
			'давно — можете уточнить год, месяц, число или даже час?',
			'вчера — помните ли вы точное время или дату?',
			'в прошлом месяце — какое было положение солнца в тот момент?',
			'когда вы были совсем маленьким — что носили люди или какое было время суток?',
			'когда ваш рост был вдвое меньше, чем сейчас — как выглядели окружающие?',
			'когда ваш вес был в три раза меньше, чем сейчас — какое было положение солнца?',
			'когда ваша мама выглядела моложе — что она носила, какое было время дня?',
			'когда вы чувствовали себя особенно энергичным — помните ли вы год или час?',
			'в прошлый Новый год — какая была часть дня?',
			'на Новый год, когда вам было пять лет — что носили окружающие?',
			'в ваш восьмой день рождения — какая была обстановка, какая мебель вас окружала?',
			'в один из ваших дней рождений — как выглядели гости, какой был год или положение солнца?',
			'в этот день в прошлом году — какой был дом, где вы жили, или время года?',
			'сегодня в полдень — что происходило вокруг?',
			'на каком-то банкете — как были одеты люди?',
			'на свадьбе — какой был год или время года?',
			'на праздновании рождения ребенка — какая была погода или время года?',
			'на свидании — как выглядела ваша прическа или одежда?',
			'с часами — можете вспомнить положение солнца?',
			'с наручными часами — помните ли вы движение секундной стрелки?',
			'с животным, которое тогда было моложе — что вы делали вместе?'
		]
	}
];