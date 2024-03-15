export type Director = {
	name: string;
	title: string;
	description?: string;
	image?: string;
	movies?: Movie[]; 
	others?: string[];
};

export type Movie = {
	title: string;
	image: string;
};

export const directors: Map<number, Director> = new Map([
	[0, { name: '', title: 'Click a circle to start' }],
	[
		1,
		{
			name: 'James Cameron',
			title: 'The Blockbuster',
			description: 'James Francis Cameron is a Canadian film director, producer, and screenwriter.',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/f/fe/James_Cameron_by_Gage_Skidmore.jpg',
			movies: [
				{
					title: 'Aliens',
					image: 'https://image.tmdb.org/t/p/original//r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg'
				},
				{
					title: 'Avatar',
					image: 'https://image.tmdb.org/t/p/original//kyeqWdyUXW608qlYkRqosgbbJyK.jpg'
				},
				{
					title: 'Titanic',
					image: 'https://image.tmdb.org/t/p/original//9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg'
				}
			]
		}
	],
	[
		2,
		{
			name: 'Christopher Nolan',
			title: 'The Innovator',
			description:
				'Christopher Edward Nolan is a British-American film director, producer, and screenwriter.',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/9/95/Christopher_Nolan_Cannes_2018.jpg',
			movies: [
				{
					title: 'Oppenheimer',
					image: 'https://image.tmdb.org/t/p/original//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
				},
				{
					title: 'Inception',
					image: 'https://image.tmdb.org/t/p/original//edv5CZvWj09upOsy2Y6IwDhK8bt.jpg'
				},
				{
					title: 'The Dark Knight',
					image: 'https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg'
				}
			]
		}
	],
	[
		3,
		{
			name: 'Steven Spielberg',
			title: 'The Jack-of-All-Trades',
			description:
				'Steven Allan Spielberg is an American film director, producer, and screenwriter.',
			image:
				'https://m.media-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_.jpg',
			movies: [
				{
					title: 'Jaws',
					image: 'https://image.tmdb.org/t/p/original//lxM6kqilAdpdhqUl2biYp5frUxE.jpg'
				},
				{
					title: 'Jurassic Park',
					image: 'https://image.tmdb.org/t/p/original//oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg'
				},
				{
					title: "Schindler's List",
					image: 'https://image.tmdb.org/t/p/original//sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg'
				}
			]
		}
	],
	[
		4,
		{
			name: 'Ingmar Bergman',
			title: 'The Artist',
			description: 'Ingmar Bergman was a Swedish film director, producer, and screenwriter.',
			image:
				'https://m.media-amazon.com/images/M/MV5BMTc4MjQwMzY0N15BMl5BanBnXkFtZTcwNTI1NTM1MQ@@._V1_.jpg',
			movies: [
				{
					title: 'Fanny And Alexander',
					image: 'https://image.tmdb.org/t/p/original//q8jlA3Wc1Z987hNKRFA44g5OugC.jpg'
				},
				{
					title: 'Persona',
					image: 'https://image.tmdb.org/t/p/original//cl0HEZT8UfzLqaMrYTvGNHOfPYj.jpg'
				},
				{
					title: 'The Seventh Seal',
					image:
						'https://posters.movieposterdb.com/13_09/1957/50976/l_50976_440167ab.jpg'
				}
			],
			others: ['Apichatpong Weerasethakul', 'Michael Haneke']
		}
	],
	[
		5,
		{
			name: 'Stanley Kubrick',
			title: 'The Visionary',
			description: 'Stanley Kubrick was an American film director, producer, and screenwriter.',
			image: 'https://hips.hearstapps.com/hmg-prod/images/stanley-kubrick-9369672-1-402.jpg',
			movies: [
				{
					title: '2001: A Space Odyssey',
					image: 'https://image.tmdb.org/t/p/original//ve72VxNqjGM69Uky4WTo2bK6rfq.jpg'
				},
				{
					title: 'A Clockwork Orange',
					image: 'https://image.tmdb.org/t/p/original//4sHeTAp65WrSSuc05nRBKddhBxO.jpg'
				},
				{
					title: 'The Shining',
					image: 'https://image.tmdb.org/t/p/original//nRj5511mZdTl4saWEPoj9QroTIu.jpg'
				}
			]
		}
	],
	[
		6,
		{
			name: 'Martin Scorsese',
			title: 'The Connoisseur',
			description: 'Martin Scorsese is an American film director, producer, and screenwriter.',
			image:
				'https://static01.nyt.com/images/2020/01/05/arts/05martin-scorsese3/05martin-scorsese3-videoSixteenByNineJumbo1600.jpg',
			movies: [
				{
					title: 'Goodfellas',
					image: 'https://image.tmdb.org/t/p/original//aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg'
				},
				{
					title: 'Taxi Driver',
					image: 'https://image.tmdb.org/t/p/original//ekstpH614fwDX8DUln1a2Opz0N8.jpg'
				},
				{
					title: 'The Wolf of Wall Street',
					image: 'https://image.tmdb.org/t/p/original//34m2tygAYBGqA9MXKhRDtzYd4MR.jpg'
				}
			]
		}
	],
	[
		7,
		{
			name: 'Quentin Tarantino',
			title: 'The Enthusiast',
			description: 'Quentin Tarantino is an American film director, producer, and screenwriter.',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg',
			movies: [
				{
					title: 'Pulp Fiction',
					image: 'https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
				},
				{
					title: 'Inglourious Basterds',
					image: 'https://image.tmdb.org/t/p/original//7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg'
				},
				{
					title: 'Django Unchained',
					image: 'https://image.tmdb.org/t/p/original//7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg'
				}
			]
		}
	]
]);
