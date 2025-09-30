import { getServerSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { DashboardContent } from '@/components/dashboard/dashboard-content'

export default async function DashboardPage() {
  const session = await getServerSession()
  
  if (!session) {
    redirect('/login')
  }

  return <DashboardContent user={session.user} />
}
