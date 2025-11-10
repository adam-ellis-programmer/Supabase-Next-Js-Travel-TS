'use client'
import { useRouter } from 'next/navigation'

const UnderConstruction = () => {
  const router = useRouter()
  return (
    <div className='h-[calc(100vh-100px)] bg-[#455667] flex justify-center items-center'>
      <div className='bg-white w-[500px] max-w-[500px] flex flex-col justify-center items-center p-10 rounded-md shadow-2xl animate-bounce'>
        <p className='text-center mb-3'>This page is under construction</p>
        <p className='text-center mb-3'>Check back soon</p>
        <button  onClick={() => router.push('/')} className='bg-[#2f536e] text-white p-1 px-5 rounded-lg'>
          Back Home
        </button>
      </div>
    </div>
  )
}

export default UnderConstruction
