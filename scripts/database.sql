-- JP Tech Academy Database Schema

CREATE DATABASE IF NOT EXISTS jptechacademy;
USE jptechacademy;

-- Students Table
CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  course VARCHAR(100),
  batch VARCHAR(100),
  experience VARCHAR(50),
  password VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  duration VARCHAR(50),
  level VARCHAR(50),
  price DECIMAL(10, 2),
  category VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Batches Table
CREATE TABLE IF NOT EXISTS batches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  courseId INT NOT NULL,
  startDate DATE,
  endDate DATE,
  instructor VARCHAR(100),
  schedule VARCHAR(255),
  capacity INT DEFAULT 30,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (courseId) REFERENCES courses(id)
);

-- Enrollments Table
CREATE TABLE IF NOT EXISTS enrollments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  batchId INT NOT NULL,
  studentId INT NOT NULL,
  enrolledAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_enrollment (batchId, studentId),
  FOREIGN KEY (batchId) REFERENCES batches(id),
  FOREIGN KEY (studentId) REFERENCES students(id)
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certificates Table
CREATE TABLE IF NOT EXISTS certificates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  studentId INT NOT NULL,
  certificateNumber VARCHAR(255) UNIQUE,
  issuedDate DATE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (studentId) REFERENCES students(id)
);

-- Insert Sample Courses
INSERT INTO courses (name, description, duration, level, price, category) VALUES
('Web Development with Next.js', 'Learn modern web development with Next.js, React, and Tailwind CSS', '12 weeks', 'Intermediate', 15000, 'web'),
('Full Stack Development', 'Complete full stack development course covering frontend and backend', '16 weeks', 'Advanced', 25000, 'web'),
('Python for Data Science', 'Learn Python programming and data analysis techniques', '10 weeks', 'Beginner', 12000, 'programming'),
('JavaScript Masterclass', 'Deep dive into JavaScript ES6+ and advanced concepts', '8 weeks', 'Intermediate', 10000, 'programming'),
('React Advanced Patterns', 'Master advanced React patterns and state management', '10 weeks', 'Advanced', 18000, 'web'),
('UI/UX Design Fundamentals', 'Learn design principles and create beautiful user interfaces', '12 weeks', 'Beginner', 14000, 'design');

-- Insert Sample Batches
INSERT INTO batches (courseId, startDate, endDate, instructor, schedule, capacity) VALUES
(1, '2024-07-01', '2024-09-15', 'John Smith', 'Mon, Wed, Fri - 6:00 PM to 8:00 PM', 40),
(2, '2024-08-05', '2024-11-30', 'Sarah Johnson', 'Tue, Thu, Sat - 7:00 PM to 9:00 PM', 35),
(3, '2024-07-15', '2024-09-30', 'Mike Chen', 'Mon, Wed - 5:00 PM to 7:00 PM', 30),
(4, '2024-08-10', '2024-10-05', 'Emma Wilson', 'Sat, Sun - 4:00 PM to 6:00 PM', 40),
(5, '2024-09-01', '2024-11-15', 'David Lee', 'Tue, Thu - 6:30 PM to 8:30 PM', 25),
(6, '2024-08-20', '2024-10-31', 'Lisa Anderson', 'Mon, Wed, Fri - 3:00 PM to 5:00 PM', 30);
