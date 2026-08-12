import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Store } from '$lib/types';

const stores: Store[] = [
	{
		id: 1,
		name: 'Antonio González Tejidos',
		country: 'España',
		province: 'Alicante',
		city: 'Alant',
		address: 'Carrer Pintor Aparicio, 29, 03003',
		tags: ['Tapicería', 'venta por mayor'],
		studentDiscount: true,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://example.com',
		phone: '(34) 555-5555',
		email: 'contacto@placeholder.com',
		socials: [
			{ label: 'Instagram', url: 'https://instagram.com' },
			{ label: 'Pinterest', url: 'https://pinterest.com' }
		],
		hours: ['Lunes-Viernes : 10AM - 7PM', 'Sat : 10AM - 2PM', 'Sun : Cerrado']
	},
	{
		id: 2,
		name: 'Textiles Modernistes',
		country: 'España',
		province: 'Barcelona',
		city: 'Barcelona',
		address: 'Passeig de Gràcia, 42, 08007',
		tags: ['lino', 'seda'],
		studentDiscount: false,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://example.com/textiles-modernistes',
		socials: [{ label: 'Instagram', url: 'https://instagram.com' }]
	},
	{
		id: 3,
		name: 'Casa de las Telas',
		country: 'España',
		province: 'Madrid',
		city: 'Madrid',
		address: 'Calle Fuencarral, 85, 28004',
		tags: ['algodón', 'venta por mayor'],
		studentDiscount: true,
		category: 'telas',
		phone: '(34) 555-0112'
	},
	{
		id: 4,
		name: 'Telas y Punto Levante',
		country: 'España',
		province: 'Valencia',
		city: 'Valencia',
		address: 'Avenida del Puerto, 88, 46023',
		tags: ['punto', 'lycra'],
		studentDiscount: false,
		category: 'telas'
	},
	{
		id: 5,
		name: 'El Corte de Telas',
		country: 'España',
		province: 'Sevilla',
		city: 'Sevilla',
		address: 'Calle Sierpes, 22, 41001',
		tags: ['Tapicería', 'cortinas'],
		studentDiscount: false,
		category: 'telas'
	},
	{
		id: 6,
		name: 'Telas del Norte',
		country: 'España',
		province: 'Vizcaya',
		city: 'Bilbao',
		address: 'Gran Vía Don Diego López de Haro, 45, 48009',
		tags: ['lana', 'venta por mayor'],
		studentDiscount: true,
		category: 'telas'
	},
	{
		id: 7,
		name: 'La Aguja de Plata',
		country: 'España',
		province: 'Vizcaya',
		city: 'Bilbao',
		address: 'Calle Licenciado Poza, 14, 48011',
		tags: ['botones', 'cremalleras'],
		studentDiscount: true,
		category: 'merceria'
	},
	{
		id: 8,
		name: 'Mercería Central',
		country: 'España',
		province: 'Zaragoza',
		city: 'Zaragoza',
		address: 'Calle Alfonso I, 12, 50001',
		tags: ['hilos', 'encajes'],
		studentDiscount: false,
		category: 'merceria'
	},
	{
		id: 9,
		name: 'Hilos y Botones Sevilla',
		country: 'España',
		province: 'Sevilla',
		city: 'Sevilla',
		address: 'Calle Sierpes, 60, 41001',
		tags: ['hilos', 'broches'],
		studentDiscount: false,
		category: 'merceria'
	},
	{
		id: 10,
		name: 'Serigrafía Valencia',
		country: 'España',
		province: 'Valencia',
		city: 'Valencia',
		address: 'Polígono Industrial Vara de Quart, nave 8, 46014',
		tags: ['serigrafía', 'DTF'],
		studentDiscount: true,
		category: 'estampados'
	},
	{
		id: 11,
		name: 'PrintLab Barcelona',
		country: 'España',
		province: 'Barcelona',
		city: 'Barcelona',
		address: 'Carrer de Pallars, 193, 08005',
		tags: ['sublimación', 'DTG'],
		studentDiscount: false,
		category: 'estampados',
		website: 'https://example.com/printlab-barcelona'
	}
];

export const GET: RequestHandler = () => {
	return json(stores);
};
