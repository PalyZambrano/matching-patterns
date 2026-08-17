import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Store } from '$lib/types';

const stores: Store[] = [
	// ─────────────────────────────
	// SANTIAGO, CHILE
	// ─────────────────────────────

	{
		id: 1,
		name: 'Telarte',
		country: 'Chile',
		province: 'Región Metropolitana',
		city: 'Santiago',
		address: 'Las Dalias 2432, Macul',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+56 2 2238 9222',
		email: null,
		socials: [],
		hours: [
			'Lunes-Jueves: 09:30-13:30 / 14:30-17:30',
			'Viernes: 09:30-13:30 / 14:30-15:30',
			'Sábado-Domingo: Cerrado'
		],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 2,
		name: 'Comercializadora Telas Genesis',
		country: 'Chile',
		province: 'Región Metropolitana',
		city: 'Santiago',
		address: 'Av. Independencia 289, Independencia',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+56 9 9915 9911',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:30-16:00', 'Sábado: 09:30-14:00', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 3,
		name: 'Dong Bang',
		country: 'Chile',
		province: 'Región Metropolitana',
		city: 'Santiago',
		address: 'Rosas 1123, Santiago',
		tags: ['Mercería', 'Accesorios', 'Costura'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+56 2 2699 7764',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:00-19:00', 'Sábado: 10:00-14:00', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 4,
		name: 'Hitega',
		country: 'Chile',
		province: 'Región Metropolitana',
		city: 'Santiago',
		address: 'Av. Rodrigo de Araya 951, Macul',
		tags: ['Textiles', 'Venta por mayor'],
		studentDiscount: null,
		category: 'telas',
		img: '/img-stores/hitega.jpg',
		website: null,
		phone: '+56 2 2583 8800',
		email: null,
		socials: [],
		hours: ['Lunes-Jueves: 09:00-17:00', 'Viernes: 09:00-15:30', 'Sábado-Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 5,
		name: 'La Samaritana',
		country: 'Chile',
		province: 'Región Metropolitana',
		city: 'Santiago',
		address: '21 de Mayo 613, Santiago',
		tags: ['Mercería', 'Costura', 'Accesorios'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+56 9 6237 4890',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:30-20:00', 'Sábado: 10:30-17:30', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},

	// ─────────────────────────────
	// BUENOS AIRES, ARGENTINA
	// ─────────────────────────────

	{
		id: 6,
		name: 'Telas Once',
		country: 'Argentina',
		province: 'Ciudad Autónoma de Buenos Aires',
		city: 'Buenos Aires',
		address: 'Av. Corrientes 2083, C1045AAC',
		tags: ['Telas', 'Venta por mayor', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+54 11 6205 8641',
		email: null,
		socials: [],
		hours: ['Lunes-Jueves: 09:30-16:30', 'Viernes: 09:30-14:30'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 7,
		name: 'De Levie Casa',
		country: 'Argentina',
		province: 'Ciudad Autónoma de Buenos Aires',
		city: 'Buenos Aires',
		address: 'Echeverría 2242, Belgrano',
		tags: ['Telas', 'Confección', 'Decoración'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+54 11 4436 4443',
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 8,
		name: 'LB Géneros',
		country: 'Argentina',
		province: 'Ciudad Autónoma de Buenos Aires',
		city: 'Buenos Aires',
		address: 'Cabello 3843, Palermo',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+54 11 4802 6201',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:00-18:30'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 9,
		name: 'Mercería Industrial Casa Jorge',
		country: 'Argentina',
		province: 'Ciudad Autónoma de Buenos Aires',
		city: 'Buenos Aires',
		address: 'Larrea 441, Balvanera',
		tags: ['Mercería', 'Venta por mayor', 'Costura'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+54 11 3220 7177',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:00-16:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 10,
		name: 'Donatelli',
		country: 'Argentina',
		province: 'Provincia de Buenos Aires',
		city: 'San Martín',
		address: 'San Lorenzo 2409, San Martín',
		tags: ['Textiles', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+54 11 4713 1333',
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},

	// ─────────────────────────────
	// ALICANTE, ESPAÑA
	// ─────────────────────────────

	{
		id: 11,
		name: 'Julián López',
		country: 'España',
		province: 'Alicante',
		city: 'Alicante',
		address: 'C. General Lacy, 10, 03003 Alicante',
		tags: ['Telas', 'Confección', 'Fiesta', 'Decoración'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://julianlopez.es',
		phone: '+34 965 985 189',
		email: 'alicante@julianlopez.es',
		socials: [],
		hours: ['Lunes-Sábado: 10:00-14:00 / 16:30-20:00', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 12,
		name: 'El Kilo Alicante',
		country: 'España',
		province: 'Alicante',
		city: 'Alicante',
		address: 'C. Alberola, 47, 03007 Alicante',
		tags: ['Telas', 'Retales', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+34 659 437 796',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:30-13:30 / 17:30-20:30', 'Sábado: 09:30-13:30', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 13,
		name: 'Masquetela',
		country: 'España',
		province: 'Alicante',
		city: 'Alicante',
		address: 'Carrer Benidoleig, 6, Polígono Rabasa, 03009 Alicante',
		tags: ['Telas', 'Patchwork', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+34 630 970 456',
		email: null,
		socials: [],
		hours: ['Lunes-Jueves: 09:00-13:30 / 16:30-20:00', 'Viernes: 09:00-13:30'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 14,
		name: 'La Tela',
		country: 'España',
		province: 'Alicante',
		city: 'Alicante',
		address: 'C. Pintor Pérez Pizarro, 10, 03011 Alicante',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+34 965 177 159',
		email: null,
		socials: [],
		hours: ['Lunes-Sábado: 10:00-13:30', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 15,
		name: 'Antonio González Tejidos',
		country: 'España',
		province: 'Alicante',
		city: 'Alicante',
		address: 'Carrer Pintor Aparicio, 29, 03003 Alicante',
		tags: ['Telas', 'Tapicería', 'Venta por mayor'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: null,
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},

	// ─────────────────────────────
	// MADRID, ESPAÑA
	// ─────────────────────────────

	{
		id: 16,
		name: 'Ribes & Casals',
		country: 'España',
		province: 'Madrid',
		city: 'Madrid',
		address: 'C. de Atocha, 26, 28012 Madrid',
		tags: ['Telas', 'Mercería', 'Outlet', 'Confección', 'Tapicería'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://www.ribesycasals.com',
		phone: '+34 913 694 500',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:15-14:00 / 16:30-20:00', 'Sábado: 10:15-14:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 17,
		name: 'Julián López',
		country: 'España',
		province: 'Madrid',
		city: 'Madrid',
		address: 'C. de la Bolsa, 2, 28012 Madrid',
		tags: ['Telas', 'Mercería', 'Confección', 'Novia', 'Fiesta'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://julianlopez.es',
		phone: '+34 918 604 769',
		email: 'madrid@julianlopez.es',
		socials: [],
		hours: ['Lunes-Sábado: 10:00-14:00 / 16:30-20:00', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 18,
		name: 'Tejidos Paredes',
		country: 'España',
		province: 'Madrid',
		city: 'Madrid',
		address: 'C. de Atocha, 30, 28012 Madrid',
		tags: ['Telas', 'Confección', 'Fiesta', 'Retales'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+34 914 296 663',
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 19,
		name: 'Tejidos Rebeca Ruiz',
		country: 'España',
		province: 'Madrid',
		city: 'Madrid',
		address: 'C. de la Paz, 4, 28012 Madrid',
		tags: ['Alta costura', 'Confección', 'Telas'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: null,
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 20,
		name: 'Donnatela',
		country: 'España',
		province: 'Madrid',
		city: 'Madrid',
		address: 'Plaza de Arteijo, 13, 28029 Madrid',
		tags: ['Telas', 'Algodón', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://donnatela.com',
		phone: '+34 917 382 284',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:00-14:00 / 17:00-20:00', 'Sábado: 10:00-14:00', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},

	// ─────────────────────────────
	// BARCELONA, ESPAÑA
	// ─────────────────────────────

	{
		id: 21,
		name: 'Ribes & Casals',
		country: 'España',
		province: 'Barcelona',
		city: 'Barcelona',
		address: 'Carrer de Roger de Llúria, 7, 08010 Barcelona',
		tags: ['Telas', 'Mercería', 'Confección', 'Venta por mayor'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://www.ribesycasals.com',
		phone: '+34 933 012 345',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:00-14:00 / 16:00-20:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 22,
		name: 'Gratacós 1940',
		country: 'España',
		province: 'Barcelona',
		city: 'Barcelona',
		address: 'Carrer de la Riera de Sant Miquel, 9, 08006 Barcelona',
		tags: ['Alta costura', 'Telas premium', 'Diseñadores', 'Venta por mayor'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+34 932 387 353',
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 23,
		name: 'Nunoya',
		country: 'España',
		province: 'Barcelona',
		city: 'Barcelona',
		address: "Carrer d'Alí Bei, 11, 08010 Barcelona",
		tags: ['Telas japonesas', 'Estampados', 'Confección', 'Venta por mayor'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+34 933 175 388',
		email: null,
		socials: [],
		hours: ['Lunes-Sábado: 10:00-20:00', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 24,
		name: 'Teixits Donna',
		country: 'España',
		province: 'Barcelona',
		city: 'Barcelona',
		address: 'Carrer de les Magdalenes, 2, 08002 Barcelona',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+34 934 121 564',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:00-14:00 / 16:00-20:00', 'Sábado: 10:00-14:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 25,
		name: 'Merceria Santa Ana',
		country: 'España',
		province: 'Barcelona',
		city: 'Barcelona',
		address: 'Carrer de les Moles, 22, 08002 Barcelona',
		tags: ['Mercería', 'Costura', 'Accesorios'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+34 933 015 175',
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},

	// ─────────────────────────────
	// BUDAPEST, HUNGRÍA
	// ─────────────────────────────

	{
		id: 26,
		name: 'I Love Textil - Teréz körút',
		country: 'Hungría',
		province: 'Budapest',
		city: 'Budapest',
		address: 'Teréz krt. 3, 1067 Budapest',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+36 1 321 1439',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:00-18:00', 'Sábado: 09:00-13:00', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 27,
		name: 'I Love Textiles - Szent István',
		country: 'Hungría',
		province: 'Budapest',
		city: 'Budapest',
		address: 'Szent István krt. 2, 1137 Budapest',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+36 1 270 4190',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:00-18:00', 'Sábado: 09:00-13:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 28,
		name: 'I Love Textil - József körút',
		country: 'Hungría',
		province: 'Budapest',
		city: 'Budapest',
		address: 'József krt. 60, 1085 Budapest',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+36 1 313 9844',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:00-18:00', 'Sábado: 09:00-13:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 29,
		name: 'Gombudvar',
		country: 'Hungría',
		province: 'Budapest',
		city: 'Budapest',
		address: 'Régi posta utca 7-9, 1052 Budapest',
		tags: ['Mercería', 'Botones', 'Accesorios'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+36 1 318 3326',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:00-18:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 30,
		name: 'Ferenc körút Rövidáru',
		country: 'Hungría',
		province: 'Budapest',
		city: 'Budapest',
		address: 'Ferenc krt. 30, 1092 Budapest',
		tags: ['Mercería', 'Costura', 'Accesorios'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+36 20 311 4055',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:30-17:30'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},

	// ─────────────────────────────
	// VARSOVIA, POLONIA
	// ─────────────────────────────

	{
		id: 31,
		name: 'Sklep z Tkaninami Andersa',
		country: 'Polonia',
		province: 'Mazovia',
		city: 'Varsovia',
		address: 'Gen. W. Andersa 6, 00-201 Warszawa',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+48 601 307 272',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:00-18:00', 'Sábado: 10:00-13:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 32,
		name: 'Mimoza',
		country: 'Polonia',
		province: 'Mazovia',
		city: 'Varsovia',
		address: 'Józefa Bellottiego 3, 01-022 Warszawa',
		tags: ['Telas', 'Decoración', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+48 503 756 768',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:00-18:00', 'Sábado: 10:00-15:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 33,
		name: 'Marian Jasiński',
		country: 'Polonia',
		province: 'Mazovia',
		city: 'Varsovia',
		address: 'Antoniego Józefa Madalińskiego 4, 02-513 Warszawa',
		tags: ['Telas', 'Mercería', 'Costura'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+48 22 646 7118',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:00-19:00', 'Sábado: 10:00-14:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 34,
		name: 'Pasmanteria SOHO',
		country: 'Polonia',
		province: 'Mazovia',
		city: 'Varsovia',
		address: 'Jana i Jędrzeja Śniadeckich 12/16, 00-656 Warszawa',
		tags: ['Mercería', 'Costura', 'Accesorios'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+48 22 621 8140',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 10:30-18:30', 'Sábado: 10:00-15:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 35,
		name: 'Tkaniny Dekoracyjne Puławska',
		country: 'Polonia',
		province: 'Mazovia',
		city: 'Varsovia',
		address: 'Puławska 116, 02-620 Warszawa',
		tags: ['Telas', 'Decoración', 'Cortinas'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+48 22 844 6449',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 11:00-18:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},

	// ─────────────────────────────
	// ROMA, ITALIA
	// ─────────────────────────────

	{
		id: 36,
		name: 'Aston Tessuti Alta Moda',
		country: 'Italia',
		province: 'Lazio',
		city: 'Roma',
		address: 'Via Boncompagni, 27, 00187 Roma',
		tags: ['Alta costura', 'Seda', 'Cachemira', 'Sastrería'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://www.astontessuti.com',
		phone: '+39 06 4282 6647',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:00-19:30', 'Sábado: 09:00-13:00 / 15:30-19:30'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 37,
		name: 'Pierlorenzo Bassetti Tessuti',
		country: 'Italia',
		province: 'Lazio',
		city: 'Roma',
		address: 'Via del Gesù, 60, Roma',
		tags: ['Telas', 'Alta costura', 'Sastrería'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://www.pierlorenzobassettitessuti.com',
		phone: null,
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 38,
		name: 'Azienda Tessile Romana',
		country: 'Italia',
		province: 'Lazio',
		city: 'Roma',
		address: "Via di S. Nicola de' Cesarini, 7/13, 00186 Roma",
		tags: ['Telas', 'Textiles', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+39 06 6880 5192',
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 39,
		name: 'Tessuti Stock Roma',
		country: 'Italia',
		province: 'Lazio',
		city: 'Roma',
		address: 'Via Federico Delpino, 46, 00171 Roma',
		tags: ['Telas', 'Stock', 'Confección', 'Precios económicos'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+39 06 241 2317',
		email: null,
		socials: [],
		hours: ['Lunes-Sábado: 09:30-13:00 / 16:00-20:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 40,
		name: 'La Merceria dal 1957',
		country: 'Italia',
		province: 'Lazio',
		city: 'Roma',
		address: 'Via Enrico Fermi, 20/22, 00146 Roma',
		tags: ['Mercería', 'Costura', 'Accesorios'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+39 349 163 1537',
		email: null,
		socials: [],
		hours: ['Lunes-Sábado: 10:00-13:00 / 16:30-19:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},

	// ─────────────────────────────
	// PARÍS, FRANCIA
	// ─────────────────────────────

	{
		id: 41,
		name: 'Marché Saint-Pierre',
		country: 'Francia',
		province: 'Île-de-France',
		city: 'París',
		address: '2 Rue Charles Nodier, 75018 Paris',
		tags: ['Telas', 'Confección', 'Decoración', 'Retales'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: null,
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 42,
		name: 'Tissus Reine',
		country: 'Francia',
		province: 'Île-de-France',
		city: 'París',
		address: '3-5 Place Saint-Pierre, 75018 Paris',
		tags: ['Telas', 'Patrones', 'Mercería', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://www.tissusreine.com',
		phone: '+33 1 46 06 02 31',
		email: 'info@tissusreine.com',
		socials: [],
		hours: [
			'Lunes: 13:30-18:00',
			'Martes-Viernes: 10:30-18:00',
			'Sábado: 10:30-18:45',
			'Domingo: Cerrado'
		],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 43,
		name: 'Les Coupons de Saint-Pierre',
		country: 'Francia',
		province: 'Île-de-France',
		city: 'París',
		address: 'Place Saint-Pierre, 75018 Paris',
		tags: ['Coupons', 'Deadstock', 'Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: null,
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 44,
		name: 'So Tissus',
		country: 'Francia',
		province: 'Île-de-France',
		city: 'París',
		address: '10 Rue des Jeuneurs, 75002 Paris',
		tags: ['Telas', 'Confección'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+33 6 16 57 74 86',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:30-18:00', 'Sábado: 11:00-17:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 45,
		name: 'Mercerie de Charonne',
		country: 'Francia',
		province: 'Île-de-France',
		city: 'París',
		address: '69 Rue de Charonne, 75011 Paris',
		tags: ['Mercería', 'Costura', 'Accesorios'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+33 1 43 55 31 46',
		email: null,
		socials: [],
		hours: ['Lunes: 12:00-19:00', 'Martes-Viernes: 10:00-19:00', 'Sábado: 10:00-17:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},

	// ─────────────────────────────
	// CIUDAD DE MÉXICO, MÉXICO
	// ─────────────────────────────

	{
		id: 46,
		name: 'Capital Textil',
		country: 'México',
		province: 'Ciudad de México',
		city: 'Ciudad de México',
		address: 'República de Uruguay 107, Centro Histórico, 06060',
		tags: ['Telas', 'Algodón', 'Popelina', 'Venta por rollo', 'Venta por mayor'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: 'https://capitaltextil.mx',
		phone: '+52 55 5522 9994',
		email: 'capitaltextilmx@gmail.com',
		socials: [],
		hours: ['Lunes-Viernes: 09:30-18:00', 'Sábado: 09:30-16:00', 'Domingo: Cerrado'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 47,
		name: 'Fito Textil',
		country: 'México',
		province: 'Ciudad de México',
		city: 'Ciudad de México',
		address: 'República de Uruguay 164-A, Centro Histórico, 06060',
		tags: ['Telas', 'Confección', 'Venta por mayor'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: '+52 55 5542 2372',
		email: null,
		socials: [],
		hours: ['Lunes-Viernes: 09:00-17:00', 'Sábado: 10:00-17:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 48,
		name: 'Mercería El Venado',
		country: 'México',
		province: 'Ciudad de México',
		city: 'Ciudad de México',
		address: 'Venustiano Carranza 148, Centro Histórico, 06060',
		tags: ['Mercería', 'Costura', 'Accesorios'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+52 55 5542 4494',
		email: null,
		socials: [],
		hours: ['Lunes-Sábado: 10:00-18:30'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 49,
		name: 'Guaida Hermanos',
		country: 'México',
		province: 'Ciudad de México',
		city: 'Ciudad de México',
		address: 'Venustiano Carranza 132, Centro Histórico, 06000',
		tags: ['Mercería', 'Costura', 'Venta por mayor', 'Accesorios'],
		studentDiscount: null,
		category: 'merceria',
		img: '/test-image.png',
		website: null,
		phone: '+52 55 5522 4532',
		email: null,
		socials: [],
		hours: ['Lunes-Sábado: 07:00-18:00'],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	},
	{
		id: 50,
		name: 'El Nuevo Mundo',
		country: 'México',
		province: 'Ciudad de México',
		city: 'Ciudad de México',
		address: 'Centro Histórico, Ciudad de México',
		tags: ['Telas', 'Fibras naturales', 'Algodón', 'Lino', 'Gabardina'],
		studentDiscount: null,
		category: 'telas',
		img: '/test-image.png',
		website: null,
		phone: null,
		email: null,
		socials: [],
		hours: [],
		contributor: {
			name: 'Matching Patterns',
			url: null
		}
	}
];

export const GET: RequestHandler = () => {
	return json(stores);
};
