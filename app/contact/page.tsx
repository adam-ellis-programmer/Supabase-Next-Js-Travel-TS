import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdOutlineEmojiPeople } from 'react-icons/md'

// Server Action - defined at top level
async function handleContactSubmit(formData: FormData) {
  'use server' // This makes it a Server Action

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  console.log({ name, email, message })

  // Here you would:
  // - Save to database
  // - Send email
  // - Call API
  // etc.

  // Optional: revalidate or redirect
  // redirect('/thank-you')
}

const icons = {} // icons map?

const contactData = [
  { text: '0207 776345', icon: '' },
  { text: 'hello@travelexplorer.com', icon: '' },
  { text: 'hello@travelexplorer.com', icon: '' },
  { text: '078321321', icon: '' },
  { text: '1 London Bridge Road SE1 1BR', icon: '' },
]

const ContactPage = () => {
  return (
    <div className='min-h-[calc(100vh-100px)] bg-gray-800'>
      <section className='pt-10'>
        <p className='text-6xl capitalize text-center text-white'>
          get in touch
        </p>
        <p className='text-center text-white mt-2 capitalize'>
          and a member of our team will be able to help!
        </p>
      </section>

      <section className='mt-10'>
        <div className='md:grid grid-cols-4 gap-4 max-w-[1300px] mx-auto p-5 '>
          <div className='shadow-2xl shadow-[#afa0a065] h-[100px] p-5 rounded-lg border-rose-400 border'>
            <FaPhoneSquareAlt className='text-white text-2xl' />
            <p className='text-white mt-1'>0207 776345</p>
          </div>
          <div className='shadow-2xl shadow-[#afa0a065] h-[100px] p-5 rounded-lg border-rose-400 border'>
            <MdEmail className='text-white text-2xl' />
            <p className='text-white mt-1'>hello@travelexplorer.com</p>
          </div>
          <div className='shadow-2xl shadow-[#afa0a065] h-[100px] p-5 rounded-lg border-rose-400 border'>
            <IoLogoWhatsapp className='text-white text-2xl' />
            <p className='text-white mt-1'>078321321</p>
          </div>
          <div className='shadow-2xl shadow-[#afa0a065] h-[100px] p-5 rounded-lg border-rose-400 border'>
            <MdOutlineEmojiPeople className='text-white text-2xl' />
            <p className='text-white mt-1'>1 London Bridge Road SE1 1BR</p>
          </div>
        </div>
      </section>

      <section className='mt-5 max-w-[1300px] mx-auto px-5 md:px-0 pb-10'>
        <p className='text-white text-center text-2xl mb-7 capitalize'>
          Leave Us a message
        </p>
        {/* Use action instead of onSubmit */}
        <form action={handleContactSubmit}>
          <input
            type='text'
            name='name' // Add name attribute
            className='bg-white w-full text-lg p-3 rounded-md mb-4'
            placeholder='Enter Name'
            required
          />
          <input
            type='email'
            name='email' // Add name attribute
            className='bg-white w-full text-lg p-3 rounded-md mb-4'
            placeholder='Enter Email'
            required
          />
          <textarea
            name='message' // Add name attribute
            className='w-full min-h-[200px] p-3 rounded-md'
            placeholder='Enter Message Here'
            required
          />
          <div className='mt-4'>
            <button
              type='submit'
              className='text-white flex items-center space-x-2 bg-rose-500 p-2 px-4 rounded-md hover:bg-rose-600'
            >
              <FiSend />
              <span>Submit</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ContactPage
