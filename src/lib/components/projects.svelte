<script>
    import BlurFade from "./BlurFade.svelte";
    import ProjectCard from "./ProjectCard.svelte";
    import nexomockup from "$lib/img/nexo_mockup.png";
    import strayvoidmockup from "$lib/img/strayvoid_mockup.png";
    import lifemapmockup from "$lib/img/lifemap_mockup.png";
</script>

<div class="min-h-screen flex flex-col items-center justify-center py-8 pb-[80px] md:pb-8 w-full">
    <BlurFade delay={0.10}>
        <h1 class="text-4xl mb-8 md:mb-12 px-4 text-center">Projects I'm working on:</h1>
    </BlurFade>

    <BlurFade delay={0.20}>
        <div class="w-full flex justify-center items-center px-4">
            <div class="siatka grid gap-8 w-full max-w-[800px]">
                <ProjectCard
                    title="Nexo"
                    desc="My own personal bot for Discord, written in Python using the discord.py library."
                    image={nexomockup}
                    link="nexo_project"
                />
                <ProjectCard 
                    title="Strayvoid"
                    desc="This is my first ever game. 2d pixelart platformer. Learning godot and generally game-dev. Maybe when i finish it it will be on steam but only maybe."
                    image={strayvoidmockup}
                    link="https://github.com/f1rq/Strayvoid"
                />
                <ProjectCard
                    title="LifeMap"
                    desc="LifeMap is a personal life tracker that visually organizes important events, goals, and memories in a timeline and map format."
                    image={lifemapmockup}
                    link="https://github.com/f1rq/LifeMap"
                />
            </div>
        </div>
    </BlurFade>
</div>

<style>
    .siatka {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        .siatka {
            grid-template-columns: 1fr;
            width: 100%;
        }
    }
</style>
