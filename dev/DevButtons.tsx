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
    <div>
      <ul className='flex border-b justify-center gap-3 overflow-scroll'>
        {links.map((link, i) => {
          return (
            <li key={i} className='bg-rose-500 p-3 rounded   text-white '>
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
