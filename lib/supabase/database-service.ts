// revalidatePath('/', 'layout') // This revalidates everything ,...

import { createClient } from '@/lib/supabase/server'

export class DatabaseService {
  static async getByid<T>(dbName: string, id: string): Promise<T | null> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from(dbName)
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Database error:', error)
      return null
    }

    return data as T
  }

  static async updateById(table: string, docId: string) {
    //
  }
}

// for updating auth features

export class AuthService {
  // ====================================
  // -- UPDATE PROFILE ONLY
  // ====================================
  static async updateProfile<T>(
    userId: string,
    updates: T
    // ): Promise<{ success: boolean; error?: string; data?: object }> {
  ): Promise<
    { success: true; data: object } | { success: false; error: string }
  > {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select() // fetches the updated row
      .single()

    if (error) {
      console.error('Profile update error:', error)
      return { success: false, error: error.message }
    }
    return { success: true, data }
  }

  // ====================================
  // -- UPDATE AUTH ONLY
  // ====================================

  // prettier-ignore
  static async updateAuthEmail(
    newEmail: string
  ): Promise<{ success: true; data: object } | { success: false, error: string }> {
    
    const supabase = await createClient()
    const { data, error } = await supabase.auth.updateUser({
      email: newEmail,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  }

  // ====================================
  // -- UPDATE BOTH
  // ====================================
  static async updateUserProfiles(
    userId: string,
    updates: { email?: string; full_name?: string }
  ): Promise<{ success: true } | { success: false; error: string }> {
    try {
      // 1: update custom profile
      const profileResult = await this.updateProfile(userId, updates)
      // 2: update auth table

      if (!profileResult.success) {
        return profileResult
      }

      if (updates.email) {
        const authResult = await this.updateAuthEmail(updates.email)
        if (!authResult.success) {
          // Auth email update failed, but profile was updated
          // You might want to rollback profile update here
          return {
            success: false,
            error: `Profile updated but auth email failed: ${authResult.error}`,
          }
        }
      }
      return { success: true }
    } catch (error) {
      console.error('Update error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }
}
