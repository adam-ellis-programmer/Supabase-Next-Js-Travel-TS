// ========== AllToursButton.tsx ==========
import React from 'react'

interface AllToursButtonProps {
  country: string
  isActive: boolean
  onClick: () => void
}

const AllToursButton = ({
  country,
  isActive,
  onClick,
}: AllToursButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 mb-2 rounded-lg font-semibold transition-all ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
      }`}
    >
      {country.charAt(0).toUpperCase() + country.slice(1)}
    </button>
  )
}

export default AllToursButton
