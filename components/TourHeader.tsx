import React from 'react'

const TourHeader = ({ text, classes }: { text: string; classes: string }) => {
  return (
    <div className={classes}>
      <span className='bg-rose-500 text-white p-3 inline-block rounded-lg'>{text}</span>
    </div>
  )
}

export default TourHeader
