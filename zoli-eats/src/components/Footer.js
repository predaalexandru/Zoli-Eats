import React from 'react'

const Footer = () => {
  return (
    <div className='w-[1640px] mx-auto py-16 px-10 grid md:grid-cols-3 gap-8 text-black bg-orange-600'>
      <div>
        <h1 className='text-4xl w-full'>Zoli <span className='font-bold'>Eats</span></h1>
        <p className='py-4 font-medium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>

      <div className='ml-8 width-[50%]'>
        <h3 className='font-medium text-2xl'>Links of interest</h3>
        <ul>
          <li className='py-2 text-sm hover:bg-black hover:text-orange-600 px-2 rounded-full'>About us</li>
          <li className='py-2 text-sm hover:bg-black hover:text-orange-600 px-2 rounded-full'>FAQ</li>
          <li className='py-2 text-sm hover:bg-black hover:text-orange-600 px-2 rounded-full'>Blog</li>
          <li className='py-2 text-sm hover:bg-black hover:text-orange-600 px-2 rounded-full'>Contact us</li>
          <li className='py-2 text-sm hover:bg-black hover:text-orange-600 px-2 rounded-full'>Security</li>
        </ul>
      </div>

      <div className='ml-8'>
        <h3 className='font-medium text-2xl'>Follow us</h3>
        <ul>
          <li className='py-2 text-sm hover:bg-black hover:text-orange-600 px-2 rounded-full'>Facebook</li>
          <li className='py-2 text-sm hover:bg-black hover:text-orange-600 px-2 rounded-full'>Twitter</li>
          <li className='py-2 text-sm hover:bg-black hover:text-orange-600 px-2 rounded-full'>Instagram</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer;