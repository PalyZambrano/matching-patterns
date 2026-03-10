<script lang="ts"></script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section>
	<div class="content">
		<h1>MATCHING<br />PATTERNS</h1>
		<p>Una biblioteca abierta de recursos para diseñadores de indumentaria.</p>
		<a href="/explorar" class="cta-link">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 420 130"
				class="shoe-cta"
				role="img"
				aria-label="Explorar"
			>
				<!-- Flat shoe silhouette -->
				<path
					d="M 28,106 C 12,106 4,97 6,86 C 9,71 24,55 58,48 L 340,43
					   C 376,43 403,59 411,78 C 416,91 408,107 390,114
					   C 371,120 344,122 294,122 L 52,122 C 36,122 28,115 28,106 Z"
					fill="#c1001c"
				/>
				<text
					x="210"
					y="93"
					text-anchor="middle"
					fill="white"
					font-family="system-ui, sans-serif"
					font-size="17"
					letter-spacing="6"
				>
					← Explorar →
				</text>
			</svg>
		</a>
	</div>

	<div class="illustration" aria-hidden="true">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 600" overflow="visible">
			<!-- Thread bobbin/spool -->
			<g transform="translate(148, 308) rotate(-18)">
				<ellipse cx="0" cy="-42" rx="48" ry="13" fill="#c1001c" />
				<rect x="-38" y="-42" width="76" height="84" rx="4" fill="#c1001c" />
				<ellipse cx="0" cy="42" rx="48" ry="13" fill="#c1001c" />
				<line x1="-38" y1="-14" x2="38" y2="-14" stroke="#f0ebe5" stroke-width="2.5" opacity="0.35" />
				<line x1="-38" y1="-3" x2="38" y2="-3" stroke="#f0ebe5" stroke-width="2.5" opacity="0.35" />
				<line x1="-38" y1="8" x2="38" y2="8" stroke="#f0ebe5" stroke-width="2.5" opacity="0.35" />
				<line x1="-38" y1="19" x2="38" y2="19" stroke="#f0ebe5" stroke-width="2.5" opacity="0.35" />
			</g>

			<!-- Small cap / hat (top-right area) -->
			<g transform="translate(488, 58)">
				<ellipse cx="0" cy="0" rx="38" ry="10" fill="#c1001c" />
				<path d="M -26,-2 L -20,-50 L 20,-50 L 26,-2 Z" fill="#c1001c" />
				<ellipse cx="0" cy="-50" rx="20" ry="7" fill="#c1001c" />
				<ellipse
					cx="0"
					cy="0"
					rx="38"
					ry="10"
					fill="none"
					stroke="#f0ebe5"
					stroke-width="1.5"
					stroke-dasharray="4,3.5"
				/>
			</g>

			<!-- Scissors (open, rotated diagonally) -->
			<g transform="translate(502, 258) rotate(40)">
				<!-- Arm 1: blade goes upper-left, handle ring lower-right -->
				<path d="M 0,0 L -32,-128 C -26,-136 -18,-134 -13,-126 L 0,0 Z" fill="#c1001c" />
				<line x1="0" y1="0" x2="38" y2="78" stroke="#c1001c" stroke-width="11" stroke-linecap="round" />
				<circle cx="38" cy="78" r="26" fill="#c1001c" />
				<circle cx="38" cy="78" r="15" fill="#f0ebe5" />
				<!-- Arm 2: blade goes upper-right, handle ring lower-left -->
				<path d="M 0,0 L 32,-128 C 26,-136 18,-134 13,-126 L 0,0 Z" fill="#c1001c" />
				<line x1="0" y1="0" x2="-38" y2="78" stroke="#c1001c" stroke-width="11" stroke-linecap="round" />
				<circle cx="-38" cy="78" r="26" fill="#c1001c" />
				<circle cx="-38" cy="78" r="15" fill="#f0ebe5" />
				<!-- Pivot screw -->
				<circle cx="0" cy="0" r="5.5" fill="#f0ebe5" />
			</g>

			<!-- Dress form / mannequin (right edge, partially cropped) -->
			<g transform="translate(646, 58)">
				<!-- Neck -->
				<path d="M -13,0 C -15,-6 -13,-22 -9,-30 L 9,-30 C 13,-22 15,-6 13,0 Z" fill="#c1001c" />
				<!-- Shoulders -->
				<path d="M -13,0 C -38,2 -72,22 -76,54 L 76,54 C 72,22 38,2 13,0 Z" fill="#c1001c" />
				<!-- Torso / chest -->
				<path d="M -76,54 C -84,80 -82,114 -70,142 L 70,142 C 82,114 84,80 76,54 Z" fill="#c1001c" />
				<!-- Waist -->
				<path d="M -70,142 C -76,156 -74,178 -70,192 L 70,192 C 74,178 76,156 70,142 Z" fill="#c1001c" />
				<!-- Hip -->
				<path d="M -70,192 C -82,208 -82,228 -74,244 L 74,244 C 82,228 82,208 70,192 Z" fill="#c1001c" />
				<!-- Stand pole -->
				<rect x="-6" y="244" width="12" height="148" fill="#c1001c" />
				<!-- Base disk -->
				<ellipse cx="0" cy="392" rx="54" ry="13" fill="#c1001c" />
			</g>

			<!-- Fabric pattern piece 1 (irregular polygon) -->
			<path d="M 172,182 L 294,165 L 318,252 L 255,296 L 158,272 Z" fill="#c1001c" />

			<!-- Fabric pattern piece 2 (bodice / t-shirt panel) -->
			<path
				d="M 238,318
				   C 218,298 196,298 186,318 L 164,297 L 175,270 L 222,270
				   L 242,254 L 302,254 L 322,270 L 368,270 L 378,297 L 356,318
				   C 346,298 324,298 304,318
				   L 314,402 L 228,402 Z"
				fill="#c1001c"
			/>

			<!-- Fabric pattern piece 3 (sleeve / wedge panel) -->
			<path d="M 132,385 L 204,356 L 232,428 L 178,466 L 116,446 Z" fill="#c1001c" />

			<!-- Large button -->
			<g transform="translate(492, 398)">
				<circle r="34" fill="#c1001c" />
				<circle r="23" fill="#f0ebe5" />
				<circle r="16" fill="#c1001c" />
				<circle cx="-5" cy="-5" r="3.5" fill="#f0ebe5" />
				<circle cx="5" cy="-5" r="3.5" fill="#f0ebe5" />
				<circle cx="-5" cy="5" r="3.5" fill="#f0ebe5" />
				<circle cx="5" cy="5" r="3.5" fill="#f0ebe5" />
			</g>

			<!-- Small button -->
			<g transform="translate(574, 322)">
				<circle r="24" fill="#c1001c" />
				<circle r="16" fill="#f0ebe5" />
				<circle r="10" fill="#c1001c" />
				<circle cx="-3.5" cy="-3.5" r="2.5" fill="#f0ebe5" />
				<circle cx="3.5" cy="-3.5" r="2.5" fill="#f0ebe5" />
				<circle cx="-3.5" cy="3.5" r="2.5" fill="#f0ebe5" />
				<circle cx="3.5" cy="3.5" r="2.5" fill="#f0ebe5" />
			</g>

			<!-- Seam ripper -->
			<g transform="translate(454, 462) rotate(-42)">
				<ellipse cx="0" cy="48" rx="9" ry="38" fill="#c1001c" />
				<circle cx="0" cy="8" r="11" fill="#c1001c" />
				<rect x="-2.5" y="-75" width="5" height="72" rx="2.5" fill="#c1001c" />
				<circle cx="0" cy="-78" r="6" fill="#c1001c" />
			</g>

			<!-- Safety pin -->
			<g transform="translate(535, 496) rotate(28)">
				<rect x="-7" y="-90" width="14" height="148" rx="7" fill="none" stroke="#c1001c" stroke-width="5" />
				<circle cx="0" cy="-90" r="8" fill="#c1001c" />
				<line x1="0" y1="-80" x2="0" y2="58" stroke="#c1001c" stroke-width="2.5" opacity="0.4" />
			</g>

			<!-- Pin cushion -->
			<g transform="translate(616, 536)">
				<!-- Dome body -->
				<path d="M -48,14 C -48,-24 48,-24 48,14 Z" fill="#c1001c" />
				<ellipse cx="0" cy="14" rx="48" ry="13" fill="#c1001c" />
				<!-- Flower decoration -->
				<circle cx="0" cy="-10" r="6" fill="#a0001a" />
				<circle cx="-8" cy="-16" r="5" fill="#a0001a" />
				<circle cx="8" cy="-16" r="5" fill="#a0001a" />
				<!-- Pins -->
				<line x1="-16" y1="-10" x2="-20" y2="-52" stroke="#c1001c" stroke-width="2.5" />
				<circle cx="-20" cy="-54" r="3.5" fill="#c1001c" />
				<line x1="2" y1="-22" x2="3" y2="-62" stroke="#c1001c" stroke-width="2.5" />
				<circle cx="3" cy="-64" r="3.5" fill="#c1001c" />
				<line x1="18" y1="-12" x2="22" y2="-54" stroke="#c1001c" stroke-width="2.5" />
				<circle cx="22" cy="-56" r="3.5" fill="#c1001c" />
				<!-- Flat base -->
				<ellipse cx="0" cy="17" rx="52" ry="10" fill="#c1001c" opacity="0.7" />
			</g>
		</svg>
	</div>
