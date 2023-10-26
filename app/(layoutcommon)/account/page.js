import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import ProfilePage from '@/app/components/pages/ProfilePage'

export default async function Account() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const user = session?.user ?? {}
  const { first_name, last_name } = user.user_metadata ?? {}
  const name = `${first_name ?? ''} ${last_name ?? ''}`
  const email = user.email ?? ''

  return <ProfilePage name={name} email={email}/>
}
