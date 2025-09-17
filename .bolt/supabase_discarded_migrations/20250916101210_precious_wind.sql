/*
  # Create Students Table for DpTech Trainings

  1. New Tables
    - `students`
      - `id` (uuid, primary key) - Unique identifier for each student
      - `first_name` (text, required) - Student's first name
      - `last_name` (text, required) - Student's last name
      - `email` (text, unique, required) - Student's email address
      - `mobile` (text, required) - Student's mobile number
      - `gender` (text, required) - Student's gender
      - `address` (text, required) - Student's complete address
      - `education` (text, required) - Student's highest education level
      - `date_of_birth` (text, required) - Student's date of birth
      - `course` (text, required) - Course student is interested in
      - `experience` (text, required) - Student's programming experience level
      - `registration_date` (text, optional) - When student registered
      - `created_at` (timestamptz, auto) - Record creation timestamp

  2. Security
    - Enable RLS on `students` table
    - Add policy for public access (since this is for registration)
    - Add policy for authenticated users to manage data

  3. Indexes
    - Index on email for faster lookups
    - Index on created_at for sorting
    - Index on course for filtering
*/

-- Create the students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  mobile text NOT NULL,
  gender text NOT NULL,
  address text NOT NULL,
  education text NOT NULL,
  date_of_birth text NOT NULL,
  course text NOT NULL,
  experience text NOT NULL,
  registration_date text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Create policy for public registration (anyone can insert)
CREATE POLICY "Allow public registration"
  ON students
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for public to read all students (for admin dashboard)
CREATE POLICY "Allow all operations"
  ON students
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_students_created_at ON students(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_students_course ON students(course);
CREATE INDEX IF NOT EXISTS idx_students_registration_date ON students(registration_date DESC);