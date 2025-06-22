<script>
    import { cn } from "$lib/utils";
    
    export let title = "";
    export let desc = "";
    let className = "";
    export { className as class };
  </script>
  
  <div class={cn("px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left", className)}>
    <h3 class="text-lg font-semibold tracking-tighter mt-3 mb-1">{title}</h3>
    <p class="text-sm leading-5">{desc}</p>
  </div>

