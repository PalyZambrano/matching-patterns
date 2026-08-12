<script lang="ts">
	let { label = 'Descuento Estudiante' }: { label?: string } = $props();
</script>

<div class="h-16 w-16 shrink-0 drop-shadow-sm" title={label} aria-label={label} role="img">
	<svg class="h-full w-full" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
		<circle cx="40" cy="40" r="39" fill="#aec5f2" />
		<circle cx="40" cy="40" r="34" fill="none" stroke="white" stroke-width="1" opacity="0.7" />
		<path
			d="M40 18C52.1503 18 62 27.8497 62 40C62 52.1503 52.1503 62 40 62C27.8497 62 18 52.1503 18 40C18 27.8497 27.8497 18 40 18ZM35.1387 40.6514C32.9636 40.6514 31.2002 42.4148 31.2002 44.5898C31.2002 46.7649 32.9636 48.5283 35.1387 48.5283C37.3135 48.5281 39.0761 46.7647 39.0762 44.5898C39.0762 42.4149 37.3136 40.6516 35.1387 40.6514ZM44.5908 40.6514C42.4158 40.6514 40.6523 42.4148 40.6523 44.5898C40.6524 46.7649 42.4158 48.5283 44.5908 48.5283C46.7656 48.5281 48.5283 46.7647 48.5283 44.5898C48.5283 42.4149 46.7657 40.6516 44.5908 40.6514ZM35.1387 31.2002C32.9638 31.2002 31.2004 32.9628 31.2002 35.1377C31.2002 37.3127 32.9636 39.0762 35.1387 39.0762C37.3136 39.076 39.0762 37.3126 39.0762 35.1377C39.076 32.9629 37.3134 31.2004 35.1387 31.2002ZM44.5908 31.2002C42.4159 31.2002 40.6525 32.9628 40.6523 35.1377C40.6523 37.3127 42.4158 39.0762 44.5908 39.0762C46.7657 39.0759 48.5283 37.3126 48.5283 35.1377C48.5281 32.963 46.7655 31.2004 44.5908 31.2002Z"
			fill="white"
		/>
		<defs>
			<path id="student-discount-badge-text-path" d="M 40,40 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
		</defs>
		<text fill="white" font-size="8.5" font-family="Arial, sans-serif" font-weight="700">
			<textPath href="#student-discount-badge-text-path" startOffset="50%" text-anchor="middle">
				{label.toUpperCase()}
			</textPath>
		</text>
	</svg>
</div>
