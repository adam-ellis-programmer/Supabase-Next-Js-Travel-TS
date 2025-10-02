import React from 'react'

// Add the type definition here
type Reaction = {
  emoji: string
  label: string
  color: string
}

const TourComment = () => {
  // Use the type annotation here
  const reactions: Record<string, Reaction> = {
    like: {
      emoji: '👍',
      label: 'Like',
      color: '#3b82f6', // blue
    },
    dislike: {
      emoji: '👎',
      label: 'Dislike',
      color: '#ef4444', // red
    },
    love: {
      emoji: '❤️',
      label: 'Love',
      color: '#dc2626', // red
    },
    heart: {
      emoji: '💖',
      label: 'Heart',
      color: '#ec4899', // pink
    },
  }

  const buttons = Object.values(reactions)
  console.log(buttons)

  return (
    <li className='min-h-20 border-b p-5'>
      <div className='flex items-center'>
        <img
          src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/person1.jpg'
          alt=''
          className='w-[90px] h-[90px] rounded-full object-cover'
        />
        <p className='text-[1rem] p-5'>Sarah Smith</p>
      </div>
      <p className='mt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        error! Facere enim accusantium, minus natus quaerat mollitia, quasi
        dolore sapiente eius animi obcaecati recusandae earum corrupti
        perferendis doloribus necessitatibus pariatur?
      </p>

      <div className='mt-5'>
        {buttons.map((item, i) => {
          return (
            <button key={i} className='text-2xl mx-5'>
              {item.emoji}
            </button>
          )
        })}
      </div>
    </li>
  )
}

export default TourComment
