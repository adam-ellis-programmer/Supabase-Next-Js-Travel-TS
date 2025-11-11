import React from 'react'
import EditButton from './EditButton'

const NumberFields = ({ categorizedData }: { categorizedData: any }) => {
  const handleClick = () => {
    console.log('updating numbers...')
  }
  return (
    <div className='space-y-2 text-sm'>
      <div>
        <div className='flex justify-between mb-4 '>
          <h2 className='font-bold text-lg'>
            Number Fields ({Object.keys(categorizedData.number || {}).length})
          </h2>
          <EditButton onClick={handleClick} />
        </div>

        {Object.entries(categorizedData.number || {}).map(([key, value]) => (
          <div key={key}>
            <p className='flex justify-between border-b text-md p-1'>
              <span>{key}:</span>
              <span> {value as number}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NumberFields