</section>

<style>
	section {
		background-color: #f0ebe5;
		display: flex;
		align-items: stretch;
		min-height: calc(100vh - 56px);
		overflow: hidden;
		position: relative;
	}

	.content {
		flex: 0 0 52%;
		padding: 3rem 0 3rem 2.5rem;
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-family: 'Barlow Condensed', Impact, 'Arial Narrow', sans-serif;
		font-weight: 900;
		font-size: clamp(4.5rem, 11vw, 11rem);
		line-height: 0.88;
		color: #c1001c;
		margin: 0 0 1.5rem;
		text-transform: uppercase;
		letter-spacing: -0.02em;
	}

	p {
		font-family: system-ui, sans-serif;
		font-size: 1rem;
		color: #111;
		margin: 0;
		max-width: 480px;
		line-height: 1.5;
	}

	.cta-link {
		display: inline-block;
		text-decoration: none;
		margin-top: auto;
		padding-top: 2rem;
	}

	.shoe-cta {
		width: 390px;
		height: auto;
		display: block;
	}

	.illustration {
		flex: 1;
		display: flex;
		align-items: flex-start;
		overflow: visible;
		padding-top: 1rem;
	}

	.illustration svg {
		width: 100%;
		height: auto;
		overflow: visible;
	}
</style>
