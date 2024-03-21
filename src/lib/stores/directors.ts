export type Director = {
	id: number;
	name: string;
	image?: string;
	movies: string[];
};

const directors: Director[] = [
	{
		id: 1,
		name: 'James Cameron',
		image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/James_Cameron_by_Gage_Skidmore.jpg',
		movies: ['Aliens', 'Avatar', 'Titanic']
	},
	{
		id: 2,
		name: 'Christopher Nolan',
		image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Christopher_Nolan_Cannes_2018.jpg',
		movies: ['Oppenheimer', 'Inception', 'The Dark Knight']
	},
	{
		id: 3,
		name: 'Steven Spielberg',
		image:
			'https://m.media-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_.jpg',
		movies: ['Jaws', 'Jurassic Park', "Schindler's List"]
	},
	{
		id: 4,
		name: 'Ingmar Bergman',
		image:
			'https://m.media-amazon.com/images/M/MV5BMTc4MjQwMzY0N15BMl5BanBnXkFtZTcwNTI1NTM1MQ@@._V1_.jpg',
		movies: ['Fanny And Alexander', 'Persona', 'The Seventh Seal']
	},
	{
		id: 5,
		name: 'Stanley Kubrick',
		image: 'https://hips.hearstapps.com/hmg-prod/images/stanley-kubrick-9369672-1-402.jpg',
		movies: ['2001: A Space Odyssey', 'A Clockwork Orange', 'The Shining']
	},
	{
		id: 6,
		name: 'Martin Scorsese',
		image:
			'https://static01.nyt.com/images/2020/01/05/arts/05martin-scorsese3/05martin-scorsese3-videoSixteenByNineJumbo1600.jpg',
		movies: ['Goodfellas', 'Raging Bull', 'Taxi Driver']
	},
	{
		id: 7,
		name: 'The Russo Brothers',
		image:
			'https://media1.clevescene.com/clevescene/imager/u/original/31167556/grlor71w-450x626.jpeg',
		movies: ['Avengers: Endgame', 'Avengers: Infinity War', 'Captain America: The Winter Soldier']
	},
	{
		id: 8,
		name: 'Quentin Tarantino',
		image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg',
		movies: ['Pulp Fiction', 'Reservoir Dogs', 'Kill Bill']
	},
	{
		id: 9,
		name: 'Apitchatpong Weerasethakul',
		image:
			'https://cdn.britannica.com/75/223175-050-BE657121/Thai-film-director-Apichatpong-Weerasethakul-2018.jpg',
		movies: ['Uncle Boonmee Who Can Recall His Past Lives', 'Tropical Malady', 'Memoria']
	},
	{
		id: 10,
		name: 'Alfred Hitchcock',
		image: 'https://images.mubicdn.net/images/cast_member/1163/cache-3-1337541407/image-w856.jpg',
		movies: ['Psycho', 'Rear Window', 'Vertigo']
	},
	{
		id: 11,
		name: 'David Lynch',
		image: 'https://resizing.flixster.com/kNzUx8h2UHjHxAw4ETT9qwdEC1k=/300x300/v2/http://media.baselineresearch.com/images/198693/198693_full.jpg',
		movies: ['Mulholland Drive', 'Blue Velvet', 'Eraserhead']
	},
	{
		id: 12,
		name: 'Ridley Scott',
		image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1575_v9_bb.jpg',
		movies: ['Blade Runner', 'Alien', 'The Martian']
	},
	{
		id: 13,
		name: 'David Fincher',
		image: 'https://m.media-amazon.com/images/M/MV5BMTc1NDkwMTQ2MF5BMl5BanBnXkFtZTcwMzY0ODkyMg@@._V1_.jpg',
		movies: ['Fight Club', 'Seven', 'The Social Network']
	},
	{
		id: 14,
		name: 'Spike Lee',
		image: 'https://cdn.britannica.com/04/113304-050-F9162580/Spike-Lee-2007.jpg', 
		movies: ['Do the Right Thing', 'BlacKkKlansman', 'Malcolm X']
	},
	{
		id: 15,
		name: 'Francis Ford Coppola',
		image: 'https://faroutmagazine.co.uk/static/uploads/1/2023/04/Francis-Ford-Coppola-Director.jpg',
		movies: ['The Godfather', 'Apocalypse Now', 'The Conversation']
	},
	{
		id: 16,
		name: 'Guillermo del Toro',
		image: 'https://cdn.britannica.com/49/198849-050-CA5613DE/Guillermo-del-Toro-2017.jpg',
		movies: ['Pan\'s Labyrinth', 'The Shape of Water', 'Crimson Peak']
	},
	{
		id: 17,
		name: 'Ang Lee',
		image: 'https://static.wikia.nocookie.net/oscars/images/c/c3/AngLee2.jpg',
		movies: ['Crouching Tiger, Hidden Dragon', 'Brokeback Mountain', 'Hulk']
	},
	{
		id: 18,
		name: 'Bong Joon-ho',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bong_Joon-ho_2017.jpg/1200px-Bong_Joon-ho_2017.jpg',
		movies: ['Parasite', 'Snowpiercer', 'Memories of Murder']
	},
	{
		id: 19,
		name: 'Park Chan-wook',
		image: 'https://m.media-amazon.com/images/M/MV5BMTgyODk3MTU5OV5BMl5BanBnXkFtZTcwMTc3NjcyMQ@@._V1_.jpg',
		movies: ['Oldboy', 'The Handmaiden', 'Decision to Leave']
	},
	{
		id: 20,
		name: 'Paul Thomas Anderson',
		image: 'https://media.gq.com/photos/5a383d755f1f364364dd40f9/1:1/w_2000,h_2000,c_limit/P.T.%20Anderson-01.jpg',
		movies: ['There will be Blood', 'Boogie Nights', 'Phantom Thread']
	},
	{
		id: 21,
		name: 'Wes Andeson',
		image: 'https://hips.hearstapps.com/hmg-prod/images/wes-anderson-20617561-1-402.jpg',
		movies: ['The Grand Budapest Hotel', 'Fantastic Mr Fox', 'Asteroid City']
	},
	{
		id: 22,
		name: 'J.J. Abrams',
		image: 'https://www.onthisday.com/images/people/j-j-abrams.jpg?w=360',
		movies: ['Star Wars: The Force Awakens', 'Star Trek', 'Mission Impossible III']
	},
	{
		id: 23,
		name: 'Peter Jackson',
		movies: ['The Lord of the Rings', 'The Hobbit', 'King Kong']
	},
	{
		id: 24,
		name: 'George Lucas',
		movies: ['Star Wars', 'American Graffiti', 'THX 1138']
	}
];

export const Directors: Map<number, Director> = new Map(
	directors.map((dir) => [dir.id, dir])
);
