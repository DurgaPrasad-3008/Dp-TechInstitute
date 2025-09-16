// TypeScript types for Supabase database
// Generated for DpTech Trainings application

export interface Database {
  public: {
    Tables: {
      students: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          mobile: string
          gender: string
          address: string
          education: string
          date_of_birth: string
          course: string
          experience: string
          registration_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          mobile: string
          gender: string
          address: string
          education: string
          date_of_birth: string
          course: string
          experience: string
          registration_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          mobile?: string
          gender?: string
          address?: string
          education?: string
          date_of_birth?: string
          course?: string
          experience?: string
          registration_date?: string | null
          created_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper types
export type Student = Database['public']['Tables']['students']['Row']
export type StudentInsert = Database['public']['Tables']['students']['Insert']
export type StudentUpdate = Database['public']['Tables']['students']['Update']

// Course options
export type CourseType = 
  | 'Java Full Stack Development'
  | 'Core Java'
  | 'Advanced Java'
  | 'Other'

// Experience levels
export type ExperienceLevel = 
  | 'Complete Beginner'
  | 'Some Basic Knowledge'
  | 'Intermediate'
  | 'Advanced'

// Education levels
export type EducationLevel = 
  | '10th'
  | '12th'
  | 'Diploma'
  | 'Bachelor\'s'
  | 'Master\'s'
  | 'Other'

// Gender options
export type Gender = 'Male' | 'Female' | 'Other'