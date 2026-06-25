# JP Tech Academy Database Setup Guide

## Prerequisites

- MySQL 8.0 or higher
- Node.js 18 or higher
- npm or yarn

## Setup Instructions

### 1. Create Database Manually (Optional)

If you prefer to set up the database manually:

```bash
mysql -u root -p < scripts/database.sql
```

### 2. Automatic Setup

After installing dependencies, run:

```bash
npm run db:setup
```

This will automatically create all tables and insert sample data.

### 3. Environment Variables

Create a `.env.local` file with your database credentials:

```env
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=your_password
DATABASE_NAME=jptechacademy
DATABASE_PORT=3306
JWT_SECRET=your_secret_key_here_change_in_production
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Database Schema

### Tables

#### students
- Student registration and authentication
- Fields: id, firstName, lastName, email, phone, course, batch, experience, password

#### courses
- Course information
- Fields: id, name, description, duration, level, price, category

#### batches
- Batch schedules and details
- Fields: id, courseId, startDate, endDate, instructor, schedule, capacity

#### enrollments
- Student enrollments in batches
- Fields: id, batchId, studentId, enrolledAt

#### contact_messages
- Contact form submissions
- Fields: id, name, email, phone, subject, message

#### certificates
- Student certificates
- Fields: id, studentId, certificateNumber, issuedDate

## Troubleshooting

### Connection Error

If you get a connection error, verify:
1. MySQL is running
2. Credentials in `.env.local` are correct
3. Database exists

### Table Already Exists

Tables are created with `IF NOT EXISTS`, so it's safe to run setup multiple times.

## Testing Connection

To test the database connection:

```bash
node scripts/setupDb.js
```
