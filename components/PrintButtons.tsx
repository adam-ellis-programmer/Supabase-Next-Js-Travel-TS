'use client'

const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      className='px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors'
    >
      Print Confirmation
    </button>
  )
}

export default PrintButton
