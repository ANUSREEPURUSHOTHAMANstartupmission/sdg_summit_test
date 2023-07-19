<script>

  export let menu_open;

  let y = 0;

  $: scrolled = y > 100;

  function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
  }

  const handleCyclo = (e) => {
    e.preventDefault()
    let button = e.target.closest('[data-target]');
    let target = button.getAttribute('data-target');
    let offset = button.getAttribute('data-offset');
    
    window.scroll({
      left:0,
      top:findPos(document.getElementById(target))-offset, 
      behavior:'smooth'
    });

    menu_open = !menu_open
    
  }

</script>

<svelte:window bind:scrollY={y}/>

<div id="navbar" class=" space-x-4 md:space-x-0 min-h-fit w-screen sm:min-h-0  left-0 top-0 
    flex sm:items-center
     ease-in-out transition-all transform duration-300
     fixed z-50 
     {scrolled?'bg-[#003845]':'bg-transparent'} {scrolled?'py-3':'pt-5'}
    ">
  
    <div class="w-full container mx-auto  flex justify-between px-4">
      <div class=" md:px-2 m-0 font-medium w-fit p-0 rounded-md flex items-center justify-center ">
        <img src="/img/SDG Summit Logo-White1.svg" alt="logo" class="{scrolled?'h-12':'h-20'}">
      </div>

      <main class=" flex  items-start space-x-2 md:top-0 md:pt-0 pt-2 px-16">
        <div class="flex ">    
          <a href="" class=" bg-white md:p-3 p-1 md:text-base text-xs  text-[#003845] ml-auto flex uppercase">Register</a>

        </div>
        <!-- <div class="flex ">    
          <a href="" class=" bg-white md:p-3 p-1 md:text-base text-xs   text-[#003845] ml-auto flex ">EXHIBIT</a>

        </div> -->

        <div class="flex bg-white">    
          <button on:click="{()=> menu_open = !menu_open }" class="z-50 md:pt-4 pt-1  bg-[#003845] absolute cursor-pointer  top-3 right-5 w-10 h-10 md:text-xl text-xs ml-auto transition duration-150 hover:shadow py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none" type="button">
            <span class="block absolute w-6 h-0.5 rounded-sm bg-white top-5  duration-500 { menu_open ? 'opacity-0':'' }" ></span>
            <span class="block absolute w-6 h-0.5 rounded-sm bg-white top-6 duration-500 { menu_open ? 'transform rotate-45':'' }"></span>
            <span class="block absolute w-6 h-0.5 rounded-sm bg-white top-7 duration-500 { menu_open ? 'transform -rotate-45':'' }"></span>
            <span class="block absolute w-6 h-0.5 rounded-sm bg-white top-8 duration-500 { menu_open ? 'opacity-0':'' }" ></span>

            <!-- <span class="block absolute w-6 h-0.5 rounded-sm bg-white top0-3 duration-500 { menu_open ? 'opacity-0':'' }"></span> -->
          </button>
        </div>
      </main>
    </div>

</div>





<div id="navbar" class=" min-h-screen   h-20 p-8 sm:py-3 bg-[#003845]  left-0 top-0 
    flex items-center
     ease-in-out transition-all transform duration-300
    -translate-x-full  fixed z-50 
     {menu_open?'translate-x-0':''}
    ">
  
    <div class="flex bg-white top-4 absolute">    
      <button on:click="{()=> menu_open = !menu_open }" class="z-50 bg-[#003845] cursor-pointer fixed right-5 w-10 h-10 text-xl ml-auto transition duration-150 hover:shadow leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none" type="button">
        <span class="block absolute w-6 h-0.5 rounded-sm bg-white top-3 duration-500 { menu_open ? 'opacity-0':'' }" ></span>
        <span class="block absolute w-6 h-0.5 rounded-sm bg-white duration-500 { menu_open ? 'transform rotate-45':'' }"></span>
        <span class="block absolute w-6 h-0.5 rounded-sm bg-white duration-500 { menu_open ? 'transform -rotate-45':'' }"></span>
        <span class="block absolute w-6 h-0.5 rounded-sm bg-white bottom-2.5 duration-500 { menu_open ? 'opacity-0':'' }"></span>
      </button>
    </div>
    


    <div class="w-fit container mx-auto sm:items-center sm:justify-between">
      <div class="mb-5 sm:m-0 font-medium bg-white sm:bg-transparent p-5 sm:p-0 rounded-md flex items-center justify-center">
       
        <img src="/img/SDG summit logo white.svg" alt="logo" class="h-14">
      </div>

      <nav>
        <ul class=" md:text-sm gap-2 font-data">

          <li on:click="{()=> menu_open = !menu_open }" class="px-5 py-2 transform hover:bg-gray-400 transition duration-500 hover:scale-100">
            <a href="/" class="md:text-white text-white font-bold hover:text-black uppercase">Home</a>
          </li>

          <li on:click="{()=> menu_open = !menu_open }" class="px-5 py-2 transform hover:bg-gray-400 transition duration-500 hover:scale-100">
            <a href="#about" class="md:text-white text-white font-bold hover:text-black uppercase">About</a>
          </li>

       
          <!-- <li class="px-5 py-2 transform hover:bg-gray-400 transition duration-500 hover:scale-100">
            <a href="#schedule" class="md:text-white text-white font-bold hover:text-black uppercase">Schedule</a>
          </li> -->
          
          <li on:click="{()=> menu_open = !menu_open }" class="px-5 py-2 transform hover:bg-gray-400 transition duration-500 hover:scale-100">
            <a href="/" class="md:text-white text-white font-bold hover:text-black uppercase">Register</a>
          </li>

          <li on:click="{()=> menu_open = !menu_open }" class="px-5 py-2 transform hover:bg-gray-400 transition duration-500 hover:scale-100">
            <a href="#faq" class="md:text-white text-white font-bold hover:text-black uppercase">Faq</a>
          </li>

          <li on:click="{()=> menu_open = !menu_open }" class="px-5 py-2 transform hover:bg-gray-400 transition duration-500 hover:scale-100">
            <a href="/" class="md:text-white text-white font-bold hover:text-black uppercase">Tickets</a>
          </li>

          <li on:click="{()=> menu_open = !menu_open }" class="px-5 py-2 transform hover:bg-gray-400 transition duration-500 hover:scale-100">
            <a href="/" class="md:text-white text-white font-bold hover:text-black uppercase">EXHIBIT</a>
          </li>

          <li on:click="{()=> menu_open = !menu_open }" class="px-5 py-2 transform hover:bg-gray-400 transition duration-500 hover:scale-100">
            <a href="#contact" class="md:text-white text-white font-bold hover:text-black uppercase">Contact</a>
          </li>

        </ul>
      </nav>
    </div>


</div>
