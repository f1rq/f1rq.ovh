<script>
    import "../app.css";
    import Navbar from '$lib/components/navbar.svelte';
    import Hero from '$lib/components/hero.svelte';
    import Skills from '$lib/components/skills.svelte';
    import Projects from '$lib/components/projects.svelte'
</script>

<Navbar />

<div id="main">
    <Hero />
</div>

<div id="skills">
    <Skills />
</div>

<div id="projects">
    <Projects />
</div>