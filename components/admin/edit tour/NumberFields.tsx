import React from 'react'

const NumberFields = ({ categorizedData }: { categorizedData: any }) => {
  return (
    <div className='space-y-2 text-sm'>
      {Object.entries(categorizedData.number || {}).map(([key, value]) => (
        <div key={key}>
          <p className='flex justify-between border-b text-md p-1'>
            <span>{key}:</span>
            <span> {value as number}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default NumberFields
