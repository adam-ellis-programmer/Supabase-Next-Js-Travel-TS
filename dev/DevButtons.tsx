import Link from 'next/link'
import React from 'react'

const links = [
  { link: '/', text: 'Home' },
  { link: '/tours/1', text: 'Tour Page' },
]

const DevButtons = () => {
  return (
    <div>
      <ul className='flex border-b justify-center gap-3'>
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
