import Link from 'next/link'
import React from 'react'

export const links = [
  { link: '/', text: 'Home' },
  { link: '/tours/1', text: 'Tour Page' },
  { link: '/country-landing/australia', text: 'Country Landing' },
  { link: '/booking', text: 'Booking' },
  { link: '/tours', text: 'tours' },
  { link: '/admin', text: 'admin' },
  { link: '/admin/add-tour', text: 'add tour' },
  { link: '/admin/add-landing', text: 'add landing (page)' },
  { link: '/admin/view-tours', text: 'View Tours (admin)' },
  { link: '/auth/account', text: 'users account' },
  { link: '/auth/sign-up', text: 'sign up' },
  { link: '/auth/login', text: 'login' },
]

const DevButtons = () => {
  return (
    <div className=' pb-5'>
      <h3 className='mb-3'>
        <span className='bg-rose-400 p-2 rounded-lg text-white'>
          dev buttons
        </span>
      </h3>

      <ul className='grid grid-cols-6 gap-4 mb-1  border-b'>
        {links.map((link, i) => {
          return (
            <li key={i} className=''>
              <Link className='' href={link.link}>
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DevButtons
