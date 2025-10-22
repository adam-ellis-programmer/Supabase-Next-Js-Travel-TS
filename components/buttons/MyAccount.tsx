'use client'
import Link from 'next/link'
import React from 'react'
import { MdAdminPanelSettings } from 'react-icons/md'
const MyAccount = ({
  mobile = false,
  setIsNaveOpen,
}: {
  mobile?: boolean
  setIsNaveOpen?: (boolean: false) => void
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
      className='capitalize bg-rose-600 text-sm p-1 px-2 rounded-lg text-white inline-flex items-center space-x-2'
      onClick={handleCloseMobile}
    >
      <MdAdminPanelSettings />
      <span className=''> My Account</span>
    </Link>
  )
}

export default MyAccount
