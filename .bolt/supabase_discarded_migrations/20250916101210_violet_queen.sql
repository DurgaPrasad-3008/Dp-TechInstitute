-- Seed data for DpTech Trainings
-- This file contains sample data for testing purposes

-- Insert sample students (optional - remove in production)
INSERT INTO students (
  first_name,
  last_name,
  email,
  mobile,
  gender,
  address,
  education,
  date_of_birth,
  course,
  experience,
  registration_date
) VALUES 
(
  'John',
  'Doe',
  'john.doe@example.com',
  '9876543210',
  'Male',
  '123 Main Street, Hyderabad, Telangana',
  'Bachelor''s',
  '1995-05-15',
  'Java Full Stack Development',
  'Complete Beginner',
  '2024-01-15T10:30:00Z'
),
(
  'Jane',
  'Smith',
  'jane.smith@example.com',
  '9876543211',
  'Female',
  '456 Oak Avenue, Bangalore, Karnataka',
  'Master''s',
  '1993-08-22',
  'Java Full Stack Development',
  'Some Basic Knowledge',
  '2024-01-16T14:20:00Z'
),
(
  'Raj',
  'Kumar',
  'raj.kumar@example.com',
  '9876543212',
  'Male',
  '789 Pine Road, Chennai, Tamil Nadu',
  'Diploma',
  '1997-12-10',
  'Core Java',
  'Intermediate',
  '2024-01-17T09:15:00Z'
);

-- Note: Remove or modify this seed data before deploying to production