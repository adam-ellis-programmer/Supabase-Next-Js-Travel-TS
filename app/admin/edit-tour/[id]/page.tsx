import { getTourByIdAdmin } from '@/lib/supabase/actions/admin/admin-actions'
import React from 'react'

import MainClientWrapper from '@/components/admin/edit tour/MainClientWrapper'

interface AdminEditTourPageProps {
  params: Promise<{ id: number }>
}

const AdminEditTourPage = async ({ params }: AdminEditTourPageProps) => {
  const { id } = await params
  const res = await getTourByIdAdmin(Number(id))
  console.log(res.data)

  if (!res.success || !res.data) {
    return <div>Tour not found</div>
  }

  return <MainClientWrapper res={res} tourId={id} />
}

export default AdminEditTourPage
