import React from 'react'
import EditButton from './EditButton'

const Booleans = ({ categorizedData }: { categorizedData: any }) => {
  const handleClick = () => {
    console.log('handle booleans')
  }
  return (
    <div className='space-y-2 text-sm mt-10'>
      <div>
        <div className='flex justify-between mb-4'>
          <h2 className='font-bold text-lg'>
            Boolean Fields ({Object.keys(categorizedData.boolean || {}).length})
          </h2>
          <EditButton onClick={handleClick} />
        </div>
        {Object.entries(categorizedData.boolean || {}).map(([key, value]) => (
          <div
            key={key}
            className='border-b pb-1 text-md flex items-center justify-between'
          >
            <p className=''>{key}:</p>{' '}
            {value ? (
              <input
                className='w-[20px] h-[20px]'
                type='checkbox'
                name=''
                defaultChecked={true}
                id=''
              />
            ) : (
              <input
                className='w-[20px] h-[20px]'
                type='checkbox'
                name=''
                id=''
                defaultChecked={false}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Booleans
