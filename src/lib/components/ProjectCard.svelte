<script>
    import CardBody from "./ProjectBodyCard.svelte";
    import { base } from '$app/paths';
    import { cn } from "$lib/utils";
  
    export let title = "";
    export let desc = "";
    export let image;
    export let link = "";
  </script>
  
  <a href="{base}/{link}">
    <div class="rounded-3xl shadow-3xl relative overflow-hidden group card border-[1px]">
      <img
        src={image}
        placeholder="blur"
        alt={title + " mockup"}
        class="w-[25rem] object-cover object-center m-0"
      />
      <div
        class="absolute inset-0 from-stone-900/90 via-stone-900/60 to-stone-900/5 bg-gradient-to-t backdrop-blur-[2px] transition-all duration-300"
      ></div>
      <CardBody
        {title}
        {desc}
        class="absolute pb-0.5 px-4 md:pb-10 inset-x-0 bottom-2 flex flex-col justify-end size-full"
      />
    </div>
  </a>
  
  <style>
    .card {
      transition: all 0.3s;
      filter: grayscale(100%);
    }
    .card:hover {
      transform: scale(1.05);
      filter: grayscale(0%);
    }
  </style>