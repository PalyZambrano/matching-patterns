import type { Store } from '$lib/types';

export const featuredStores: Store[] = [
	{
		id: 1,
		name: 'Antonio González Tejidos',
		country: 'España',
		province: 'Alicante',
		city: 'Alicante',
		address: 'Carrer Pintor Aparicio, 29',
		tags: ['Tapicería', 'Venta por mayor'],
		materials: ['Denim', 'Cotton'],
		studentDiscount: true,
		category: 'telas',
		img: '/test-image.png'
	},
	{
		id: 2,
		name: 'Textiles Modernistes',
		country: 'España',
		province: 'Barcelona',
		city: 'Barcelona',
		address: 'Passeig de Gràcia, 42',
		tags: ['Lino', 'Seda'],
		materials: ['Velvet', 'Cotton'],
		studentDiscount: false,
		category: 'telas',
		img: '/test-image.png'
	},
	{
		id: 7,
		name: 'La Aguja de Plata',
		country: 'España',
		province: 'Vizcaya',
		city: 'Bilbao',
		address: 'Calle Licenciado Poza, 14',
		tags: ['Botones', 'Cremalleras'],
		materials: ['Denim'],
		studentDiscount: true,
		category: 'telas',
		img: '/test-image.png'
	},
	{
		id: 10,
		name: 'Serigrafía Valencia',
		country: 'España',
		province: 'Valencia',
		city: 'Valencia',
		address: 'Polígono Industrial Vara de Quart',
		tags: ['Serigrafía', 'DTF'],
		materials: ['Velvet'],
		studentDiscount: false,
		category: 'estampados',
		img: '/test-image.png'
	}
];
