import React from 'react'

const TourHeader = ({ text, classes }: { text: string; classes: string }) => {
  return (
    <div className={classes}>
      <span className='bg-blue-100 p-2 rounded-md'>{text}</span>
    </div>
  )
}

export default TourHeader
