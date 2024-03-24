import directors_data from './director_data.json';

export type Director = {
	id: number;
	name: string;
	image?: string;
	movies: string[];
};

export const Directors: Map<number, Director> = new Map(
	directors_data.directors.map((director: Director) => [director.id, director])
);
