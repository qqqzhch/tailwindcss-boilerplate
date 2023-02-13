import logo from '../assets/imgs/logo-bookmark.svg'
import hero from '../assets/imgs/hero-bg.png'
import chome from '../assets/imgs/logo-chrome.svg'

function App() {
  return (
    <div className="font-Poppins">
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1"><img src={logo}/></div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-purple-900 uppercase text-xl">
            <li className="cursor-auto">menu1 </li>
            <li className="cursor-auto">menu2 </li>
            <li className="cursor-auto">menu2 </li>
            <button type="button" className="rounded-md px-7 py-3 uppercase bg-red-600">Login </button>

          </ul>
          <div className="flex sm:hidden  flex-1 justify-end">
          <i class="fa-solid fa-bars text-xl"></i>
          </div>

        </nav>
      </header>
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-blue-900 text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
            Utilities for controlling how flex items both grow and shrink.
            </h2>
            <p className=" text-grey text-lg text-center lg:text-left mb-6">
            Use select-auto to use the default browser behavior for selecting text. Useful for undoing other classes like .select-none at different breakpoints.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button type="button" className="btn btn-one hover:bg-red-200">22222</button>
              <button type="button" className="btn btn-two hover:bg-yellow-100">33333</button>
            </div>
          </div>
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 ">
            <img src={hero} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"></img>

          </div>
        </div>
        <div className="hidden md:block overflow-hidden bg-blue-400 rounded-l-full absolute h-80 w-2/4  top-32 -right-20"></div>
      </section>
      <section className="py-20 mt-20 lg:mt-60 bg-gray-100">
        <div className='sm:w-3/4 lg:w-5/12 mx-auto py-2'>
          <h1 className="text-3xl text-center text-blue-400">Configure your template paths</h1>
          <p className="text-center text-gray-200 mt-4">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>

        <div className=" relative mt-20 lg:mt-24 ">
           <div className="container flex flex-col lg:flex-row items-center gap-x-24 ">
             <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
             <img src={hero} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"></img>
             </div>
             <div  className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-blue-400">Install Tailwind CSS</h1>
            <p className="text-gray-300 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.
            </p>
            <button type="button" className="rounded-md px-7 py-3 uppercase bg-red-600">Login </button>
          </div>
           </div>

           <div className="hidden md:block overflow-hidden bg-blue-400 rounded-r-full absolute h-80 w-2/4  top-32 -left-20"></div>
          

        </div>
        <div className=" relative mt-20 lg:mt-24 ">
           <div className="container flex flex-col lg:flex-row-reverse items-center gap-x-24 ">
             <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
             <img src={hero} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"></img>
             </div>
             <div  className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-blue-400">Install Tailwind CSS</h1>
            <p className="text-gray-300 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.
            </p>
            <button type="button" className="rounded-md px-7 py-3 uppercase bg-red-600">Login </button>
          </div>
           </div>

           <div className="hidden md:block overflow-hidden bg-blue-400 rounded-l-full absolute h-80 w-2/4  top-32 -right-20"></div>
          

        </div>
        <div className=" relative mt-20 lg:mt-24 ">
           <div className="container flex flex-col lg:flex-row items-center gap-x-24 ">
             <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
             <img src={hero} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"></img>
             </div>
             <div  className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-blue-400">Install Tailwind CSS</h1>
            <p className="text-gray-300 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.
            </p>
            <button type="button" className="rounded-md px-7 py-3 uppercase bg-red-600">Login </button>
          </div>
           </div>

           <div className="hidden md:block overflow-hidden bg-blue-400 rounded-r-full absolute h-80 w-2/4  top-32 -left-20"></div>
          

        </div>
      </section>
      <section className="py-20 mt-20">
        <div className='sm:w-3/4 lg:w-5/12 mx-auto py-2'>
          <h1 className="text-3xl text-center text-blue-400">Configure your template paths</h1>
          <p className="text-center text-gray-200 mt-4">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  max-w-screen-lg mt-16">
          <div className="flex flex-col rounded-md shadow-md lg:mb-16">
            <div className="p-6 flex flex-col items-center">
            <img src={chome}></img>
             <h3 className="mt-5 mb-2 text-blue-400 text-lg">chome</h3>
             <p className="mb-2 text-gray-200 font-light">zzzzzzzz</p>

            </div>
             <hr className="border-b-1  border-bookmark-white"></hr>
             <div className="flex p-6">
             <button type="button" className=" flex-1 rounded-md px-7 py-3 uppercase bg-red-600">Login </button>

             </div>

          </div>

          <div className="flex flex-col rounded-md shadow-md lg:my-8">
            <div className="p-6 flex flex-col items-center">
            <img src={chome}></img>
             <h3 className="mt-5 mb-2 text-blue-400 text-lg">chome</h3>
             <p className="mb-2 text-gray-200 font-light">zzzzzzzz</p>

            </div>
             <hr className="border-b-1  border-bookmark-white"></hr>
             <div className="flex p-6">
             <button type="button" className=" flex-1 rounded-md px-7 py-3 uppercase bg-red-600">Login </button>

             </div>

          </div>
          <div className="flex flex-col rounded-md shadow-md lg:mt-16">
            <div className="p-6 flex flex-col items-center">
            <img src={chome}></img>
             <h3 className="mt-5 mb-2 text-blue-400 text-lg">chome</h3>
             <p className="mb-2 text-gray-200 font-light">zzzzzzzz</p>

            </div>
             <hr className="border-b-1  border-bookmark-white"></hr>
             <div className="flex p-6">
             <button type="button" className=" flex-1 rounded-md px-7 py-3 uppercase bg-red-600">Login </button>

             </div>

          </div>
          

        </div>
        

        

      </section>

      <section className="bg-white my-20">
        <div className=" container">
        <h2 className="text-blue-900 text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
            Utilities for controlling how flex items both grow and shrink.
            </h2>
            <p className=" text-grey text-lg text-center lg:text-left mb-6">
            Use select-auto to use the default browser behavior for selecting text. Useful for undoing other classes like .select-none at different breakpoints.
            </p>
            <div className="flex flex-col sm:w-3/4 lg:5/12 mt-12 mx-auto">
              <div className="flex items-center border-b  py-4 ">
                <span className=' flex-1 '>Use select-auto</span>
                <i class="fa-solid fa-bars"></i>
                
              </div>
              <div className="flex items-center border-b  py-4 ">
                <span className=' flex-1 '>Use select-auto</span>
                <i class="fa-solid fa-bars"></i>
                
              </div><div className="flex items-center border-b  py-4 ">
                <span className=' flex-1 '>Use select-auto</span>
                <i class="fa-solid fa-bars"></i>
                
              </div><div className="flex items-center border-b  py-4 ">
                <span className=' flex-1 '>Use select-auto</span>
                <i class="fa-solid fa-bars"></i>
                
              </div>
              <button type="button" className=" mt-12 flex self-center btn btn-two hover:bg-yellow-100">33333</button>

            </div>
            

        </div>


      </section>

      <section className="bg-blue-300 text-white py-20">
        <div className="container">
          <div className="sm:w3/4 lg:w-2/4 mx-auto">
            <p className="font-light uppercase text-center mb-8">xxxxxxxxxx</p>
            <h1 className="text-3xl text-center">xxxxxxxxxxxxxxxx</h1>
            <div className="flex flex-col sm:flex-row mt-8 gap-6">
              <input type="text" placeholder='xxxxxxx0' className="focus:outline-none flex-1 px-2 py-3 rounded-md  text-black"></input>
              <button type="button" className="btn btn-two hover:bg-yellow-100">33333</button>
            </div>
          </div>
        </div>

      </section>
      <section className="bg-blue-900 py-8">
        <div className="container flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <ul className=" flex  text-white uppercase gap-12 text-xs">
            <li className="cursor-auto">menu1 </li>
            <li className="cursor-auto">menu2 </li>
            <li className="cursor-auto">menu2 </li>
            

          </ul>
        </div>
        <div className="flex gap-10 mt-12 md:mt-0">
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-bars"></i>
          </div>
          </div>

      </section>

    </div>
  )
}

export default App
