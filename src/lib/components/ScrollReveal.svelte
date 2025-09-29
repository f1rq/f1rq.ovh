<script lang="ts">
    import { onMount } from 'svelte'

    export let delay = 0
    export let duration = 600
    export let direction: 'up' | 'down' | 'left' | 'right' = 'up'
    export let distance = 30

    let slotElement: HTMLElement

    onMount(() => {
        // Get the actual slotted element
        const slottedElement = slotElement?.firstElementChild as HTMLElement
        if (!slottedElement) return

        const transform = {
            up: `translateY(${distance}px)`,
            down: `translateY(-${distance}px)`,
            left: `translateX(${distance}px)`,
            right: `translateX(-${distance}px)`
        }[direction]

        // Set initial state
        slottedElement.style.opacity = '0'
        slottedElement.style.transform = transform
        slottedElement.style.transition = `all ${duration}ms ease-out`

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    slottedElement.style.opacity = '1'
                    slottedElement.style.transform = 'translateY(0) translateX(0)'
                    slottedElement.style.transitionDelay = `${delay}ms`
                } else {
                    slottedElement.style.opacity = '0'
                    slottedElement.style.transform = transform
                    slottedElement.style.transitionDelay = '0ms'
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        observer.observe(slottedElement)

        return () => observer.disconnect()
    })
</script>

<div bind:this={slotElement} style="display: contents;">
    <slot />
</div>