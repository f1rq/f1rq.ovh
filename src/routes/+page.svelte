<script>
    import "../app.css";
    import Navbar from '$lib/components/navbar.svelte';
    import Hero from '$lib/components/hero.svelte';
    import Skills from '$lib/components/skills.svelte';
    import Projects from '$lib/components/projects.svelte';
    import Contact from '$lib/components/contact.svelte';
    import Footer from '$lib/components/footer.svelte';

    import MouseGradient from '$lib/components/mouse-gradient.svelte'
</script>

<div class="relative">
<!--    <MouseGradient-->
<!--    />-->

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

    <div id="contact">
        <Contact />
    </div>

    <Footer />
</div>