export type Point = {
	title: string;
	directors: number[];
};

export const Points: Map<number, Point> = new Map([
	[0, {
		title: 'Click a circle to begin',
		directors: []
	}],
	[1, {
		title: 'The Blockbuster',
		directors: [1, 7, 22] // James Cameron
	}],
	[2, {
		title: 'The Innovator',
		directors: [2, 12, 19] // christopher nolan
	}],
	[3, {
		title: 'The Jack-of-All-Trades',
		directors: [3, 16, 17, 18] // steven spielberg, guillermo del toro, ang lee
	}],
	[4, {
		title: 'The Artist',
		directors: [4, 9, 21] // ingmar bergman
	}],
	[5, {
		title: 'The Visionary',
		directors: [5, 11, 15] // stanley kubrick
	}],
	[6, {
		title: 'The Connoisseur',
		directors: [6, 10, 20] // martin scorcese 
	}],
	[7, {
		title: 'The Enthusiast',
		directors: [8, 13, 14] // quentin tarantino
	}]
]);
