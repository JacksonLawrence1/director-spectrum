export type Point = {
	title: string;
	description: string;
	directors: number[];
};

export const Points: Map<number, Point> = new Map([
	[
		0,
		{
			title: 'Click a circle to begin',
			description:
				'This is a spectrum of film directors. Each circle represents a different type of director. Click a circle to see where some of your favorite directors fall on the spectrum.',
			directors: []
		}
	],
	[
		1,
		{
			title: 'The Artist',
			description:
				'Known for their unique artistic vision and distinctive style. They are often associated with surrealism, symbolism, and visual storytelling.',
			directors: [4, 11, 28, 21] // ingmar bergman, andrei tarkovsky, wes anderson
		}
	],
	[
		2,
		{
			title: 'The Connoisseur',
			description:
				'Known for their meticulous attention to detail and craftsmanship. They are often associated with period pieces, historical dramas, and character studies.',
			directors: [6, 10, 20, 35] // martin scorcese
		}
	],
	[
		3,
		{
			title: 'The Enthusiast',
			description:
				'Known for their passion for film and their love of the medium. They are often associated with genre films, cult classics, and B-movies.',
			directors: [8, 13, 34, 32] // quentin tarantino
		}
	],
	[
		4,
		{
			title: 'The Jack-of-All-Trades',
			description: 'Known for their versatility and ability to work in a variety of genres.',
			directors: [30, 16, 3, 18] // steven spielberg, guillermo del toro, alfonso cuaron
		}
	],
	[
		5,
		{
			title: 'The Visionary',
			description:
				'Known for their bold and ambitious filmmaking. They are often associated with epic storytelling, grand themes, and technical mastery.',
			directors: [5, 12, 15, 23] // stanley kubrick
		}
	],
	[
		6,
		{
			title: 'The Innovator',
			description:
				'Known for their groundbreaking work in film. They are often associated with complex narratives, non-linear storytelling, and unique visual styles.',
			directors: [2, 33, 19, 27] // christopher nolan
		}
	],
	[
		7,
		{
			title: 'The Blockbuster',
			description:
				'Known for their big-budget, high-grossing films. They are often associated with action, adventure, and breathtaking world-building.',
			directors: [1, 7, 22, 26] // James Cameron
		}
	]
]);
