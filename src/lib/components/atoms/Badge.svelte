<div class="badge" title="Descuento Estudiante">
	<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
		<circle cx="40" cy="40" r="39" fill="#1e3a8a" />
		<circle cx="40" cy="40" r="33" fill="none" stroke="white" stroke-width="0.6" opacity="0.4" />
		<circle cx="40" cy="40" r="14" fill="none" stroke="white" stroke-width="1" opacity="0.6" />
		<circle cx="40" cy="40" r="5" fill="white" opacity="0.8" />
		<defs>
			<path
				id="badge-text-path"
				d="M 40,40 m -27,0 a 27,27 0 1,1 54,0 a 27,27 0 1,1 -54,0"
			/>
		</defs>
		<text fill="white" font-size="7.2" font-family="system-ui, sans-serif" font-weight="600">
			<textPath href="#badge-text-path" textLength="169" lengthAdjust="spacing">
				Descuento · Estudiante ·
			</textPath>
		</text>
	</svg>
</div>

<style>
	.badge {
		width: 68px;
		height: 68px;
		flex-shrink: 0;
	}

	svg {
		width: 100%;
		height: 100%;
	}
</style>
