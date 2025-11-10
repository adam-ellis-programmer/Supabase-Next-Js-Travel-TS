import UnderConstruction from '@/components/site/UnderConstruction'
import { getTourByIdAdmin } from '@/lib/supabase/actions/admin/admin-actions'
import React from 'react'

// Add this interface for the props
interface AdminEditTourPageProps {
  params: Promise<{ id: string }>
}

// Add the type to the props
const AdminEditTourPage = async ({ params }: AdminEditTourPageProps) => {
  const { id } = await params

  const data = await getTourByIdAdmin(Number(id))
  console.log(data)

  return <UnderConstruction />
}

export default AdminEditTourPage
