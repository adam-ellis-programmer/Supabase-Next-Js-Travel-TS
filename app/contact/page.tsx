import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdOutlineEmojiPeople } from 'react-icons/md'
import { IconType } from 'react-icons'
import SendMessageAlert from '@/components/admin/alerts/SendMessageAlert'
// Server Action - defined at top level
async function handleContactSubmit(formData: FormData) {
  'use server' // This makes it a Server Action

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  console.log({ name, email, message })

  // Here:
  // - Save to database
  // - Send email
  // - Call API
  // - etc.

  // Optional: revalidate or redirect
  // redirect('/thank-you')
}

// [] is typeScript key signiture (so we do not have to explicitly define (verbose))
// TypeScript Dynamic Access
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
    FaPhoneSquareAlt,
    MdEmail,
    IoLogoWhatsapp,
    MdOutlineEmojiPeople,
  }

const contactData = [
  { text: '0207 776345', icon: 'FaPhoneSquareAlt' },
  { text: 'hello@travelexplorer.com', icon: 'MdEmail' },
  { text: '078321321', icon: 'IoLogoWhatsapp' },
  { text: '1 London Bridge Road SE1 1BR', icon: 'MdOutlineEmojiPeople' },
]

const inputFields = [
  { name: 'name', type: 'text', placeHolder: 'Enter Name' },
  { name: 'email', type: 'text', placeHolder: 'Enter Email' },
  { name: 'message', type: 'textarea', placeHolder: 'Enter Message Here' },
]

const ContactPage = () => {
  const contactMap = contactData.map((item) => {
    return {
      text: item.text,
      icon: iconMap[item.icon], // lookup
    }
  })

  return (
    <div className='min-h-[calc(100vh-100px)] bg-gray-800'>
      {/* <SendMessageAlert /> */}
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
          {contactMap.map((item, i) => {
            return (
              <div
                key={i}
                className='shadow-2xl shadow-[#afa0a065] h-[100px] p-5 rounded-lg border-rose-400 border md:hover:border-green-400 mb-5 md:mb-0'
              >
                <item.icon className='text-white text-2xl' />
                <p className='text-white mt-1'>{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className='mt-5 max-w-[1300px] mx-auto px-5 md:px-0 pb-10'>
        <p className='text-white text-center text-2xl mb-7 capitalize'>
          Leave Us a message
        </p>
        {/* Use action instead of onSubmit */}
        <form action={handleContactSubmit}>
          {inputFields.slice(0, 2).map((item, i) => {
            return (
              <input
                key={i}
                type={item.type}
                name={item.name} // Add name attribute
                className='bg-white w-full text-lg p-3 rounded-md mb-4'
                placeholder={item.placeHolder}
                required
              />
            )
          })}

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
