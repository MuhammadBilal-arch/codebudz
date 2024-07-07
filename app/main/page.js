import React from 'react'

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative overflow-hidden flex items-center justify-center min-h-screen bg-purple">
      {/* <nav className="flex items-center justify-between w-full px-14">
        <div className=" w-22 h-22"><img src={ASSETS.LOGO.LOGO.src} alt="logo" className="object-cover w-full h-full"/></div>
        <div className="space-x-4 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <button         
        className="text-white cursor-pointer w-32 h-10 bg-purple rounded-md flex items-center justify-center">
          Schedule call
        </button>
      </nav> */}
      <div className="grid grid-cols-4 gap-4  w-full">
        <div className="bg-amber-800 h-72 text-green-300 w-full">
          <img src='https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720051200&semt=sph' alt=""
          className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-amber-800 h-72 text-green-300 w-full">
          <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" className="object-cover w-full h-full" />
        </div>
        <div className="bg-amber-800 h-72 text-green-300 w-full"><img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        className="object-cover w-full h-full"
        /></div>
        <div className="bg-amber-800 h-72 text-green-300 w-full">
          <img src="https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/pass/How-to-Choose-a-Laptop-August-2023-Gear.jpg" className="object-cover w-full h-full"/></div>
        <div className="bg-amber-800 h-72 text-green-300 w-full">

        </div>
      </div>
    </div>
  )
}

export default page