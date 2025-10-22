import Link from 'next/link'
import React from 'react'

const MyAccount = ({
  mobile = false,
  setIsNaveOpen,
}: {
  mobile?: boolean
  setIsNaveOpen: (boolean: false) => null
}) => {
  const handleCloseMobile = () => {
    if (mobile) {
      console.log('closed')
      setIsNaveOpen(false)
    }
  }
  return (
    <Link
      href={`/auth/account`}
      className='capitalize bg-rose-600 text-sm p-1 px-2 rounded-lg text-white'
      onClick={handleCloseMobile}
    >
      <span className=''>My Account</span>
    </Link>
  )
}

export default MyAccount
