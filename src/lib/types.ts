export interface Store {
	id: number;
	name: string;
	country: string;
	province: string;
	city: string;
	address: string;
	tags: string[];
	studentDiscount: boolean;
	category: 'telas' | 'merceria' | 'estampados';
}

export type Category = 'telas' | 'merceria' | 'estampados';
