// making id null option says we can have null values
// which does not help the user.id red flag
// if we did | null we would need to say if(profile.id){'do something'}
export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  phone: string | null
  date_of_birth: string | null
  nationality: string | null
  address: string | null
  city: string | null
  country: string | null
  postal_code: string | null
  preferred_currency: string
  newsletter_subscribed: boolean
  user_role: 'user' | 'admin'
  created_at: string
  updated_at: string
}

// export interface User {
//   id: string
//   app_metadata: UserAppMetadata
//   user_metadata: UserMetadata
//   aud: string
//   confirmation_sent_at?: string
//   recovery_sent_at?: string
//   email_change_sent_at?: string
//   new_email?: string
//   new_phone?: string
//   invited_at?: string
//   action_link?: string
//   email?: string
//   phone?: string
//   created_at: string
//   confirmed_at?: string
//   email_confirmed_at?: string
//   phone_confirmed_at?: string
//   last_sign_in_at?: string
//   role?: string
//   updated_at?: string
//   identities?: UserIdentity[]
//   is_anonymous?: boolean
//   is_sso_user?: boolean
//   factors?: Factor[]
//   deleted_at?: string
// }

// // Hover over 'user' here
// const { data: { user } } = await supabase.auth.getUser()

// // Then manually create the type:
// type User = typeof user // This won't work directly, but...

// // You can use this pattern:
// type UserType = Awaited<ReturnType<typeof supabase.auth.getUser>>['data']['user']
