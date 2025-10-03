// components/nav/super nav/SuperNav.tsx
import React from 'react'

const SuperNav = ({ navContent }: { navContent: string }) => {
  return (
    <div className='absolute mt-10 left-0 right-0 max-w-[1200px] h-[400px] mx-auto bg-gray-200 rounded-2xl p-10 shadow-2xl'>
      <h3 className='text-3xl my-2 text-center'> {navContent}</h3>
      <section>
        <div className='grid grid-cols-3'>
          <div>one</div>
          <div>two</div>
          <div>three</div>
        </div>
      </section>
    </div>
  )
}

export default SuperNav
