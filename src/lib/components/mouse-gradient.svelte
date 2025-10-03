<script lang="ts">
    import { onMount } from 'svelte'

    export let size: string = 'w-[30rem] h-[30rem]' // Size of the gradient circle
    export let opacity: string = 'opacity-20' // Overall opacity
    export let duration: string = 'duration-200' // Animation duration

    let containerElement: HTMLDivElement
    let mouseX: number = 0
    let mouseY: number = 0

    onMount(() => {
        let animationId: number

        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(animationId)
            animationId = requestAnimationFrame(() => {
                mouseX = e.clientX
                mouseY = e.clientY
            })
        }

        const handleMouseLeave = () => {
            mouseX = -1000
            mouseY = -1000
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
            cancelAnimationFrame(animationId)
        }
    })

    $: offset = '15rem'
</script>

<div
        bind:this={containerElement}
        class="fixed inset-0 pointer-events-none overflow-hidden z-0"
        style="--mouse-x: {mouseX}px; --mouse-y: {mouseY}px;"
>
    <div
            class="absolute {size} rounded-full {opacity} transition-transform {duration} ease-out bg-primary will-change-transform"
            style="
        mask: radial-gradient(circle, white 0%, transparent 70%);
        transform: translate(calc(var(--mouse-x) - {offset}), calc(var(--mouse-y) - {offset}));
    "
    ></div>
</div>