export interface Store {
	id: number;
	name: string;
	country: string;
	province: string;
	city: string;
	address: string;
	tags: string[];
	materials?: string[];
	studentDiscount: boolean | null;
	category: 'telas' | 'merceria' | 'estampados';
	img?: string | null;
	mapUrl?: string | null;
	website?: string | null;
	phone?: string | null;
	email?: string | null;
	socials?: SocialLink[] | null;
	hours?: string[] | null;
	contributor?: Contributor | null;
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

export interface Contributor {
	name: string;
	url?: string | null;
	urlLabel?: string | null;
}
