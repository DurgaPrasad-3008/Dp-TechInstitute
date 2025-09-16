# DpTech Trainings - Supabase Setup

This folder contains all the Supabase configuration and database files for the DpTech Trainings application.

## 📁 Folder Structure

```
supabase/
├── config.toml          # Supabase project configuration
├── migrations/          # Database migration files
│   └── create_students_table.sql
├── seed.sql            # Sample data for testing
├── .gitignore          # Git ignore rules for Supabase
└── README.md           # This file
```

## 🚀 Quick Setup

### 1. Install Supabase CLI
```bash
npm install -g supabase
```

### 2. Login to Supabase
```bash
supabase login
```

### 3. Initialize Project (if needed)
```bash
supabase init
```

### 4. Link to Remote Project
```bash
supabase link --project-ref YOUR_PROJECT_REF
```

### 5. Push Database Changes
```bash
supabase db push
```

## 🗄️ Database Schema

### Students Table
The main table for storing student registrations:

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key (auto-generated) |
| `first_name` | text | Student's first name |
| `last_name` | text | Student's last name |
| `email` | text | Student's email (unique) |
| `mobile` | text | Student's mobile number |
| `gender` | text | Student's gender |
| `address` | text | Student's complete address |
| `education` | text | Highest education level |
| `date_of_birth` | text | Student's date of birth |
| `course` | text | Interested course |
| `experience` | text | Programming experience level |
| `registration_date` | text | Registration timestamp |
| `created_at` | timestamptz | Record creation time |

## 🔐 Security

- **Row Level Security (RLS)** is enabled
- **Public registration** is allowed for new students
- **Admin access** for viewing all student data

## 🌱 Environment Variables

Make sure your `.env` file contains:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📝 Migration Commands

### Create a new migration
```bash
supabase migration new migration_name
```

### Apply migrations
```bash
supabase db push
```

### Reset database (development only)
```bash
supabase db reset
```

## 🧪 Testing

The `seed.sql` file contains sample data for testing. Remove or modify this data before deploying to production.

## 📚 Useful Commands

```bash
# Start local development
supabase start

# Stop local development
supabase stop

# View database in browser
supabase studio

# Generate TypeScript types
supabase gen types typescript --local > src/types/database.types.ts
```

## 🚀 Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Supabase
3. Deploy using Supabase's built-in CI/CD

## 📞 Support

For any issues with the database setup, contact:
- **Email**: dptechdeveloper77@gmail.com
- **WhatsApp**: +91 7731878344

---

**Created by**: Puttala Durga Prasad  
**Project**: DpTech Trainings - Java Full Stack Development Institute