import { IoMdAddCircle } from 'react-icons/io'
import { MdAdminPanelSettings } from 'react-icons/md'
import { RiMoneyPoundBoxLine } from 'react-icons/ri'

export const adminLinks = [
  { text: 'admin', icon: MdAdminPanelSettings, href: '/admin' },
  { text: 'bookings', icon: RiMoneyPoundBoxLine, href: '/admin/bookings' },
  { text: 'add tour', icon: IoMdAddCircle, href: '/admin/add-tour' },
  { text: 'add landing', icon: IoMdAddCircle, href: '/admin/add-landing' },
  { text: 'view tours', icon: MdAdminPanelSettings, href: '/admin/view-tours' },
]
