import { ASSETS } from '@/public/path'
import React, { memo } from 'react'

const Companies = () => {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-5 gap-8 p-5 sm:p-8 2xl:p-10'>
           <img src={ASSETS.COMPANIES.COMPANY_1.src} alt="" className='h-5 sm:h-6 md:h-8 lg:h-10 2xl:h-12 mx-auto' />
           <img src={ASSETS.COMPANIES.COMPANY_2.src} alt="" className='h-5 sm:h-6 md:h-8 lg:h-10 2xl:h-12 mx-auto' />
           <img src={ASSETS.COMPANIES.COMPANY_3.src} alt="" className='h-5 sm:h-6 md:h-8 lg:h-10 2xl:h-12 mx-auto' />
           <img src={ASSETS.COMPANIES.COMPANY_4.src} alt="" className='h-5 sm:h-6 md:h-8 lg:h-10 2xl:h-12 mx-auto' />
           <img src={ASSETS.COMPANIES.COMPANY_5.src} alt="" className='h-5 sm:h-6 md:h-8 lg:h-10 2xl:h-12 mx-auto' /> 
    </div>
  )
}

export default memo(Companies)
