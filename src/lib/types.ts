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
	img?: string;
	mapUrl?: string;
	website?: string;
	phone?: string;
	email?: string;
	socials?: SocialLink[];
	hours?: string[];
}

export type Category = 'telas' | 'merceria' | 'estampados';

export interface City {
	name: string;
	storeCount: number;
}

export interface SocialLink {
	label: string;
	url: string;
}
