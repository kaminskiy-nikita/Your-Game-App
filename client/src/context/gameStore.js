import { v4 as uuidv4 } from 'uuid';

export const gameStore = [
	{
		id: uuidv4(),
		topic: 'Тигры',
		questions: [
			{
				title: 'Сколько было "Тигров" на 0 фазе? ',
				answer: '13',
				id: uuidv4(),
				isAnswered: false,
				points: 200
			},
			{
				title: 'Кто из зверей охотится на тигров? ',
				answer: 'Никто',
				id: uuidv4(),
				isAnswered: false,
				points: 400
			},
			{
				title: 'Тигр больше чем',
				answer: 'Лев',
				id: uuidv4(),
				isAnswered: false,
				points: 600
			},
			{
				title: 'Из чьего мяса делается традиционное китайское блюдо "битва тигра и дракона"?',
				answer: 'Кошка и змея',
				id: uuidv4(),
				isAnswered: false,
				points: 300
			},
			{
				title: 'Сколько выпустится "Тигров" ',
				answer: '10',
				id: uuidv4(),
				isAnswered: false,
				points: 1000
			},
		]
	},

	{
		id: uuidv4(),
		topic: 'Цифры',
		questions: [
			{
				title: '200',
				answer: 'Труп',
				id: uuidv4(),
				isAnswered: false,
				points: 200
			},
			{
				title: '400',
				answer: 'Bad Request ',
				id: uuidv4(),
				isAnswered: false,
				points: 400
			},
			{
				title: '600',
				answer: 'Мерседес',
				id: uuidv4(),
				isAnswered: false,
				points: 600
			},
			{
				title: '300',
				answer: 'Отсоси у тракториста',
				id: uuidv4(),
				isAnswered: false,
				points: 300
			},
			{
				title: '1000',
				answer: 'Ярославль',
				id: uuidv4(),
				isAnswered: false,
				points: 1000
			},
		]
	},

	{
		id: uuidv4(),
		topic: 'LGBTQQICAPF2K+',
		questions: [
			{
				title: 'LGBT',
				answer: 'Лесбиянка, гей, бисексуал, трансгендер',
				id: uuidv4(),
				isAnswered: false,
				points: 200
			},
			{
				title: 'QQIC',
				answer: 'Квир, вопрошающий (неопределившийся), интерсексуал, любопытствующий ',
				id: uuidv4(),
				isAnswered: false,
				points: 400
			},
			{
				title: 'AAAPP',
				answer: 'Асексуал, агендер, союзник гетеросексуал (поддерживающий ЛГБТ), пансексуал, полисексуал',
				id: uuidv4(),
				isAnswered: false,
				points: 600
			},
			{
				title: 'F2K+',
				answer: 'Друзья и семья, бердаши (третий пол у индейцев), фетиш (парафилия) и т.д.',
				id: uuidv4(),
				isAnswered: false,
				points: 300
			},
			{
				title: 'LGBTQQICAPF2K+',
				answer: 'Ребята не стоит вскрывать эту тему. Вы молодые, шутливые, вам все легко. Это не то...',
				id: uuidv4(),
				isAnswered: false,
				points: 1000
			},
		]
	},
	{
		id: uuidv4(),
		topic: 'Группа "Альфа"',
		questions: [
			{
				title: 'Лучший пистолет это',
				answer: 'автомат',
				id: uuidv4(),
				isAnswered: false,
				points: 200
			},
			{
				title: 'Не нужно быстро разбирать оружие, нужно быстро',
				answer: 'стрелять',
				id: uuidv4(),
				isAnswered: false,
				points: 400
			},
			{
				title: 'В рукопашной схватке побеждает у кого больше',
				answer: 'патронов',
				id: uuidv4(),
				isAnswered: false,
				points: 600
			},
			{
				title: 'Если хулигану на дистанции 100 метров одновременно попасть в одно колено пулей 5,45 мм, а в другое 7,62 мм, заметит ли он разницу?',
				answer: 'нет',
				id: uuidv4(),
				isAnswered: false,
				points: 300
			},
			{
				title: 'Ночь. Дистанция 15 метров. Цель - голова террориста. Заложник - ваш ребенок.',
				answer: 'смогу',
				id: uuidv4(),
				isAnswered: false,
				points: 1000
			},
		]
	},

	{
		id: uuidv4(),
		topic: 'АУЕ',
		questions: [
			{
				title: 'Дают в руки веник и говорят: "Сыграй на гитаре что-нибудь". Что будешь делать?',
				answer: 'Настрой сначала',
				id: uuidv4(),
				isAnswered: false,
				points: 200
			},
			{
				title: 'Летишь на парашюте, справа - лес херов, слева - море говна. Куда будешь садиться?',
				answer: 'В каждом лесу есть поляна, а в каждом море - островок',
				id: uuidv4(),
				isAnswered: false,
				points: 400
			},
			{
				title: 'Разбивают бутылку и говорят: «Зашей». Что будешь делать?',
				answer: 'Выверни наизнанку',
				id: uuidv4(),
				isAnswered: false,
				points: 600
			},
			{
				title: 'Упал в яму. В яме пирожок и хер. Что съешь, что в зад засунешь?',
				answer: 'Возьму пирожок и вылезу из ямы',
				id: uuidv4(),
				isAnswered: false,
				points: 300
			},
			{
				title: 'Едешь в поезде, прикованный к рычагам, ими можно повернуть или влево, или вправо. Впереди развилка — справа мать к столбу привязана, слева десять кентов. Куда свернешь, кого задавишь?',
				answer: 'Сегодня кенты, а завтра менты',
				id: uuidv4(),
				isAnswered: false,
				points: 1000
			},
		]
	},

	{
		id: uuidv4(),
		topic: 'Анекдоты',
		questions: [
			{
				title: 'Почему с кассиршами не стоит драться?',
				answer: 'Даст сдачи',
				id: uuidv4(),
				isAnswered: false,
				points: 200
			},
			{
				title: 'Что почувствует Волан Де Морт, когда подожжёт Поттера?',
				answer: 'Запах гарри',
				id: uuidv4(),
				isAnswered: false,
				points: 400
			},
			{
				title: 'Китайский мужчина должен сделать три вещи за свою жизнь:',
				answer: 'Abibas, Like и Reembok',
				id: uuidv4(),
				isAnswered: false,
				points: 600
			},
			{
				title: '"Контрацептив" на немецком',
				answer: 'Schwangerschaftsverhutungsmittel',
				id: uuidv4(),
				isAnswered: false,
				points: 300
			},
			{
				title: '— Милый, по пятницам я добрая. — Но сегодня же вторник.',
				answer: '— Вот именно, тупой ублюдок, вали в свой санаторий Сатаны!',
				id: uuidv4(),
				isAnswered: false,
				points: 1000
			},
		]
	},

]
