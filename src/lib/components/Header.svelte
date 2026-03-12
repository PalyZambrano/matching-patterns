<script lang="ts"></script>

<header>
	<a href="/" class="logo" aria-label="Matching Patterns">
		<span>M</span>
	</a>
	<nav aria-label="Main navigation">
		<a href="/explorar">Explorar</a>
		<a href="/contribuir" class="contribuir">Contribuir</a>
	</nav>
</header>

<style>
	header {
		background-color: #f0ebe5;
		border-bottom: 1px solid #ddd7cf;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.6rem 2.5rem;
		position: sticky;
		top: 0;
		z-index: 50;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.1rem;
		height: 2.1rem;
		background-color: #c1001c;
		color: #fff;
		font-family: Georgia, 'Times New Roman', serif;
		font-weight: 700;
		font-size: 1.15rem;
		text-decoration: none;
		flex-shrink: 0;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 2.5rem;
	}

	nav a {
		color: #111;
		text-decoration: none;
		font-family: system-ui, sans-serif;
		font-size: 0.9rem;
	}

	nav a:hover {
		color: #c1001c;
	}

	.contribuir {
		border: 1.5px solid #c1001c;
		color: #c1001c !important;
		padding: 0.3rem 1.1rem;
		border-radius: 8px;
	}
</style>
