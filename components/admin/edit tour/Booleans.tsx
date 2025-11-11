import React from 'react'

const Booleans = ({ categorizedData }: { categorizedData: any }) => {
  return (
    <div className='space-y-2 text-sm'>
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
  )
}

export default Booleans
